import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ENavigationMode,
  INavigationItem,
  NavigationComponent,
} from '@w-monorepo/ui';
import { HttpClientModule } from '@angular/common/http';
import { PET_NAVIGATION_ITEMS } from '../../shared/constants/data.constants';
import {
  IPetDetails,
  IPetMap,
  IPetProperties,
} from '../../shared/interfaces/pet.interface';
import { ActivatedRoute } from '@angular/router';
import { CATS_MAP, DOGS_MAP } from '../../shared/constants/pets.constants';
import { EPetWiKiNavigation } from '../../shared/enums/pet.enum';

@Component({
  selector: 'pet-wiki',
  standalone: true,
  imports: [HttpClientModule, CommonModule, NavigationComponent],
  templateUrl: './wiki.component.html',
  styleUrl: './wiki.component.scss',
})
export class WikiComponent implements OnInit {
  protected readonly eNavigationMode = ENavigationMode;
  protected readonly navigationItems: INavigationItem[] = PET_NAVIGATION_ITEMS;
  protected type = '';
  protected details: IPetDetails | undefined = undefined;
  protected properties: IPetProperties | undefined = undefined;
  protected ePetWiKiNavigation = EPetWiKiNavigation;

  public constructor(private readonly _activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    const { type, id } = this._activatedRoute.snapshot.params;
    this.type = type;
    let PETS_MAP: IPetMap = {};
    switch (type) {
      case 'dog':
        PETS_MAP = DOGS_MAP;
        break;
      case 'cat':
        PETS_MAP = CATS_MAP;
        break;
    }
    this.details = PETS_MAP[id].details;
    this.properties = PETS_MAP[id].properties;
  }

  protected onNavigationItemClick(item: INavigationItem) {
    const targetElement = document.getElementById(item.id);

    if (targetElement) {
      const navbarHeight = 90; // 导航栏高度
      const yPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    } else {
      console.warn('Target element not found:', item.id);
    }
  }
}
