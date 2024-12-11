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
