import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RaceMultipleSelectorComponent
} from '../../../../components/race-multiple-selector/race-multiple-selector.component';
import { IWarhammerClassifier } from '@w-monorepo/warhammer';

@Component({
  selector: 'app-hard-to-fight',
  standalone: true,
  imports: [CommonModule, RaceMultipleSelectorComponent],
  templateUrl: './hard-to-fight.component.html',
  styleUrl: './hard-to-fight.component.scss'
})
export class HardToFightComponent {
  protected selectedNames: string[] = [];

  protected onSelectionChange(selectedItems: IWarhammerClassifier[]): void {
    this.selectedNames = selectedItems.map(item => item.nameCN);
  }
}
