import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  BannerComponent,
  EList,
  IItemCard,
  ISwitcherProject,
  ListComponent,
  NavigationComponent,
  ProjectSwitcherComponent,
} from '@w-monorepo/ui';
import { NgIf } from '@angular/common';
import { IApp } from '@w-monorepo/interfaces';
import { APP_CONFIG } from './shared/constants/app.config.constans';
import { HttpClientModule } from '@angular/common/http';
import { ARTICLES_MAP } from './shared/constants/data.constants';

@Component({
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    BannerComponent,
    NavigationComponent,
    NgIf,
    ProjectSwitcherComponent,
    ListComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected appConfig: IApp = APP_CONFIG;
  protected selectedProject: ISwitcherProject | undefined = APP_CONFIG.project;
  protected projects: ISwitcherProject[] = APP_CONFIG.projects || [];

  protected readonly eList = EList;

  public talents: IItemCard[] = ARTICLES_MAP['talents'];

  public onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }
}
