import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IAccountingRecord } from '../../shared/interfaces/accounting-record.interface';
import { AccountingHttpService } from '../../shared/services/accounting.http.service';
import { FormsModule } from '@angular/forms';

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
  currentPage = 4;
  totalPages = 1;

  constructor() {
    this.loadRecords();
  }

  loadRecords(): void {
    this.accountingService.getAllRecords().subscribe((data) => {
      this.records = data.sort((a, b) => a.id - b.id);
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

  downloadTxt(): void {
    const apiUrl = 'http://localhost:8080/api/accounting/export-txt';

    // 创建隐藏的链接来触发下载
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('下载失败');
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '账单统计.txt';
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        alert('导出失败：' + error.message);
      });
  }
}
