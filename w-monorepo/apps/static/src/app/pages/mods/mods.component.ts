import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EList, IItemCard, ListComponent } from '@w-monorepo/ui';
import { ARTICLES_MAP, EArticleTags } from '@w-monorepo/warhammer';

@Component({
  selector: 'st-mods',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './mods.component.html',
  styleUrl: './mods.component.scss'
})
export class ModsComponent {
  protected readonly eList = EList;

  public newMod: IItemCard[] = ARTICLES_MAP[EArticleTags.NEW_MOD];

  public modCollection: IItemCard[] = ARTICLES_MAP[EArticleTags.MOD_COLLECTION];

  public onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }
}
