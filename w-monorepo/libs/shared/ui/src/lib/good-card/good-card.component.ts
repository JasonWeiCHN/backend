import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IItemCard } from '../item-card';

@Component({
  selector: 'w-good-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './good-card.component.html',
  styleUrl: './good-card.component.scss',
})
export class GoodCardComponent {
  @Input()
  public data: IItemCard | undefined;

  @Output('itemClick')
  public readonly itemClick: EventEmitter<IItemCard> =
    new EventEmitter<IItemCard>();

  public onItemClick(item: IItemCard): void {
    this.itemClick.emit(item);
  }
}
