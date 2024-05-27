import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RaceMultipleSelectorComponent
} from '../../../../components/race-multiple-selector/race-multiple-selector.component';
import { IWarhammerClassifier } from '@w-monorepo/warhammer';

@Component({
  selector: 'app-easy-to-fight',
  standalone: true,
  imports: [CommonModule, RaceMultipleSelectorComponent],
  templateUrl: './easy-to-fight.component.html',
  styleUrl: './easy-to-fight.component.scss'
})
export class EasyToFightComponent {
  protected selectedNames: string[] = [];

  protected onSelectionChange(selectedItems: IWarhammerClassifier[]): void {
    this.selectedNames = selectedItems.map(item => item.nameCN);
  }
}
