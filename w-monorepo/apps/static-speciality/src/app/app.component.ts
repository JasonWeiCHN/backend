import { Component, OnInit } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  BannerComponent,
  ChinaCitySelectorComponent,
  EList,
  ICity,
  IItemCard,
  INavigationItem,
  IProvince,
  ListComponent,
  NavigationComponent,
  ProjectSwitcherComponent
} from '@w-monorepo/ui';
import { NgIf } from '@angular/common';
import { IApp } from '@w-monorepo/interfaces';
import { HttpClientModule } from '@angular/common/http';
import { ARTICLES_MAP } from './shared/constants/data.constants';
import { APP_CONFIG } from './shared/constants/app.config.constans';
import { PROVINCES } from './shared/constants/provinces.constants';

@Component({
  standalone: true,
  imports: [HttpClientModule, NxWelcomeComponent, BannerComponent, NavigationComponent, NgIf, ProjectSwitcherComponent, ListComponent, ChinaCitySelectorComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  protected readonly eList = EList;
  protected appConfig: IApp = APP_CONFIG;
  protected navigationItemActive = 'food';
  protected provinces: IProvince[] = PROVINCES;
  protected selectedCity: ICity = PROVINCES[0].children[0];

  public data: IItemCard[] = [];

  ngOnInit(): void {
    this.refreshData();
  }

  protected onNavigationItemClick(item: INavigationItem) {
    this.navigationItemActive = item.id;
    this.refreshData();
  }

  protected onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }

  protected onCitySelected(city: ICity): void {
    this.selectedCity = city;
    this.refreshData();
  }

  private refreshData(): void {
    const data = (ARTICLES_MAP[this.selectedCity.code]).filter(article =>
      article.tagIds?.includes(this.navigationItemActive)
    );

    this.data = data.map(item => {
      return {
        ...item,
        imageUrl: `${APP_CONFIG.fileServer}${item.imageUrl}/pic.jpg`
      };
    });
  }
}
