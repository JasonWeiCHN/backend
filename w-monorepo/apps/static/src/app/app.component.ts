import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  BannerComponent,
} from '@w-monorepo/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BannerComponent],
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'static';
}
