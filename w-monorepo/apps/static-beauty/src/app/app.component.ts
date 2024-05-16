import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  BannerComponent,
  EList,
  IItemCard,
  ListComponent,
  NavigationComponent,
  TagSelectorComponent
} from '@w-monorepo/ui';
import { NgForOf, NgIf } from '@angular/common';
import { IApp } from '@w-monorepo/interfaces';
import { APP_CONFIG } from './shared/constants/app.config.constans';
import { ARTICLES_MAP } from './shared/constants/data.constants';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [HttpClientModule, NxWelcomeComponent, RouterModule, BannerComponent, NavigationComponent, NgIf, TagSelectorComponent, ListComponent, NgForOf],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected appConfig: IApp = APP_CONFIG;
  protected showNavigation = true;
  protected readonly eList = EList;
  public data: IItemCard[] = ARTICLES_MAP['beauty'].slice(0, 42); // 初始加载图片数
  public total = ARTICLES_MAP['beauty'].length;
  public pageSize = 21; // 每次加载数
  public currentPage = 2; // 注意 下标2 目前是标准答案 调试出来的 不能写1！

  public constructor(private _router: Router) {
  }

  protected onBannerClick() {
    this._router.navigate(['']);
  }

  public onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }

  public loadMore(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = (this.currentPage + 1) * this.pageSize;
    const newData = ARTICLES_MAP['beauty'].slice(startIndex, endIndex);
    this.data = this.data.concat(newData);
    this.currentPage++;
  }
}
