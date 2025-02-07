import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ArticleCardComponent,
  ENavigationMode,
  ETagSelector,
  GoodCardComponent,
  IItemCard,
  INavigationItem,
  ITag,
  NavigationComponent,
  TagSelectorComponent,
} from '@w-monorepo/ui';
import { EPetTag } from '../../shared/enums/pet.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { AppGalleryComponent } from '../../components/app-gallery/app-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { IPageConfig } from '../../shared/interfaces/page.interface';
import { EPageMode } from '../../shared/enums/page.enum';
import { PAGE_DATA, PAGE_MAP } from '../../shared/constants/data.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    AppGalleryComponent,
    NavigationComponent,
    TagSelectorComponent,
    GoodCardComponent,
    ArticleCardComponent,
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent implements OnInit, OnDestroy {
  protected pageConfig: IPageConfig | undefined = undefined;
  protected readonly eNavigationMode = ENavigationMode;
  protected readonly eTagSelector = ETagSelector;
  protected readonly ePageMode = EPageMode;
  protected navigationItems: INavigationItem[] = [];
  protected data: IItemCard[] = [];
  protected tags: ITag[] = [];
  protected activeNavigationItemId: string = EPetTag.DOG;
  protected initNavigationItemId: string | undefined = undefined;
  protected activeTag: ITag | undefined = undefined;
  private _routeSubscription: Subscription | undefined;

  public constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    // 订阅路由参数变化
    this._routeSubscription = this._activatedRoute.paramMap.subscribe(
      (params) => {
        const type = params.get('type') || '';
        const nav = params.get('nav') || undefined;
        const tag = params.get('tag') || undefined;

        this.initializePage(type, nav, tag);
      }
    );
  }

  private initializePage(type: string, nav?: string, tag?: string): void {
    console.log(type, nav, tag);
    // clear
    this.data = [];
    this.tags = [];

    // 更新页面数据
    this.pageConfig = PAGE_MAP[type];

    this.navigationItems = this.pageConfig?.navigationItems || [];
    this.initNavigationItemId = nav || this.navigationItems[0]?.id;

    if (this.navigationItems.length === 0) {
      this.data = Object.values(PAGE_DATA[type]).flat() || [];
      this.tags = [];
    }

    if (this.navigationItems.length && this.initNavigationItemId) {
      this.data = PAGE_DATA[type]?.[this.initNavigationItemId] || [];

      if (this.pageConfig?.tagMap) {
        this.tags = this.pageConfig.tagMap[this.initNavigationItemId] || [];
        this.activeTag = this.tags.find((t) => t.id === tag) || this.tags[0];
      }
    }
  }

  protected onNavigationItemClick(item: INavigationItem): void {
    const { type } = this._activatedRoute.snapshot.params;
    this._router.navigate([`/page/${type}/${item.id}`]);
    if (this.pageConfig?.tagMap) {
      this.tags = this.pageConfig.tagMap[item.id];
      this.activeTag = this.tags[0];
    }
    this.data = PAGE_DATA[type]?.[item.id] || [];
    this.activeNavigationItemId = item.id;
  }

  protected onItemClick(item: IItemCard): void {
    console.log(item);

    const url = item.sourceUrl || item.referer;

    if (url) {
      window.open(url, '_blank');
    }
  }

  protected onMoreClick(): void {
    if (!this.activeTag) return;

    this._router.navigate([
      `/wiki/${this.activeNavigationItemId}/${this.activeTag.id}`,
    ]);
  }

  protected onTagSelect(tagIndex: number): void {
    const { type } = this._activatedRoute.snapshot.params;
    this.activeTag = this.tags[tagIndex];
    const { id } = this.tags[tagIndex];
    const data = PAGE_DATA[type]?.[this.activeNavigationItemId] || [];

    if (id === 'all') {
      this.data = data;
    } else {
      this.data = data.filter((item) => item.typeId === id);
    }
  }

  public ngOnDestroy(): void {
    // 取消订阅，避免内存泄漏
    this._routeSubscription?.unsubscribe();
  }
}
