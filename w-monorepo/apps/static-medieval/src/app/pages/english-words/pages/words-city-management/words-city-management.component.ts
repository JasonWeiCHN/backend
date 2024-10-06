import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWord } from '@w-monorepo/interfaces';
import { WordCardsComponent } from '../../components/word-cards/word-cards.component';

@Component({
  selector: 'app-words-city-management',
  standalone: true,
  imports: [CommonModule, WordCardsComponent],
  templateUrl: './words-city-management.component.html',
  styleUrl: './words-city-management.component.scss',
})
export class WordsCityManagementComponent {
  protected words: IWord[] = [
    {
      id: 'governor',
      en: 'Governor',
      cn: '统治者',
      des: '一个地区或国家的领导者',
    },
    {
      id: 'income',
      en: 'Income',
      cn: '收入',
      des: '个人或组织获得的金钱',
    },
    {
      id: 'resources',
      en: 'Resources',
      cn: '资源',
      des: '可用于生产或交易的物品',
    },
    {
      id: 'tradable_goods',
      en: 'Tradable Goods',
      cn: '可交易商品',
      des: '可以在市场上交换或出售的商品',
    },
    {
      id: 'taxation',
      en: 'Taxation',
      cn: '税收',
      des: '政府征收的费用或税款',
    },
    {
      id: 'loyalty',
      en: 'Loyalty',
      cn: '忠诚',
      des: '对某人或某事的坚定支持或忠诚',
    },
    {
      id: 'zeal',
      en: 'Zeal',
      cn: '热情',
      des: '对某种事业的强烈兴趣或热情',
    },
    {
      id: 'normal',
      en: 'Normal',
      cn: '正常',
      des: '标准的或常规的状态',
    },
  ];
}
