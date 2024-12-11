import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ArticleCardComponent,
  ENavigationMode,
  GoodCardComponent,
  IItemCard,
  INavigationItem,
  NavigationComponent,
} from '@w-monorepo/ui';
import { EPetType } from '../../shared/enums/pet.enum';
import { NEWS_MAP } from '../../shared/constants/data.constants';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'pet-news',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    NavigationComponent,
    GoodCardComponent,
    ArticleCardComponent,
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  protected readonly navigationItems: INavigationItem[] = [
    {
      id: EPetType.DOG,
      label: '狗',
      path: '',
    },
    {
      id: EPetType.CAT,
      label: '猫',
      path: '',
    },
    {
      id: EPetType.FISH,
      label: '鱼',
      path: '',
    },
    {
      id: EPetType.BIRD,
      label: '鸟',
      path: '',
    },
    {
      id: EPetType.MOUSE,
      label: '豚鼠',
      path: '',
    },
  ];
  protected data: IItemCard[] = [];
  protected readonly eNavigationMode = ENavigationMode;

  public constructor() {
    this.data = NEWS_MAP[EPetType.DOG];
  }

  protected onNavigationItemClick(item: INavigationItem): void {
    this.data = NEWS_MAP[item.id];
  }

  protected onItemClick(item: IItemCard): void {
    const url = item.sourceUrl || item.referer;

    if (url) {
      window.open(url, '_blank');
    }
  }
}
