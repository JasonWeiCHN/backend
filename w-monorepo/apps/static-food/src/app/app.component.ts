import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  BannerComponent,
  EList,
  IItemCard,
  INavigationItem,
  ListComponent,
  NavigationComponent,
  ProjectSwitcherComponent
} from '@w-monorepo/ui';
import { NgIf } from '@angular/common';
import { IApp } from '@w-monorepo/interfaces';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from './shared/constants/app.config.constans';
import { ARTICLES_MAP } from './shared/constants/data.constants';

@Component({
  standalone: true,
  imports: [HttpClientModule, NxWelcomeComponent, BannerComponent, NavigationComponent, NgIf, ProjectSwitcherComponent, ListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly eList = EList;
  protected appConfig: IApp = APP_CONFIG;
  protected navigationItemActive = 'china';

  public food: IItemCard[] = ARTICLES_MAP[this.navigationItemActive];

  protected onNavigationItemClick(item: INavigationItem) {
    this.navigationItemActive = item.id;
    this.food = ARTICLES_MAP[this.navigationItemActive].map(item => {
      return {
        ...item,
        imageUrl: `${APP_CONFIG.fileServer}${item.imageUrl}/pic.jpg`
      };
    });
  }

  protected onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }
}
