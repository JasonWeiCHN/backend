import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GameHttpService } from '../../shared/services/game.http.service';
import { IGame } from '../../shared/interfaces/game.interface';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss',
  providers: [GameHttpService],
})
export class GameDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private gameService = inject(GameHttpService);

  game?: IGame;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gameService.getGameById(+id).subscribe({
        next: (res) => (this.game = res),
        error: () => alert('获取游戏信息失败'),
      });
    }
  }

  openGuide(url: string): void {
    console.log('打开链接：', url);

    const bilibiliCustomPattern = /^bilibili\/([\w\d]+)/;

    const match = url.match(bilibiliCustomPattern);
    if (match) {
      const bvid = match[1];
      // 组合成网页端Bilibili视频链接
      const webUrl = `https://www.bilibili.com/video/${bvid}`;
      window.open(webUrl, '_blank');
    } else {
      // 直接用传入的url，确保是完整有效的http(s)链接
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }
      window.open(url, '_blank');
    }
  }
}
