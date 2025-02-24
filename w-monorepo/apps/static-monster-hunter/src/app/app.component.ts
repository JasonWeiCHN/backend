import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {
  BackHomeButtonComponent,
  BannerComponent,
  INavigationItem,
  NavigationComponent,
  ProjectSwitcherComponent,
  SlideshowComponent,
  SnackbarComponent,
  SnackbarModule,
} from '@w-monorepo/ui';
import { CommonModule } from '@angular/common';
import { APP_CONFIG } from './shared/constants/app.config.constans';
import { IApp } from '@w-monorepo/interfaces';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [
    SnackbarModule,
    HttpClientModule,
    RouterModule,
    BannerComponent,
    NavigationComponent,
    CommonModule,
    SlideshowComponent,
    ProjectSwitcherComponent,
    SnackbarComponent,
    BackHomeButtonComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected appConfig: IApp = APP_CONFIG;
  protected navigationItemActive = 'weapons';
  protected showNavigation = true;
  // protected selectedProject: ISwitcherProject | undefined = APP_CONFIG.project;
  // protected projects: ISwitcherProject[] = APP_CONFIG.projects || [];

  public constructor(private _router: Router) {
    // 订阅路由变化事件
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // 检查当前路由是否匹配'article/:id'
        this.showNavigation = !this._router.url.includes('article/');
      }
    });
  }

  protected onBannerClick() {
    this._router.navigate(['clans']);
  }

  protected onNavigationItemClick(item: INavigationItem) {
    this.navigationItemActive = item.id;
    this._router.navigate([item.path]);
  }

  // protected onProjectSelected(item: ISwitcherProject) {
  //   const { url } = item;
  //   if (url) {
  //     window.open(url, '_self');
  //   }
  // }
}
