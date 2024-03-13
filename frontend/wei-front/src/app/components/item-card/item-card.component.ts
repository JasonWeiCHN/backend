import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wei-front-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input('itemCardDetail')
  public detail: string | undefined;

  @Input('itemCardImageUrl')
  public imageUrl: string | undefined;

  @Input('itemCardTitle')
  public title: string | undefined;

  @Input('itemCardDescription')
  public description: string | undefined;

  @Input('itemCardDate')
  public date: string | undefined;
}
