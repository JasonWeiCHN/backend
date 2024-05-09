import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EList, IItemCard, ItemCardComponent, ListComponent } from '@w-monorepo/ui';
import { ARTICLES_MAP } from '@w-monorepo/warhammer';

@Component({
  selector: 'st-war-school',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, ListComponent],
  templateUrl: './war-school.component.html',
  styleUrl: './war-school.component.scss'
})
export class WarSchoolComponent {
  protected readonly eList = EList;
  protected practicalTeaching: IItemCard[] = ARTICLES_MAP['practicalTeaching'];
  protected basicKnowledge: IItemCard[] = ARTICLES_MAP['basicKnowledge'];
  protected warSchoolVideo: IItemCard[] = ARTICLES_MAP['warSchoolVideo'];

  protected onCardClick(item: IItemCard) {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }

  protected onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }
}
