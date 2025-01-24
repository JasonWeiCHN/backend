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
import { EPetTag } from '../../shared/enums/pet.enum';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from '../../shared/constants/app.config.constans';
import { NEWS_MAP } from '../../shared/constants/pets.constants';

@Component({
  selector: 'app-news',
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
    APP_CONFIG.subNavigationItems || [];
  protected data: IItemCard[] = [];
  protected readonly eNavigationMode = ENavigationMode;

  public constructor() {
    this.data = NEWS_MAP[EPetTag.DOG];
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
