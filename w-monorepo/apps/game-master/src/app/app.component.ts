import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GamepadService } from './shared/services/gamepad.service';
import { CommonModule } from '@angular/common';
import { CategoryNavComponent } from './shared/components/category-nav/category-nav.component';
import { GameListComponent } from './shared/components/game-list/game-list.component';
import { IGame } from './shared/interfaces/game.interface';
import { EMode } from './shared/enums/mode.enum';
import { CATEGORIES, GAMES } from './shared/constants/data.constants';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    CategoryNavComponent,
    GameListComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [GamepadService],
})
export class AppComponent implements OnInit {
  private mode: EMode = EMode.View;
  public categories: string[] = CATEGORIES;
  public games: IGame[] = GAMES;

  public selectedCategoryIndex = 0;
  public activeGameIndex = 0;
  public filteredGames = this.games.filter((g) =>
    g.category.includes(this.categories[this.selectedCategoryIndex])
  );

  public isGameRunning = false; // 是否正在运行游戏
  public runningGameName = ''; // 正在运行的游戏名称

  private lastPressTime = 0;
  private DEBOUNCE_TIME = 150; // 防抖时间

  public isVideoPlaying = false;
  public currentVideoUrl = '';

  public constructor(private gamepadService: GamepadService) {}

  public ngOnInit(): void {
    this.updateGridColumnCount(); // 初始化列数

    this.gamepadService.getGamepadState().subscribe((gp) => {
      if (gp && !this.isGameRunning) {
        const now = Date.now();
        if (now - this.lastPressTime < this.DEBOUNCE_TIME) return; // 防抖

        if (gp.buttons[4].pressed) {
          this.changeCategory(this.selectedCategoryIndex - 1);
          this.lastPressTime = now;
        }
        if (gp.buttons[5].pressed) {
          this.changeCategory(this.selectedCategoryIndex + 1);
          this.lastPressTime = now;
        }

        const leftStickX = gp.axes[0];
        const leftStickY = gp.axes[1];
        const colCount = this.gridColumnCount;

        if (gp.buttons[14].pressed || leftStickX < -0.5) {
          // ←
          this.changeGame(this.activeGameIndex - 1);
          this.lastPressTime = now;
        }
        if (gp.buttons[15].pressed || leftStickX > 0.5) {
          // →
          this.changeGame(this.activeGameIndex + 1);
          this.lastPressTime = now;
        }
        if (gp.buttons[12].pressed || leftStickY < -0.5) {
          // ↑
          this.changeGame(this.activeGameIndex - colCount);
          this.lastPressTime = now;
        }
        if (gp.buttons[13].pressed || leftStickY > 0.5) {
          // ↓
          this.changeGame(this.activeGameIndex + colCount);
          this.lastPressTime = now;
        }

        if (gp.buttons[0].pressed) {
          this.launchGame();
          this.lastPressTime = now;
        }

        if (gp.buttons[1].pressed && this.isVideoPlaying) {
          this.stopVideo();
          this.lastPressTime = now;
        }
      }
    });

    // 监听 Electron 的游戏启动事件
    if ((window as any).electron) {
      (window as any).electron.onGameLaunchSuccess(() => {
        console.error('Game launch Success!');
      });

      (window as any).electron.onGameLaunchError((error: string) => {
        console.error('Game launch error:', error);
        this.isGameRunning = false;
        this.runningGameName = '';
      });

      // 监听游戏退出事件
      (window as any).electron.onGameExit(() => {
        console.log('游戏已退出');
        this.isGameRunning = false;
        this.runningGameName = '';
      });

      // 监听图片打开事件
      (window as any).electron.onImageOpenSuccess(() => {
        console.log('图片已打开');
        this.isGameRunning = false;
        this.runningGameName = '';
      });
    }
  }

  public changeCategory(index: number) {
    this.selectedCategoryIndex =
      (index + this.categories.length) % this.categories.length;
    this.filteredGames = this.games.filter((g) =>
      g.category.includes(this.categories[this.selectedCategoryIndex])
    );
    this.activeGameIndex = 0;
  }

  public changeGame(newIndex: number) {
    const maxIndex = this.filteredGames.length;

    // 确保 index 循环合法
    if (newIndex < 0) newIndex = maxIndex - 1;
    if (newIndex >= maxIndex) newIndex = 0;

    this.activeGameIndex = newIndex;

    // 滚动到对应的游戏卡片
    setTimeout(() => {
      const panel = document.querySelector('.game-grid-panel');
      const el = document.getElementById('game-card-' + newIndex);

      if (el && panel) {
        const elTop = el.offsetTop;
        const elHeight = el.clientHeight;
        const panelTop = panel.scrollTop;
        const panelHeight = panel.clientHeight;

        if (elTop < panelTop) {
          // 向上滚
          panel.scrollTo({ top: elTop, behavior: 'smooth' });
        } else if (elTop + elHeight > panelTop + panelHeight) {
          // 向下滚
          panel.scrollTo({
            top: elTop - panelHeight + elHeight,
            behavior: 'smooth',
          });
        }
      }
    });
  }

  public launchGame() {
    const game = this.filteredGames[this.activeGameIndex];

    if (this.mode === EMode.View) {
      if (!game.video) {
        console.log('没有可播放的视频！');
        return;
      }

      this.currentVideoUrl = game.video;
      this.isVideoPlaying = true;

      const videoEl = document.getElementById('game-video') as HTMLVideoElement;
      if (videoEl) {
        videoEl.requestFullscreen().catch((err) => {
          console.warn('无法进入全屏:', err);
        });
        videoEl.play();
      }

      return;
    }

    if (!game.path) {
      console.log(`路径未配置，游戏无法运行！`);
      return;
    }

    console.log(`正在启动游戏：${game.name}`);

    this.isGameRunning = true;
    this.runningGameName = game.name;

    if ((window as any).electron) {
      (window as any).electron.launchGame(game.path);
    } else {
      console.warn('Electron 未找到');
    }
  }

  public stopVideo() {
    const videoEl = document.getElementById('game-video') as HTMLVideoElement;
    if (videoEl) {
      videoEl.pause();
      videoEl.currentTime = 0;
      if (document.fullscreenElement) {
        document
          .exitFullscreen()
          .catch((err) => console.warn('退出全屏失败:', err));
      }
    }
    this.isVideoPlaying = false;
    this.currentVideoUrl = '';
  }

  // 🧠 用于响应式支持的列数计算逻辑
  public gridColumnCount = 6;

  @HostListener('window:resize')
  public onResize() {
    this.updateGridColumnCount();
  }

  private updateGridColumnCount() {
    const width = window.innerWidth;
    if (width <= 768) {
      this.gridColumnCount = 2;
    } else if (width <= 1280) {
      this.gridColumnCount = 4;
    } else {
      this.gridColumnCount = 6;
    }
  }
}
