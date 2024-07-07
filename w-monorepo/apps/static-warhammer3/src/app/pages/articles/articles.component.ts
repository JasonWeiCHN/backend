import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EList,
  IItemCard,
  ITag,
  ListComponent,
  TagSelectorComponent,
} from '@w-monorepo/ui';
import { ARTICLES_MAP } from '../../shared/constants/data.constants';
import { EMode } from '@w-monorepo/enums';
import { Nagash1Component } from './pages/nagash/nagash1.component';
import { AnalysisHttpService } from '@w-monorepo/analysis';
import { Nagash2Component } from './pages/nagash2/nagash2.component';

interface IStaticArticleLink {
  key: string;
  label: string;
}

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    CommonModule,
    ListComponent,
    Nagash1Component,
    TagSelectorComponent,
    Nagash2Component,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [AnalysisHttpService],
})
export class ArticlesComponent {
  protected readonly eMode = EMode;
  protected mode = EMode.HOME;
  protected readonly eList = EList;
  protected readonly staticArticleLinks: IStaticArticleLink[] = [
    {
      key: 'nagash_1',
      label: '纳迦什-序章',
    },
    {
      key: 'nagash_2',
      label: '纳迦什-篡位者',
    },
  ];
  protected staticArticleLink: IStaticArticleLink | undefined = undefined;
  protected tags: ITag[] = [
    { id: 'cn', name: '中文' },
    { id: 'en', name: '英文' },
    { id: 'cn-en', name: '中英对照' },
  ];
  protected localLanguage = 'cn';

  public data: IItemCard[] = ARTICLES_MAP['articles'];

  public constructor(
    private readonly analysisHttpService: AnalysisHttpService
  ) {}

  public onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }

  protected onStaticArticleLinkClick(item: IStaticArticleLink): void {
    this.mode = EMode.DETAIL;
    this.staticArticleLink = item;
    this.analysisHttpService
      .submitString('查看人物志: ' + item.label)
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
