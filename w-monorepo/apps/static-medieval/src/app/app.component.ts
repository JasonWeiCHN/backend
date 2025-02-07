import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  BackHomeButtonComponent,
  BannerComponent,
  EList,
  INavigationItem,
  ISwitcherProject,
  ListComponent,
  NavigationComponent,
  ProjectSwitcherComponent,
} from '@w-monorepo/ui';
import { NgIf } from '@angular/common';
import { IApp } from '@w-monorepo/interfaces';
import { APP_CONFIG } from './shared/constants/app.config.constans';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [
    HttpClientModule,
    NxWelcomeComponent,
    RouterModule,
    BannerComponent,
    NavigationComponent,
    NgIf,
    ProjectSwitcherComponent,
    ListComponent,
    BackHomeButtonComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected appConfig: IApp = APP_CONFIG;
  protected navigationItemActive = 'videos';
  protected showNavigation = true;
  protected selectedProject: ISwitcherProject | undefined = APP_CONFIG.project;
  protected projects: ISwitcherProject[] = APP_CONFIG.projects || [];

  protected readonly eList = EList;

  public constructor(private _router: Router) {}

  protected onNavigationItemClick(item: INavigationItem) {
    this.navigationItemActive = item.id;
    this._router.navigate([item.path]);
  }

  protected onProjectSelected(item: ISwitcherProject) {
    const { url } = item;
    if (url) {
      window.open(url, '_self');
    }
  }
}
