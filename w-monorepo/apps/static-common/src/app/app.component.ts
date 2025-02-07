import { Component } from '@angular/core';
import { IApp } from '@w-monorepo/interfaces';
import { APP_CONFIG } from './shared/constants/app.config.constants';
import { AppBannerComponent } from './components/app-banner/app-banner.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [AppBannerComponent, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected appConfig: IApp = APP_CONFIG;
}
