import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'w-slideshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss',
})
export class SlideshowComponent implements OnInit, OnDestroy {
  @Input()
  images: string[] = [];

  public currentImageIndex = 0;
  private readonly _autoplayInterval = 5000; // 自动播放间隔，单位为毫秒
  autoplayTimer: any; // 定时器引用

  public ngOnInit(): void {
    this._startAutoplay();
  }

  public ngOnDestroy(): void {
    this._stopAutoplay();
  }

  // 切换到下一张图片
  public nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  // 切换到上一张图片
  public prevImage() {
    this.currentImageIndex = (this.currentImageIndex + this.images.length - 1) % this.images.length;
  }

  // 开始自动播放
  private _startAutoplay() {
    this.autoplayTimer = setInterval(() => {
      this.nextImage();
    }, this._autoplayInterval);
  }

  // 停止自动播放
  private _stopAutoplay() {
    clearInterval(this.autoplayTimer);
  }
}
