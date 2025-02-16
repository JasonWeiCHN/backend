import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoodComponent } from './pages/good/good.component';
import { HttpClientModule } from '@angular/common/http';
import { INavigationItem, NavigationComponent } from '@w-monorepo/ui';
import { NgIf } from '@angular/common';
import { PlatformComponent } from './pages/platform/platform.component';
import { PriceComponent } from './pages/price/price.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    GoodComponent,
    HttpClientModule,
    NavigationComponent,
    NgIf,
    PlatformComponent,
    PriceComponent,
  ],
  selector: 'm-price-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public title = 'management-price';

  public navigationItems: INavigationItem[] = [
    {
      id: 'price',
      label: '价格',
      path: '',
    },
    {
      id: 'good',
      label: '商品',
      path: '',
    },
    {
      id: 'platform',
      label: '平台',
      path: '',
    },
  ];

  public activeNavigationItem: INavigationItem = {
    id: 'price',
    label: '价格',
    path: '',
  };

  protected onNavigationItemClick(item: INavigationItem) {
    this.activeNavigationItem = item;
  }
}
