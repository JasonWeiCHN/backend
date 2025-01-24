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
  protected images: string[] = [
    'assets/beach_background.png',
    'assets/chinese_game_background.png',
    'assets/mario_background.png',
    'assets/ps5_background.png',
    'assets/zelda_background.png',
    'https://cdn.midjourney.com/37715d5a-70cf-4943-a5eb-c62333758b95/0_0.png',
    'https://cdn.midjourney.com/52af0e1b-d8c4-45ff-9394-d7e54146e184/0_0.png',
    'https://cdn.midjourney.com/0d39c4ed-899f-428f-8850-7df23b420d32/0_0.png',
    'https://cdn.midjourney.com/d19ab73f-0dc8-4ae5-8f12-6c10cbc5c25b/0_3.png',
    'https://cdn.midjourney.com/89952925-a833-4a8f-85e8-7abfe068f4f0/0_3.png',
    'https://cdn.midjourney.com/99bed458-f539-41bd-aaca-e8cb38e9bc65/0_0.png',
    'https://cdn.midjourney.com/7b984c18-981a-4590-a8e0-66b3fcdb09b8/0_2.png',
    'https://cdn.midjourney.com/6db8562a-3b8f-4a1c-b195-242115069889/0_0.png',
    'https://cdn.midjourney.com/d36174e4-75d7-4403-89d3-05190a97a0a5/0_0.png',
    'https://cdn.midjourney.com/a7b8f9d9-12f8-4afc-8d92-716da00c47f9/0_0.png',
    'https://cdn.midjourney.com/7a265e2d-ef3e-4985-a6d0-8980b9925c1f/0_3.png',
    'https://cdn.midjourney.com/bc8b5bc9-58c0-4139-942a-cab1b462924a/0_3.png',
    'https://cdn.midjourney.com/3d083166-d9a0-4971-bd75-0252c5dde5b9/0_0.png',
    'https://cdn.midjourney.com/c8048c21-2979-484b-bc48-f6727eed1dcd/0_0.png',
    'https://cdn.midjourney.com/2a60cfa6-29bb-442c-897e-6bc03c2454c3/0_3.png',
  ];
}
