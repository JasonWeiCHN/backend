import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MemberHttpService } from '../../shared/services/member.http.service';
import { IMerberWithBalance } from '../../shared/interfaces/member.interface';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.scss',
  providers: [MemberHttpService],
})
export class MemberListComponent implements OnInit {
  private service = inject(MemberHttpService);
  protected router = inject(Router);

  members: IMerberWithBalance[] = [];
  pagedMembers: IMerberWithBalance[] = [];
  searchKeyword = '';
  currentPage = 1;
  pageSize = 30;
  totalPages = 1;

  showExportModal = false;
  exportFormat: 'txt' | 'excel' | 'pdf' | 'csv' = 'txt';

  // 充值导出
  showRechargeExportModal = false;
  rechargeExportFormat: 'txt' | 'excel' | 'pdf' | 'csv' = 'txt';
  rechargeExportDate: string = new Date().toISOString().substring(0, 10); // 默认今天

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.service.getAllMembersWithBalance().subscribe((data) => {
      this.members = data;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    let filtered = this.members;
    if (this.searchKeyword.trim()) {
      const keyword = this.searchKeyword.trim();
      filtered = filtered.filter(
        (m) =>
          m.name.includes(keyword) ||
          m.phone.includes(keyword) ||
          m.remark.includes(keyword)
      );
    }
    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedMembers = filtered.slice(start, start + this.pageSize);
  }

  search(): void {
    this.currentPage = 1;
    this.applyFilter();
  }

  delete(id: number): void {
    if (confirm('确定要删除该会员吗？')) {
      this.service.deleteMember(id).subscribe(() => this.load());
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyFilter();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.applyFilter();
    }
  }

  formatDate(dateTime: string): string {
    const date = new Date(dateTime);
    return date.toLocaleString();
  }

  openExportModal(): void {
    this.exportFormat = 'txt';
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

    // http://localhost:8086/api/members
    // http://111.230.29.99:8080/multiple/api/members
    // https://kulele.club/sass/api/multiple/api/members
    const url = `https://kulele.club/sass/api/multiple/api/members/export-${formatSuffix}`;
    const filename = `会员列表.${formatSuffix}`;

    this.triggerDownload(url, filename);
  }

  openRechargeExportModal(): void {
    this.rechargeExportFormat = 'txt';
    this.rechargeExportDate = new Date().toISOString().substring(0, 10);
    this.showRechargeExportModal = true;
  }

  closeRechargeExportModal(): void {
    this.showRechargeExportModal = false;
  }

  downloadRechargeExport(): void {
    if (!this.rechargeExportDate) {
      alert('请选择日期！');
      return;
    }

    let formatSuffix: string;
    switch (this.rechargeExportFormat) {
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

    // http://localhost:8086/api/members/recharge
    // http://111.230.29.99:8080/multiple/api/members/recharge
    // https://kulele.club/sass/api/multiple/api/members/recharge
    const url = `https://kulele.club/sass/api/multiple/api/members/recharge/export/${formatSuffix}?date=${this.rechargeExportDate}`;
    const filename = `充值明细_${this.rechargeExportDate}.${formatSuffix}`;

    this.triggerDownload(url, filename);
    this.closeRechargeExportModal();
  }

  /** ✅ 与 accounting 一致：手动加 token，blob 下载 */
  private triggerDownload(url: string, filename: string): void {
    const token = localStorage.getItem('token');

    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
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
