import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  BannerComponent, INavigationItem, NavigationComponent, EBannerMode
} from '@w-monorepo/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BannerComponent, NavigationComponent],
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public constructor(private _router: Router) {
  }

  // for test only, can be removed
  public title = 'static';
  protected navigationItemActive = 'clans';
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

  protected onNavigationItemClick(item: INavigationItem) {
    this.navigationItemActive = item.id;
    this._router.navigate([item.path]);
  }
}
