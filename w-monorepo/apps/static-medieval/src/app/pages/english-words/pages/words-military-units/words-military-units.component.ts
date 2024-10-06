import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWord } from '@w-monorepo/interfaces';
import { WordCardsComponent } from '../../components/word-cards/word-cards.component';

@Component({
  selector: 'app-words-military-units',
  standalone: true,
  imports: [CommonModule, WordCardsComponent],
  templateUrl: './words-military-units.component.html',
  styleUrl: './words-military-units.component.scss',
})
export class WordsMilitaryUnitsComponent {
  protected words: IWord[] = [
    {
      id: 'royalKnight',
      en: 'Royal Knight',
      cn: '皇家骑士',
      des: '效忠于国王的高级骑士',
    },
    {
      id: 'archer',
      en: 'Archer',
      cn: '弓箭手',
      des: '使用弓箭进行远程攻击的士兵',
    },
    {
      id: 'urbanMilitia',
      en: 'Urban Militia',
      cn: '城市民兵',
      des: '由城市居民组成的地方防卫力量',
    },
  ];
}
