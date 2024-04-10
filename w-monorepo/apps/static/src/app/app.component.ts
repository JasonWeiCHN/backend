import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  BannerComponent, NavigationComponent
} from '@w-monorepo/ui';
import { EBannerMode } from '../../../../libs/shared/ui/src/lib/banner/shared/enums/banner.enum';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BannerComponent, NavigationComponent],
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'static';
  protected readonly eBannerMode = EBannerMode;
}
