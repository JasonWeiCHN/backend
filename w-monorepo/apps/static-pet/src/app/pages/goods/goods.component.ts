import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ENavigationMode,
  GoodCardComponent,
  IItemCard,
  INavigationItem,
  NavigationComponent,
} from '@w-monorepo/ui';
import { EPetType } from '../../shared/enums/pet.enum';
import { GOODS_MAP } from '../../shared/constants/data.constants';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from '../../shared/constants/app.config.constans';

@Component({
  selector: 'pet-goods',
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
    APP_CONFIG.navigationItems;
  protected data: IItemCard[] = [];
  protected readonly eNavigationMode = ENavigationMode;

  public constructor() {
    this.data = GOODS_MAP[EPetType.DOG];
  }

  protected onNavigationItemClick(item: INavigationItem) {
    this.data = GOODS_MAP[item.id];
  }
}
