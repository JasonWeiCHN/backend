import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IItemCard } from '@w-monorepo/ui';

@Component({
  selector: 'app-cartridge-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cartridge-card.component.html',
  styleUrl: './cartridge-card.component.scss',
})
export class CartridgeCardComponent {
  @Input()
  public data: IItemCard | undefined;

  @Output()
  public readonly itemClick: EventEmitter<IItemCard> =
    new EventEmitter<IItemCard>();

  public onItemClick(item: IItemCard): void {
    this.itemClick.emit(item);
  }
}
