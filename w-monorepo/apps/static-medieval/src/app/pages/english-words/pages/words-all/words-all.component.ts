import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsCityManagementComponent } from '../words-city-management/words-city-management.component';
import { WordsBattleObjectivesComponent } from '../words-battle-objectives/words-battle-objectives.component';
import { WordsMilitaryUnitsComponent } from '../words-military-units/words-military-units.component';

@Component({
  selector: 'app-words-all',
  standalone: true,
  imports: [
    CommonModule,
    WordsCityManagementComponent,
    WordsBattleObjectivesComponent,
    WordsMilitaryUnitsComponent,
  ],
  templateUrl: './words-all.component.html',
  styleUrl: './words-all.component.scss',
})
export class WordsAllComponent {}
