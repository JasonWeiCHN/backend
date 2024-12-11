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
    this.data = GOODS_MAP[EPetType.DOG];
  }

  protected onNavigationItemClick(item: INavigationItem) {
    this.data = GOODS_MAP[item.id];
  }
}
