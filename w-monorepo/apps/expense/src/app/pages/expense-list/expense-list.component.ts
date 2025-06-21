import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IExpense } from '../../shared/interfaces/expense.interface';
import { ExpenseHttpService } from '../../shared/services/expense.http.service';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss',
  providers: [ExpenseHttpService],
})
export class ExpenseListComponent {
  private expenseService = inject(ExpenseHttpService);
  records: IExpense[] = [];
  pagedRecords: IExpense[] = [];

  pageSize = 50;
  currentPage = 1;
  totalPages = 1;

  searchKeyword = '';

  constructor() {
    this.loadRecords();
  }

  loadRecords(): void {
    this.expenseService.getAllExpenses().subscribe((data) => {
      this.records = data.sort((a, b) => b.id - a.id); // 最新记录在前
      this.totalPages = Math.ceil(this.records.length / this.pageSize);
      this.updatePagedRecords();
    });
  }

  search(): void {
    const keyword = this.searchKeyword.trim().toLowerCase();
    if (!keyword) {
      this.loadRecords();
      return;
    }

    this.expenseService.getAllExpenses().subscribe((data) => {
      this.records = data.filter((r) =>
        [r.category, r.description].some((field) =>
          field?.toLowerCase().includes(keyword)
        )
      );
      this.currentPage = 1;
      this.totalPages = Math.ceil(this.records.length / this.pageSize);
      this.updatePagedRecords();
    });
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
    if (confirm('确定要删除这条支出记录吗？')) {
      this.expenseService.deleteExpense(id).subscribe(() => {
        this.records = this.records.filter((r) => r.id !== id);
        this.totalPages = Math.ceil(this.records.length / this.pageSize);
        this.updatePagedRecords();
      });
    }
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate()
    )} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }
}
