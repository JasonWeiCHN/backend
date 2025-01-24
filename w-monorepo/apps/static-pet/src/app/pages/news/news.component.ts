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
import { APP_CONFIG } from '../../shared/constants/app.config.constans';

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
  protected readonly navigationItems: INavigationItem[] =
    APP_CONFIG.navigationItems;
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
