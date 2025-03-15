import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-nav.component.html',
  styleUrl: './category-nav.component.scss',
})
export class CategoryNavComponent {
  @Input()
  categories: string[] = [];
  @Input()
  selectedIndex = 0;
  @Output() categoryChanged = new EventEmitter<number>();

  setCategory(index: number) {
    this.categoryChanged.emit(index);
  }
}
