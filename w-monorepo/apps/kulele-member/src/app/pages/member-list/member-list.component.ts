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
  pageSize = 10;
  totalPages = 1;

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
}
