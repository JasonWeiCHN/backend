import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { INavigationItem } from './shared/interfaces/navigation.interface';
import { has } from 'lodash-es';
import { NavigationEnd, Router } from '@angular/router';
import { AnalysisHttpService } from '@w-monorepo/analysis';
import { ENavigationMode } from './shared/enums/navigation.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'w-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  providers: [AnalysisHttpService],
})
export class NavigationComponent implements OnChanges, OnInit, OnDestroy {
  /**
   * @description
   * Different mode will display different layout
   * @type {ENavigationMode}
   * @default ENavigationMode.DEFAULT
   */
  @Input()
  public mode: ENavigationMode = ENavigationMode.DEFAULT;

  /**
   * @description
   * Navigation items
   * @type {INavigationItem[]}
   * @default []
   */
  @Input()
  public items: INavigationItem[] = [];

  /**
   * @description
   * Init item id
   * @type {string | undefined}
   * @default undefined
   */
  @Input()
  public initItemId: string | undefined = undefined;

  @Output('navigationItemClick')
  public readonly itemClick: EventEmitter<INavigationItem> =
    new EventEmitter<INavigationItem>();

  public activeItemId = '';
  protected eNavigationMode = ENavigationMode;
  private routerEventsSubscription: Subscription | undefined;

  public constructor(
    private analysisHttpService: AnalysisHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 订阅路由事件
    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveItemId();
      }
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (has(changes, 'items')) {
      if (this.initItemId) {
        // 使用传入的初始项
        this.activeItemId = this.initItemId;
      } else if (this.items.length) {
        // 默认激活第一项
        this.activeItemId = this.items[0].id;
      }
    }

    if (has(changes, 'initItemId') && this.initItemId) {
      this.activeItemId = this.initItemId;
    }
  }

  public ngOnDestroy(): void {
    // 组件销毁时取消订阅
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
  }

  protected onItemClick(item: INavigationItem) {
    this.activeItemId = item.id;
    this.itemClick.emit(item);

    this.analysisHttpService.submitString('导航切换: ' + item.label).subscribe(
      (response: any) => {
        // console.log('String submitted successfully!', response);
      },
      (error: any) => {
        console.error('Error submitting string:', error);
      }
    );
  }

  private updateActiveItemId() {
    const currentUrl = this.router.url;
    const matchedItem = this.items.find((item) =>
      currentUrl.includes(item.path)
    );
    if (matchedItem) {
      this.activeItemId = matchedItem.id;
    }
  }
}
