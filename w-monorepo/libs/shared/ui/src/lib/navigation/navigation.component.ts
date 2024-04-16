import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INavigationItem } from './shared/interfaces/navigation.interface';
import { has } from 'lodash-es';

@Component({
  selector: 'w-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnChanges {
  /**
   * @description
   * Navigation items
   * @type {INavigationItem[]}
   * @default []
   */
  @Input()
  public items: INavigationItem[] = [];

  @Output('navigationItemClick')
  public readonly itemClick: EventEmitter<INavigationItem> = new EventEmitter<INavigationItem>();

  public activeItemId  = '';

  public ngOnChanges(changes: SimpleChanges): void {
    if (has(changes, 'items')) {
      if(this.items.length) {
        // 默认激活第一项
        this.activeItemId = this.items[0].id;
      }
    }
  }

  protected onItemClick(item: INavigationItem) {
    this.activeItemId = item.id;
    this.itemClick.emit(item);
  }
}
