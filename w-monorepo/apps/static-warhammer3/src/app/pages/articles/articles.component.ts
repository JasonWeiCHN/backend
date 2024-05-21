import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EList, IItemCard, ListComponent } from '@w-monorepo/ui';
import { ARTICLES_MAP } from '../../shared/constants/data.constants';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  protected readonly eList = EList;

  public data: IItemCard[] = ARTICLES_MAP['articles'];

  public onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }
}
