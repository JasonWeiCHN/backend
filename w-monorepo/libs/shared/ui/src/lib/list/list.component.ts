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
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input()
  public data: IItemCard = {
    id: '',
    typeId: '1',
    imageUrl: 'https://i0.hdslb.com/bfs/archive/2b0950e2c1c749c338f65660bfea731aab407c82.jpg',
    sourceUrl: 'https://www.bilibili.com/video/BV1bF4m1F7po/?spm_id_from=333.999.0.0',
    title: '库·迦',
    description: '[全面战争·战锤3·半小时玩一个领主] ',
    date: '2024年03月23日 09:30:00',
    detail: '蜥蜴人派系 库·迦 最后守卫者'
  };

  public mode: EItemCardMode = EItemCardMode.LIST;
}
