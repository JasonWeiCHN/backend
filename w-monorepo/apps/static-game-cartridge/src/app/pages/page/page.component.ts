import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ArticleCardComponent,
  ENavigationMode,
  ETagSelector,
  IItemCard,
  INavigationItem,
  ITag,
  NavigationButtonComponent,
  NavigationComponent,
  TagSelectorComponent,
} from '@w-monorepo/ui';
import { ActivatedRoute, Router } from '@angular/router';
import { AppGalleryComponent } from '../../components/app-gallery/app-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { IPageConfig } from '../../shared/interfaces/page.interface';
import { EPageMode } from '../../shared/enums/page.enum';
import { PAGE_DATA, PAGE_MAP } from '../../shared/constants/data.constants';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { URL_CONTACT_US } from '@w-monorepo/constants';
import { FormsModule } from '@angular/forms';
import { AnalysisHttpService } from '@w-monorepo/analysis';
import { RecommendComponent } from './components/recommend/recommend.component';
import { CartridgeCardComponent } from '../../components/cartridge-card/cartridge-card.component';
import { IGameCartridgeDetail } from '../../shared/interfaces/game-card.interface';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    AppGalleryComponent,
    NavigationComponent,
    TagSelectorComponent,
    ArticleCardComponent,
    NavigationButtonComponent,
    FormsModule,
    RecommendComponent,
    CartridgeCardComponent,
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
  providers: [AnalysisHttpService],
})
export class PageComponent implements OnInit, OnDestroy {
  protected pageConfig: IPageConfig | undefined = undefined;
  protected readonly eNavigationMode = ENavigationMode;
  protected readonly eTagSelector = ETagSelector;
  protected readonly ePageMode = EPageMode;
  protected navigationItems: INavigationItem[] = [];
  protected data: IItemCard[] = [];
  protected tags: ITag[] = [];
  protected activeNavigationItemId = 'recommend';
  protected initNavigationItemId: string | undefined = undefined;
  protected activeTag: ITag | undefined = undefined;
  protected contactUsUrl = URL_CONTACT_US;
  protected selectedCard: IItemCard | null = null; // 存储当前选中的商品
  protected selectedCardDetail: IGameCartridgeDetail | null = null;
  protected showBanner = false; // 是否展示 bottom-banner
  protected searchText = ''; // 存储搜索关键字
  private _routeSubscription: Subscription | undefined;
  private searchSubject = new Subject<string>();

  public constructor(
    private readonly _analysisHttpService: AnalysisHttpService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) {
    this.searchSubject.pipe(debounceTime(300)).subscribe(() => {
      this.performSearch();
    });
  }

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
    // clear
    this.data = [];
    this.tags = [];

    // 更新页面数据
    this.pageConfig = PAGE_MAP[type];

    this.navigationItems = this.pageConfig?.navigationItems || [];
    this.initNavigationItemId = nav || this.navigationItems[0]?.id;
    this.activeNavigationItemId = this.initNavigationItemId;

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

  protected onSearchChange(): void {
    this.searchSubject.next(this.searchText);
  }

  protected performSearch(): void {
    const { type, nav } = this._activatedRoute.snapshot.params;
    const allData = PAGE_DATA[type]?.[nav] || [];

    if (!this.searchText.trim()) {
      this.data = allData;
      return;
    }

    this.data = allData.filter((item) =>
      item.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // 关闭 bottom-banner
  protected closeBanner(): void {
    this.showBanner = false;
  }

  protected onNavigationItemClick(item: INavigationItem): void {
    const { type } = this._activatedRoute.snapshot.params;
    this._router.navigateByUrl(`/page/${type}/${item.id}`);
    if (this.pageConfig?.tagMap) {
      this.tags = this.pageConfig.tagMap[item.id];
      this.activeTag = this.tags[0];
    }
    this.data = PAGE_DATA[type]?.[item.id] || [];
    this.activeNavigationItemId = item.id;
    // 更新子组件的初始项 不更新上面的导航栏不会变
    this.initNavigationItemId = item.id;
  }

  protected onItemClick(item: IItemCard): void {
    // 更新选中商品的信息
    this.selectedCard = item;

    if (item.detail) {
      this.selectedCardDetail = JSON.parse(item.detail) as IGameCartridgeDetail;
    } else {
      this.selectedCardDetail = null;
    }

    this.showBanner = true;

    this._analysisHttpService.submitString('查看: ' + item.title).subscribe(
      (response: any) => {
        // console.log('String submitted successfully!', response);
      },
      (error: any) => {
        console.error('Error submitting string:', error);
      }
    );

    // const url = item.sourceUrl || item.referer;
    // if (url) {
    //   window.open(url, '_blank');
    // }
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
