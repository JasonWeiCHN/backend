import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EList, IItemCard, ListComponent } from '@w-monorepo/ui';
import { ARTICLES_MAP } from '../../shared/constants/data.constants';
import { HISTORY_PRICE, LOWEST_PRICE } from '../../shared/constants/history-price.constants';
import { PriceHistoryComponent } from '@w-monorepo/charts';

@Component({
  selector: 'app-discount',
  standalone: true,
  imports: [CommonModule, ListComponent, PriceHistoryComponent],
  templateUrl: './discount.component.html',
  styleUrl: './discount.component.scss'
})
export class DiscountComponent {
  protected readonly eList = EList;
  protected readonly historyPrice = HISTORY_PRICE;
  protected readonly lowestPrice = LOWEST_PRICE;

  public data: IItemCard[] = ARTICLES_MAP['discount'];

  public onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }
}
