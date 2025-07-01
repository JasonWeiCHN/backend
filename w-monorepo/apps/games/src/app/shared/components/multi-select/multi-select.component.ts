import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf } from '@angular/common';

export interface IMultiSelectOption {
  id: string;
  name: string;
}

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent {
  @Input() options: IMultiSelectOption[] = [];
  @Input() selectedItems: IMultiSelectOption[] = [];
  @Output() selectedItemsChange = new EventEmitter<IMultiSelectOption[]>();

  isSelected(option: IMultiSelectOption): boolean {
    return this.selectedItems.some((item) => item.id === option.id);
  }

  toggle(option: IMultiSelectOption): void {
    const exists = this.isSelected(option);
    if (exists) {
      this.selectedItems = this.selectedItems.filter(
        (item) => item.id !== option.id
      );
    } else {
      this.selectedItems = [...this.selectedItems, option];
    }
    this.selectedItemsChange.emit(this.selectedItems);
  }
}
