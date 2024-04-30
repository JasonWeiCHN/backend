import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BannerComponent, EList, IItemCard, INavigationItem, ListComponent, NavigationComponent } from '@w-monorepo/ui';
import { NgIf } from '@angular/common';
import { IApp } from '@w-monorepo/interfaces';
import { APP_CONFIG } from './shared/constants/app.config.constans';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BannerComponent, NavigationComponent, NgIf, ListComponent],
  selector: 'app-root',
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

  protected readonly eList = EList;

  public data: IItemCard[] = [
    {
      'id': '1',
      'typeId': 'funnyCollection',
      'imageUrl': '',
      'title': '这监控是真的离谱！',
      'publisher': '人类爆笑行为图鉴',
      'detail': '这监控是真的离谱！',
      'description': '这监控是真的离谱！',
      'views': 1831,
      'date': '2024-02-25 17:39:41',
      'tagIds': [],
      'sourceUrl': 'https://www.bilibili.com/video/BV1G1421f7iC/?spm_id_from=333.999.0.0',
      'referer': null
    }
  ];

  public onListItemClick(item: IItemCard): void {
    console.log(item);
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }
}
