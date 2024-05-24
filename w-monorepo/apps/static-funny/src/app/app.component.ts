import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
import { AnalysisHttpService } from '@w-monorepo/analysis';

@Component({
  standalone: true,
  imports: [HttpClientModule, NxWelcomeComponent, BannerComponent, NavigationComponent, NgIf, TagSelectorComponent, ListComponent, NgForOf],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AnalysisHttpService]
})
export class AppComponent implements OnInit, OnDestroy {
  protected hoverItemIndex: number | null = null;
  protected appConfig: IApp = APP_CONFIG;
  protected showNavigation = true;
  protected readonly eList = EList;
  public data: IItemCard[] = ARTICLES_MAP['funny'].slice(0, 42); // 初始加载图片数
  public total = ARTICLES_MAP['funny'].length;
  public pageSize = 21; // 每次加载数
  public currentPage = 2; // 注意 下标2 目前是标准答案 调试出来的 不能写1！

  private loadInterval: any;
  public loadedIndices: Set<number> = new Set<number>();
  private currentIndex = 0;

  public constructor(private analysisHttpService: AnalysisHttpService, private _router: Router) {
  }

  ngOnInit(): void {
    this.loadImagesSequentially();
  }

  ngOnDestroy(): void {
    if (this.loadInterval) {
      clearInterval(this.loadInterval);
    }
  }

  protected onBannerClick() {
    this._router.navigate(['']);
  }

  protected onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');

      this.analysisHttpService.submitString('查看: ' + item.title).subscribe((response: any) => {
        // console.log('String submitted successfully!', response);
      }, (error: any) => {
        console.error('Error submitting string:', error);
      });
    }
  }

  protected loadMore(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = (this.currentPage + 1) * this.pageSize;
    const newData = ARTICLES_MAP['funny'].slice(startIndex, endIndex);
    this.data = this.data.concat(newData);
    this.currentPage++;
    this.loadImagesSequentially();
  }

  protected showGif(index: number) {
    this.hoverItemIndex = index;
  }

  protected hideGif() {
    this.hoverItemIndex = null;
  }

  private loadImagesSequentially() {
    this.loadInterval = setInterval(() => {
      if (this.currentIndex < this.data.length) {
        this.loadedIndices.add(this.currentIndex);
        this.currentIndex++;
      } else {
        clearInterval(this.loadInterval);
      }
    }, 200); // 每隔1秒加载一张图片
  }
}
