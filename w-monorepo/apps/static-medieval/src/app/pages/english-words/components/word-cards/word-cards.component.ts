import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWord } from '@w-monorepo/interfaces';

@Component({
  selector: 'app-word-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-cards.component.html',
  styleUrl: './word-cards.component.scss',
})
export class WordCardsComponent {
  @Input()
  public words: IWord[] = [];
}
