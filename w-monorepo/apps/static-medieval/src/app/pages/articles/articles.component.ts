import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMode } from '@w-monorepo/enums';
import { AnalysisHttpService } from '@w-monorepo/analysis';
import { ITag, TagSelectorComponent } from '@w-monorepo/ui';
import { AlmohadsEarlyComponent } from './pages/almohads-early/almohads-early.component';
import { AragonEarlyComponent } from './pages/aragon-early/aragon-early.component';
import { ByzantineEarlyComponent } from './pages/byzantine-early/byzantine-early.component';
import { DanesEarlyComponent } from './pages/danes-early/danes-early.component';
import { EgyptEarlyComponent } from './pages/egypt-early/egypt-early.component';
import { EnglishEarlyComponent } from './pages/english-early/english-early.component';
import { FrenchEarlyComponent } from './pages/french-early/french-early.component';
import { HolyRomanEarlyComponent } from './pages/holy-roman-early/holy-roman-early.component';
import { HungariansEarlyComponent } from './pages/hungarians-early/hungarians-early.component';
import { ItalyEarlyComponent } from './pages/italy-early/italy-early.component';
import { PolishEarlyComponent } from './pages/polish-early/polish-early.component';
import { SicilyEarlyComponent } from './pages/sicily-early/sicily-early.component';
import { SpanishEarlyComponent } from './pages/spanish-early/spanish-early.component';
import { TurkishEarlyComponent } from './pages/turkish-early/turkish-early.component';
import { BackgroundEarlyComponent } from './pages/background-early/background-early.component';
import { MilitaryUnitsComponent } from './pages/military-units/military-units.component';

// TODO COMMON INTERFACE ILinkItem
interface ILinkItem {
  key: string;
  label: string;
}

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    CommonModule,
    AlmohadsEarlyComponent,
    TagSelectorComponent,
    AragonEarlyComponent,
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
    TurkishEarlyComponent,
    BackgroundEarlyComponent,
    MilitaryUnitsComponent,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [AnalysisHttpService],
})
export class ArticlesComponent {
  protected readonly eMode = EMode;
  protected mode: EMode = EMode.HOME;
  protected staticLinkItem: ILinkItem | undefined = undefined;
  protected tags: ITag[] = [
    { id: 'cn', name: '中文' },
    { id: 'en', name: '英文' },
    { id: 'cn-en', name: '中英对照' },
  ];
  protected localLanguage = 'cn';
  protected readonly militaryUnitLinks: ILinkItem[] = [
    {
      key: 'military_units',
      label: '战斗单位',
    },
  ];
  protected readonly backgroundLinks: ILinkItem[] = [
    {
      key: 'background_early',
      label: '[早期] 背景知识',
    },
    {
      key: 'almohads_early',
      label: '[早期] Almohads - 阿尔莫哈德',
    },
    {
      key: 'aragon_early',
      label: '[早期] Aragon - 阿拉贡',
    },
    {
      key: 'byzantine_early',
      label: '[早期] Byzantine - 拜占庭',
    },
    {
      key: 'danes_early',
      label: '[早期] Danes - 丹麦',
    },
    {
      key: 'egypt_early',
      label: '[早期] Egypt - 埃及',
    },
    {
      key: 'english_early',
      label: '[早期] English - 英国',
    },
    {
      key: 'french_early',
      label: '[早期] French - 法国',
    },
    {
      key: 'holy_roman_early',
      label: '[早期] HolyRoman - 神圣罗马帝国',
    },
    {
      key: 'hungarians_early',
      label: '[早期] Hungarians - 匈牙利',
    },
    {
      key: 'italy_early',
      label: '[早期] Italy - 意大利',
    },
    {
      key: 'polish_early',
      label: '[早期] Polish - 波兰',
    },
    {
      key: 'sicily_early',
      label: '[早期] Sicily - 西西里岛',
    },
    {
      key: 'spanish_early',
      label: '[早期] Spanish - 西班牙',
    },
    {
      key: 'turkish_early',
      label: '[早期] Turkish - 土耳其',
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
      .submitString('查看 Medieval 资料: ' + item.label)
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

  protected onTagSeclet(tagIndex: number): void {
    this.localLanguage = this.tags[tagIndex].id;
  }
}
