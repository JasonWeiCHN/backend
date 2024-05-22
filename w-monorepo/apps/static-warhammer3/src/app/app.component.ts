import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  BannerComponent,
  INavigationItem,
  ISwitcherProject,
  NavigationComponent,
  ProjectSwitcherComponent,
  SlideshowComponent
} from '@w-monorepo/ui';
import { NgIf } from '@angular/common';
import { APP_CONFIG } from './shared/constants/app.config.constans';
import { IApp } from '@w-monorepo/interfaces';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [HttpClientModule, NxWelcomeComponent, RouterModule, BannerComponent, NavigationComponent, NgIf, SlideshowComponent, ProjectSwitcherComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected appConfig: IApp = APP_CONFIG;
  protected navigationItemActive = 'clans';
  protected showNavigation = true;
  protected selectedProject: ISwitcherProject | undefined = APP_CONFIG.project;
  protected projects: ISwitcherProject[] = APP_CONFIG.projects || [];

  public constructor(private _router: Router) {
    // 订阅路由变化事件
    this._router.events.subscribe(event => {
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

  protected onProjectSelected(item: ISwitcherProject) {
    const { url } = item;
    if (url) {
      window.open(url, '_self');
    }
  }
}
