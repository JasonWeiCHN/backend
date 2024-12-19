import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INavigationItem } from '@w-monorepo/ui';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'pet-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-banner.component.html',
  styleUrl: './pet-banner.component.scss',
})
export class PetBannerComponent {
  public items: INavigationItem[] = [
    {
      id: 'onSale',
      label: '在售宠物',
      path: 'on-sale',
    },
    {
      id: 'food',
      label: '宠物粮仓',
      path: 'food',
    },
    {
      id: 'goods',
      label: '宠物用品',
      path: 'goods',
    },
    {
      id: 'service',
      label: '宠物服务',
      path: 'service',
    },
    {
      id: 'news',
      label: '宠物资讯',
      path: 'news',
    },
    {
      id: 'pics',
      label: '宠物美图',
      path: 'pics',
    },
  ];
  public activeItemId = '';
  protected activeItem: INavigationItem | undefined = undefined;
  protected isMenuVisible = false;

  public constructor(private _router: Router) {
    // 监听路由变化
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveItemId();
      }
    });
  }

  protected onItemClick(item: INavigationItem) {
    this.activeItemId = item.id;
    this.activeItem = item;
    this.isMenuVisible = false;
    this._router.navigate([item.path]);
  }

  protected onLogoClick() {
    this._router.navigate(['home']);
  }

  protected onMenuClick() {
    this.isMenuVisible = true;
  }

  protected onCloseMenuClick() {
    this.isMenuVisible = false;
  }

  private updateActiveItemId() {
    const currentUrl = this._router.url;
    const matchedItem = this.items.find((item) =>
      currentUrl.includes(item.path)
    );
    if (matchedItem) {
      this.activeItemId = matchedItem.id;
      this.activeItem = matchedItem;
    }
  }
}
