import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ENavigationMode,
  GoodCardComponent,
  IItemCard,
  INavigationItem,
  NavigationComponent,
} from '@w-monorepo/ui';
import { EPetTag } from '../../shared/enums/pet.enum';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from '../../shared/constants/app.config.constans';
import { GOODS_MAP } from '../../shared/constants/pets.constants';

@Component({
  selector: 'app-goods',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    GoodCardComponent,
    NavigationComponent,
  ],
  templateUrl: './goods.component.html',
  styleUrl: './goods.component.scss',
})
export class GoodsComponent {
  protected readonly navigationItems: INavigationItem[] =
    APP_CONFIG.subNavigationItems || [];
  protected data: IItemCard[] = [];
  protected readonly eNavigationMode = ENavigationMode;

  public constructor() {
    this.data = GOODS_MAP[EPetTag.DOG];
  }

  protected onNavigationItemClick(item: INavigationItem) {
    this.data = GOODS_MAP[item.id];
  }

  protected onItemClick(item: IItemCard): void {
    const url = item.sourceUrl || item.referer;

    if (url) {
      window.open(url, '_blank');
    }
  }
}
