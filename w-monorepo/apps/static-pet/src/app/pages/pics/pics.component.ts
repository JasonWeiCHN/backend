import { Component } from '@angular/core';
import { GalleryComponent } from '@w-monorepo/ui';

@Component({
  selector: 'pet-pics',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './pics.component.html',
  styleUrl: './pics.component.scss',
})
export class PicsComponent {}
