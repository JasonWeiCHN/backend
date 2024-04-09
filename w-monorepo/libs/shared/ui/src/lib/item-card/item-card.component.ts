import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IItemCard } from './shared/interfaces/item-card.interface';
import { EItemCardMode } from './shared/enums/item-card.enum';

@Component({
  selector: 'w-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent {
  /**
   * @description
   * Different mode will display different layout
   * @type {EItemCardMode}
   * @default EItemCardMode.DEFAULT
   */
  @Input()
  public mode: EItemCardMode = EItemCardMode.DEFAULT;

  @Input()
  public data: IItemCard | undefined;

  public eItemCardMode = EItemCardMode;
}
