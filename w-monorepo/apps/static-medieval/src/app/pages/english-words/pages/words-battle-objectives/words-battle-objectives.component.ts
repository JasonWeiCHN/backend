import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCardsComponent } from '../../components/word-cards/word-cards.component';
import { IWord } from '@w-monorepo/interfaces';

@Component({
  selector: 'app-words-battle-objectives',
  standalone: true,
  imports: [CommonModule, WordCardsComponent],
  templateUrl: './words-battle-objectives.component.html',
  styleUrl: './words-battle-objectives.component.scss',
})
export class WordsBattleObjectivesComponent {
  protected words: IWord[] = [
    {
      id: 'battle',
      en: 'Battle',
      cn: '战斗',
      des: '两个或多个群体之间的武装冲突',
    },
    {
      id: 'objectives',
      en: 'Objectives',
      cn: '目标',
      des: '在任务或战斗中需要达成的具体结果',
    },
    {
      id: 'campaign',
      en: 'Campaign',
      cn: '战役',
      des: '为了达到某一军事目标进行的一系列战斗或行动',
    },
    {
      id: 'rebels',
      en: 'Rebels',
      cn: '叛军',
      des: '反对现有政权或统治的武装人员或群体',
    },
    {
      id: 'primary',
      en: 'Primary',
      cn: '主要的',
      des: '最重要的或首要的部分',
    },
    {
      id: 'timelimit',
      en: 'Time Limit',
      cn: '时间限制',
      des: '完成某一任务的最后期限',
    },
    {
      id: 'expire',
      en: 'Expire',
      cn: '过期',
      des: '某物达到最后期限或失效',
    },
    {
      id: 'defenders',
      en: 'Defenders',
      cn: '防守者',
      des: '在冲突或战斗中保护某一地点或目标的人',
    },
    {
      id: 'defeat',
      en: 'Defeat',
      cn: '击败',
      des: '在战斗或比赛中击败对手',
    },
    {
      id: 'capture',
      en: 'Capture',
      cn: '占领',
      des: '在战斗中控制或夺取某一地点',
    },
    {
      id: 'rout',
      en: 'Rout',
      cn: '溃败',
      des: '在战斗或竞赛中被彻底击败或溃散',
    },
  ];
}
