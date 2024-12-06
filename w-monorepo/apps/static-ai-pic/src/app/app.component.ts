import { Component } from '@angular/core';
import { IApp } from '@w-monorepo/interfaces';
import { APP_CONFIG } from './shared/constants/app.config.constans';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '@w-monorepo/ui';

@Component({
  standalone: true,
  imports: [CommonModule, GalleryComponent],
  selector: 'pic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected appConfig: IApp = APP_CONFIG;
}
