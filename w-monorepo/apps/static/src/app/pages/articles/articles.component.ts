import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EList, IItemCard, ListComponent } from '@w-monorepo/ui';
import { ARTICLES_MAP } from '@w-monorepo/warhammer';

@Component({
  selector: 'st-articles',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  protected readonly eList = EList;

  public data: IItemCard[] = ARTICLES_MAP['articles'];

  public onListItemClick(item: IItemCard): void {
    console.log(item);
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }
}
