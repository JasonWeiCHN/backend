import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EItemCardMode, ItemCardComponent } from '../item-card';
import { IItemCard } from '../item-card';
import { EList } from './shared/enums/list.enum';

@Component({
  selector: 'w-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  /**
   * @description
   * Different mode will display different layout
   * @type {EList}
   * @default EList.DEFAULT
   */
  @Input()
  public mode: EList = EList.DEFAULT;

  @Input()
  public data: IItemCard[] = [];

  @Output('listItemClick')
  public readonly itemClick: EventEmitter<IItemCard> = new EventEmitter<IItemCard>();

  protected readonly eList = EList;
  protected readonly cardMode: EItemCardMode = EItemCardMode.LIST;

  public onItemClick(item: IItemCard): void {
    this.itemClick.emit(item);
  }
}
