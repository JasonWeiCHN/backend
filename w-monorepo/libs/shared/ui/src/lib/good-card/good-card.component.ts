import { Component, Input } from '@angular/core';
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
}
