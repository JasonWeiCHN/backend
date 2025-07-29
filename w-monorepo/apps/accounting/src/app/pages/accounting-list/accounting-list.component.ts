import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IAccountingRecord } from '../../shared/interfaces/accounting-record.interface';
import { AccountingHttpService } from '../../shared/services/accounting.http.service';
import { FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-accounting-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './accounting-list.component.html',
  styleUrl: './accounting-list.component.scss',
  providers: [AccountingHttpService],
})
export class AccountingListComponent {
  private accountingService = inject(AccountingHttpService);
  records: IAccountingRecord[] = [];
  pagedRecords: IAccountingRecord[] = [];

  searchField = 'gameNames';
  searchKeyword = '';

  pageSize = 50;
  currentPage = 1;
  totalPages = 1;

  showReminder = false;
  reminderRecord: IAccountingRecord | null = null;

  showExportModal = false;
  exportStartDateTime = '';
  exportEndDateTime = '';
  exportMode: 'all' | 'range' = 'all'; // 新增导出模式
  exportFormat: 'txt' | 'excel' | 'pdf' | 'csv' = 'txt';

  constructor() {
    this.loadRecords();
  }

  loadRecords(): void {
    this.accountingService.getAllRecords().subscribe((data) => {
      this.records = data;
      this.totalPages = Math.ceil(this.records.length / this.pageSize);
      this.updatePagedRecords();
    });
  }

  search(): void {
    const keyword = this.searchKeyword.trim().toLowerCase();

    if (!keyword) {
      // 关键字为空时，重新加载所有记录，恢复全部数据
      this.loadRecords();
      return;
    }

    // 有关键字时执行过滤
    this.accountingService.getAllRecords().subscribe((data) => {
      this.records = data.filter((record) => {
        const value = this.getSearchableValue(record, this.searchField);
        return value.includes(keyword);
      });
      this.currentPage = 1;
      this.totalPages = Math.ceil(this.records.length / this.pageSize);
      this.updatePagedRecords();
    });
  }

  private getSearchableValue(record: IAccountingRecord, field: string): string {
    switch (field) {
      case 'gameNames':
        return record.gameNames.join('; ').toLowerCase();
      case 'customerType':
        return record.customerType?.toLowerCase() || '';
      case 'platform':
        return record.platform?.toLowerCase() || '';
      case 'remark':
        return record.remark?.toLowerCase() || '';
      default:
        return '';
    }
  }

  updatePagedRecords(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedRecords = this.records.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedRecords();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedRecords();
    }
  }

  delete(id: number): void {
    if (confirm('确定要删除这条记录吗？')) {
      this.accountingService.deleteRecord(id).subscribe(() => {
        this.records = this.records.filter((r) => r.id !== id);
        this.totalPages = Math.ceil(this.records.length / this.pageSize);
        if (this.currentPage > this.totalPages) {
          this.currentPage = this.totalPages;
        }
        this.updatePagedRecords();
      });
    }
  }

  formatTimeRange(start: string, end: string): string {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const pad = (n: number) => n.toString().padStart(2, '0');

    const startDateStr = `${startDate.getFullYear()}-${pad(
      startDate.getMonth() + 1
    )}-${pad(startDate.getDate())}`;
    const startTimeStr = `${pad(startDate.getHours())}:${pad(
      startDate.getMinutes()
    )}`;
    const endDateStr = `${endDate.getFullYear()}-${pad(
      endDate.getMonth() + 1
    )}-${pad(endDate.getDate())}`;
    const endTimeStr = `${pad(endDate.getHours())}:${pad(
      endDate.getMinutes()
    )}`;

    if (startDateStr === endDateStr) {
      return `${startDateStr} ${startTimeStr} - ${endTimeStr}`;
    } else {
      return `${startDateStr} ${startTimeStr} - ${endDateStr} ${endTimeStr}`;
    }
  }

  openReminderModal(record: IAccountingRecord): void {
    this.reminderRecord = record;
    this.showReminder = true;
  }

  closeReminderModal(): void {
    this.showReminder = false;
    this.reminderRecord = null;
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate()
    )} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  exportReminderAsImage(): void {
    const card = document.querySelector('.reminder-card') as HTMLElement;
    if (!card) return;

    html2canvas(card, { backgroundColor: '#ffffff' }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = '游戏提醒卡片.png';
      link.click();
    });
  }

  openExportModal(): void {
    this.exportMode = 'all';
    this.exportFormat = 'txt';
    this.exportStartDateTime = '';
    this.exportEndDateTime = '';
    this.showExportModal = true;
  }

  closeExportModal(): void {
    this.showExportModal = false;
  }

  downloadExport(): void {
    let formatSuffix: string;
    switch (this.exportFormat) {
      case 'txt':
        formatSuffix = 'txt';
        break;
      case 'excel':
        formatSuffix = 'xlsx';
        break;
      case 'pdf':
        formatSuffix = 'pdf';
        break;
      case 'csv':
        formatSuffix = 'csv';
        break;
      default:
        formatSuffix = 'txt';
    }

    if (this.exportMode === 'all') {
      // http://localhost:8086/api/accounting 酷乐乐multiple
      // http://111.230.29.99:8080/multiple/api/accounting
      // https://kulele.club/sass/api/multiple/api/accounting
      const url = `http://localhost:8086/api/accounting/export-${formatSuffix}`;
      this.triggerDownload(url, `账单统计.${formatSuffix}`);
    } else {
      if (!this.exportStartDateTime || !this.exportEndDateTime) {
        alert('请填写完整的开始和结束时间');
        return;
      }

      const params = new URLSearchParams({
        startDateTime: this.exportStartDateTime,
        endDateTime: this.exportEndDateTime,
      });

      // http://localhost:8086/api/accounting 酷乐乐multiple
      // http://111.230.29.99:8080/multiple/api/accounting
      // https://kulele.club/sass/api/multiple/api/accounting
      const url = `http://localhost:8086/api/accounting/export-${formatSuffix}-by-range?${params}`;
      const filename = `账单明细_${this.exportStartDateTime}_to_${this.exportEndDateTime}.${formatSuffix}`;
      this.triggerDownload(url, filename);
    }
  }

  private triggerDownload(url: string, filename: string): void {
    const token = localStorage.getItem('token'); // ✅ 读取 token

    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ 手动加 token
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error('下载失败');
        return response.blob();
      })
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(blobUrl);
        this.closeExportModal();
      })
      .catch((error) => {
        alert('导出失败：' + error.message);
      });
  }
}
