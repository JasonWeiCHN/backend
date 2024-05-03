import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent, ClassifierComponent, SlideshowComponent } from '@w-monorepo/ui';
import { WarhammerClassifierComponent } from '../../components/warhammer-classifier/warhammer-classifier.component';
import { ClansNavigationComponent } from '../../components/clans-navigation/clans-navigation.component';

@Component({
  selector: 'st-home',
  standalone: true,
  imports: [CommonModule, BannerComponent, ClassifierComponent, WarhammerClassifierComponent, ClansNavigationComponent, SlideshowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public slideImages: string[] = [
    'https://img2.baidu.com/it/u=1050575848,3504429509&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1711558800&t=47e2ac62986ebf7d77749a8418a65389',
    'https://clan.cloudflare.steamstatic.com/images/44182194/3f73aa495313169cc31e92e9ce2d45deb1b2c257_400x225.png',
    'https://clan.cloudflare.steamstatic.com/images/44182194/3f73aa495313169cc31e92e9ce2d45deb1b2c257_400x225.png',
    'https://clan.cloudflare.steamstatic.com/images/44182194/3f73aa495313169cc31e92e9ce2d45deb1b2c257_400x225.png',
    'https://clan.cloudflare.steamstatic.com/images/44182194/3f73aa495313169cc31e92e9ce2d45deb1b2c257_400x225.png'
  ];
}
