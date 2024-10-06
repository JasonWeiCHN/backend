import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMode } from '@w-monorepo/enums';
import { AnalysisHttpService } from '@w-monorepo/analysis';
import { AlmohadsEarlyComponent } from '../articles/pages/almohads-early/almohads-early.component';
import { AragonEarlyComponent } from '../articles/pages/aragon-early/aragon-early.component';
import { BackgroundEarlyComponent } from '../articles/pages/background-early/background-early.component';
import { ByzantineEarlyComponent } from '../articles/pages/byzantine-early/byzantine-early.component';
import { DanesEarlyComponent } from '../articles/pages/danes-early/danes-early.component';
import { EgyptEarlyComponent } from '../articles/pages/egypt-early/egypt-early.component';
import { EnglishEarlyComponent } from '../articles/pages/english-early/english-early.component';
import { FrenchEarlyComponent } from '../articles/pages/french-early/french-early.component';
import { HolyRomanEarlyComponent } from '../articles/pages/holy-roman-early/holy-roman-early.component';
import { HungariansEarlyComponent } from '../articles/pages/hungarians-early/hungarians-early.component';
import { ItalyEarlyComponent } from '../articles/pages/italy-early/italy-early.component';
import { PolishEarlyComponent } from '../articles/pages/polish-early/polish-early.component';
import { SicilyEarlyComponent } from '../articles/pages/sicily-early/sicily-early.component';
import { SpanishEarlyComponent } from '../articles/pages/spanish-early/spanish-early.component';
import { WordsCityManagementComponent } from './pages/words-city-management/words-city-management.component';
import { WordsAllComponent } from './pages/words-all/words-all.component';
import { WordsBattleObjectivesComponent } from './pages/words-battle-objectives/words-battle-objectives.component';
import { WordsMilitaryUnitsComponent } from './pages/words-military-units/words-military-units.component';

// TODO COMMON INTERFACE ILinkItem
interface ILinkItem {
  key: string;
  label: string;
}

@Component({
  selector: 'app-english-words',
  standalone: true,
  imports: [
    CommonModule,
    AlmohadsEarlyComponent,
    AragonEarlyComponent,
    BackgroundEarlyComponent,
    ByzantineEarlyComponent,
    DanesEarlyComponent,
    EgyptEarlyComponent,
    EnglishEarlyComponent,
    FrenchEarlyComponent,
    HolyRomanEarlyComponent,
    HungariansEarlyComponent,
    ItalyEarlyComponent,
    PolishEarlyComponent,
    SicilyEarlyComponent,
    SpanishEarlyComponent,
    WordsCityManagementComponent,
    WordsAllComponent,
    WordsBattleObjectivesComponent,
    WordsMilitaryUnitsComponent,
  ],
  templateUrl: './english-words.component.html',
  styleUrl: './english-words.component.scss',
  providers: [AnalysisHttpService],
})
export class EnglishWordsComponent {
  protected readonly eMode = EMode;
  protected mode: EMode = EMode.HOME;
  protected staticLinkItem: ILinkItem | undefined = undefined;
  protected readonly englishWordLinks: ILinkItem[] = [
    {
      key: 'all',
      label: '总表',
    },
    {
      key: 'city_management',
      label: '城市管理',
    },
    {
      key: 'battle_objectives',
      label: '战斗目标',
    },
    {
      key: 'military_units',
      label: '军事单位',
    },
  ];

  // background_early

  public constructor(
    private readonly analysisHttpService: AnalysisHttpService
  ) {}

  protected onStaticLinkItemClick(item: ILinkItem): void {
    this.mode = EMode.DETAIL;
    this.staticLinkItem = item;
    this.analysisHttpService
      .submitString('查看 Medieval 关联单词: ' + item.label)
      .subscribe(
        (response: any) => {
          // console.log('String submitted successfully!', response);
        },
        (error: any) => {
          console.error('Error submitting string:', error);
        }
      );
  }

  protected goBack(): void {
    this.mode = EMode.HOME;
  }
}
