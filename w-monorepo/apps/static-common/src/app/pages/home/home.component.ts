import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  // 获取视频元素的引用
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    this.playVideo();
  }

  // 确保视频播放
  playVideo(): void {
    const video = this.videoPlayer.nativeElement;

    // 确保浏览器允许自动播放
    video.muted = true; // 自动播放通常要求静音
    video.autoplay = true;

    // 尝试播放视频
    video
      .play()
      .then(() => {
        console.log('Video is playing.');
      })
      .catch((err) => {
        console.error('Video failed to play:', err);
      });
  }
}
