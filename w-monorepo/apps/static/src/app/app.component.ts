import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  BannerComponent,
  INavigationItem,
  IProjectSwitcher,
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
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected appConfig: IApp = APP_CONFIG;
  protected navigationItemActive = 'clans';
  protected showNavigation = true;
  protected selectedProject: IProjectSwitcher = {
    id: '2',
    label: '全面战争·战锤3',
    url: 'http://111.230.29.99/'
  };
  protected projects: IProjectSwitcher[] = [
    {
      id: '1',
      label: '全面战争·幕府将军',
      url: 'http://111.230.29.99:4000/'
    },
    {
      id: '2',
      label: '全面战争·战锤3',
      url: 'http://111.230.29.99/'
    },
    {
      id: '3',
      label: '全面战争·法老',
      url: 'http://111.230.29.99:4001/'
    }
  ];

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

  protected onProjectSelected(item: IProjectSwitcher) {
    const { url } = item;
    if (url) {
      window.open(url, '_self');
    }
  }
}
