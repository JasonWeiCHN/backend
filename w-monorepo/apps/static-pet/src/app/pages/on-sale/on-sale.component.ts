import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ENavigationMode,
  ETagSelector,
  GalleryComponent,
  IItemCard,
  INavigationItem,
  ITag,
  NavigationComponent,
  TagSelectorComponent,
} from '@w-monorepo/ui';
import { PetGalleryComponent } from '../../components/pet-gallery/pet-gallery.component';
import {
  ON_SALE_MAP,
  PET_CLASSIFICATION,
} from '../../shared/constants/data.constants';
import { EPetType } from '../../shared/enums/pet.enum';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from '../../shared/constants/app.config.constans';
import { Router } from '@angular/router';

@Component({
  selector: 'pet-on-sale',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    GalleryComponent,
    PetGalleryComponent,
    NavigationComponent,
    TagSelectorComponent,
  ],
  templateUrl: './on-sale.component.html',
  styleUrl: './on-sale.component.scss',
})
export class OnSaleComponent {
  protected readonly eNavigationMode = ENavigationMode;
  protected readonly eTagSelector = ETagSelector;
  protected readonly navigationItems: INavigationItem[] =
    APP_CONFIG.navigationItems;
  protected data: IItemCard[] = [...ON_SALE_MAP[EPetType.DOG]];
  protected tags: ITag[] = PET_CLASSIFICATION[EPetType.DOG];
  protected activeNavigationItemId: string = EPetType.DOG;
  protected activeTag: ITag = PET_CLASSIFICATION[EPetType.DOG][0];

  public constructor(private _router: Router) {}

  protected onNavigationItemClick(item: INavigationItem) {
    this.data = ON_SALE_MAP[item.id];
    this.activeNavigationItemId = item.id;
  }

  protected onItemClick(item: IItemCard): void {
    console.log(item);
  }

  protected onMoreClick(): void {
    this._router.navigate([`/wiki/${this.activeTag.id}`]);
  }

  protected onTagSelect(tagIndex: number): void {
    this.activeTag = this.tags[tagIndex];
    const { id } = this.tags[tagIndex];
    const data = ON_SALE_MAP[this.activeNavigationItemId];

    if (id === 'all') {
      this.data = data;
    } else {
      this.data = data.filter((item) => item.typeId === id);
    }
  }
}
