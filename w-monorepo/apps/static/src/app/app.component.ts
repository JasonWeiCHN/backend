import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BannerComponent, EBannerMode, INavigationItem, NavigationComponent } from '@w-monorepo/ui';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BannerComponent, NavigationComponent, NgIf],
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public constructor(private _router: Router) {
    // 订阅路由变化事件
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // 检查当前路由是否匹配'article/:id'
        this.showNavigation = !this._router.url.includes('article/');
      }
    });
  }

  // for test only, can be removed
  public title = 'static';
  protected navigationItemActive = 'clans';
  protected showNavigation = true;
  protected readonly eBannerMode = EBannerMode;
  protected readonly navigationItems: INavigationItem[] = [{
    id: 'clans',
    path: 'clans',
    label: '全派系'
  }, {
    id: 'warSchool',
    path: 'war-school',
    label: '战争讲堂'
  }, {
    id: 'articles',
    path: 'articles',
    label: '文章资料'
  }];

  protected onBannerClick() {
    this._router.navigate(['']);
  }

  protected onNavigationItemClick(item: INavigationItem) {
    this.navigationItemActive = item.id;
    this._router.navigate([item.path]);
  }
}
