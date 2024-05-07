import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'w-pagination',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input()
  public currentPage: number = 0;

  @Input()
  public totalPages: number = 0;

  @Output()
  public pageChange = new EventEmitter<number>();

  // 用户输入的目标页码
  protected targetPage = 1;

  protected prevPage(): void {
    if (this.currentPage > 0) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  protected nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  // 跳转至用户输入的目标页码
  protected goToPage(): void {
    if (this.targetPage >= 1 && this.targetPage <= this.totalPages) {
      this.pageChange.emit(this.targetPage - 1);
    }
  }
}
