import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card.component';
import { IItemCard } from '../item-card/shared/interfaces/item-card.interface';
import { EItemCardMode } from '../item-card/shared/enums/item-card.enum';

@Component({
  selector: 'w-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input()
  public data: IItemCard[] = [
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/warhammer/One_Eye1.jpg',
      sourceUrl: 'https://www.bilibili.com/video/BV1bF4m1F7po/?spm_id_from=333.999.0.0',
      title: '[全面战争·战锤3·半小时玩一个领主] 卡扎克·独眼',
      views: 334,
      description: '[全面战争·战锤3·半小时玩一个领主] ',
      publisher: '古老游戏玩家',
      date: '2024-03-17 09:30:00',
      detail: '蜥蜴人派系 库·迦 最后守卫者'
    }, {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/warhammer/One_Eye2.png',
      sourceUrl: 'https://www.bilibili.com/video/BV1bF4m1F7po/?spm_id_from=333.999.0.0',
      title: '【lucpass】从零开始的战锤全面战争3 野兽人 兽王卡扎克独眼 第一期 邓肯瓦尔德森林之主',
      views: 110000,
      description: '[全面战争·战锤3·半小时玩一个领主] ',
      publisher: 'LucPass',
      date: '2023-12-11 12:21:12',
      detail: '蜥蜴人派系 库·迦 最后守卫者'
    }
  ];

  protected readonly mode: EItemCardMode = EItemCardMode.LIST;
}
