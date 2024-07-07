import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  BannerComponent,
  INavigationItem,
  ListComponent,
  NavigationComponent,
  ProjectSwitcherComponent,
} from '@w-monorepo/ui';
import { NgIf } from '@angular/common';
import { IApp } from '@w-monorepo/interfaces';
import { APP_CONFIG } from './shared/constants/app.config.constans';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [
    HttpClientModule,
    NxWelcomeComponent,
    RouterModule,
    BannerComponent,
    NavigationComponent,
    NgIf,
    ProjectSwitcherComponent,
    ListComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected showNavigation = true;
  protected navigationItemActive = 'experience';
  protected appConfig: IApp = APP_CONFIG;

  public constructor(private _router: Router) {}

  protected onNavigationItemClick(item: INavigationItem) {
    this.navigationItemActive = item.id;
    this._router.navigate([item.path]);
  }
}
