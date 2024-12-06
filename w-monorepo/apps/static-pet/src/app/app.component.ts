import { Component } from '@angular/core';
import { IApp } from '@w-monorepo/interfaces';
import { APP_CONFIG } from './shared/constants/app.config.constans';
import { PetBannerComponent } from './components/pet-banner/pet-banner.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [PetBannerComponent, RouterOutlet],
  selector: 'pet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected appConfig: IApp = APP_CONFIG;
}
