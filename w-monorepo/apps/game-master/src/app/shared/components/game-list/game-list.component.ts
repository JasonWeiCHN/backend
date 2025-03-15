import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, GameCardComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
})
export class GameListComponent {
  @Input() games: any[] = [];
  @Input() activeIndex = 0;
}
