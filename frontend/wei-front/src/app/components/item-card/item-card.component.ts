import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IItemCard } from './shared/interfaces/item-card.interface';

@Component({
  selector: 'wei-front-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input()
  public data: IItemCard | undefined;
}
