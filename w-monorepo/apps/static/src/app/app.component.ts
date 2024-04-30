import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BannerComponent, INavigationItem, NavigationComponent } from '@w-monorepo/ui';
import { NgIf } from '@angular/common';
import { APP_CONFIG } from './shared/constants/app.config.constans';
import { IApp } from '@w-monorepo/interfaces';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BannerComponent, NavigationComponent, NgIf],
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected appConfig: IApp = APP_CONFIG;
  protected navigationItemActive = 'clans';
  protected showNavigation = true;

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
    this._router.navigate(['']);
  }

  protected onNavigationItemClick(item: INavigationItem) {
    this.navigationItemActive = item.id;
    this._router.navigate([item.path]);
  }
}
