import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ENavigationMode,
  GoodCardComponent,
  IItemCard,
  INavigationItem,
  NavigationComponent,
} from '@w-monorepo/ui';
import { HttpClientModule } from '@angular/common/http';
import { EPetType } from '../../shared/enums/pet.enum';
import { FOOD_MAP } from '../../shared/constants/data.constants';
import { APP_CONFIG } from '../../shared/constants/app.config.constans';

@Component({
  selector: 'pet-food',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    GoodCardComponent,
    NavigationComponent,
  ],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent {
  protected eNavigationMode = ENavigationMode;
  protected readonly navigationItems: INavigationItem[] =
    APP_CONFIG.navigationItems;
  protected data: IItemCard[] = [];

  public constructor() {
    this.data = FOOD_MAP[EPetType.DOG];
  }

  protected onNavigationItemClick(item: INavigationItem) {
    this.data = FOOD_MAP[item.id];
  }

  protected onItemClick(item: IItemCard): void {
    const url = item.sourceUrl || item.referer;

    if (url) {
      window.open(url, '_blank');
    }
  }
}
