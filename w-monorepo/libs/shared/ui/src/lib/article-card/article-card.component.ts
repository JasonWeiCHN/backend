import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IItemCard } from '../item-card';

@Component({
  selector: 'w-article-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
  @Input()
  public data: IItemCard | undefined;

  @Output('itemClick')
  public readonly itemClick: EventEmitter<IItemCard> =
    new EventEmitter<IItemCard>();

  public onItemClick(item: IItemCard): void {
    this.itemClick.emit(item);
  }
}
