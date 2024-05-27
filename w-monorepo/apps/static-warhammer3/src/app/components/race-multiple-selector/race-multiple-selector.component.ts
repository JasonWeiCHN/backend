import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWarhammerClassifier, WARHAMMER_CLASSIFIERS } from '@w-monorepo/warhammer';

@Component({
  selector: 'app-race-multiple-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './race-multiple-selector.component.html',
  styleUrl: './race-multiple-selector.component.scss'
})
export class RaceMultipleSelectorComponent {
  @Input() maxSelection = 3; // Default maximum selection is 3
  @Output() selectionChange = new EventEmitter<IWarhammerClassifier[]>();

  public data: IWarhammerClassifier[] = WARHAMMER_CLASSIFIERS;
  public selectedIndices: number[] = [];

  toggleSelection(index: number): void {
    const selectedIdx = this.selectedIndices.indexOf(index);

    if (selectedIdx > -1) {
      // Remove selection
      this.selectedIndices.splice(selectedIdx, 1);
    } else if (this.selectedIndices.length < this.maxSelection) {
      // Add selection
      this.selectedIndices.push(index);
    }

    this.emitSelectionChange();
  }

  emitSelectionChange(): void {
    const selectedItems = this.selectedIndices.map(idx => this.data[idx]);
    this.selectionChange.emit(selectedItems);
  }
}
