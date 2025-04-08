import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GamepadService } from './shared/services/gamepad.service';
import { CommonModule } from '@angular/common';
import { CategoryNavComponent } from './shared/components/category-nav/category-nav.component';
import { GameListComponent } from './shared/components/game-list/game-list.component';

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
  private mode: 'view' | 'play' = 'view';
  public categories = [
    '店长推荐',
    '双人',
    '亲子',
    '剧情',
    '困难',
    'PS5',
    'SWITCH',
    'STEAM',
  ];
  public games = [
    {
      name: '双影奇境',
      image: 'assets/game-images/双影奇境.png',
      category: ['店长推荐', '双人', '亲子', 'PS5'],
      path: '',
      releaseDate: '2023-03-07',
      type: '双人',
      description:
        '深入《双影奇境》的多重世界，体验惊心动魄的时刻，完成突破边界的合作冒险。',
      video: 'assets/game-videos/双影奇境.mp4',
    },
    {
      name: '双人成行',
      image: 'assets/game-images/双人成行.png',
      category: ['店长推荐', '双人', '亲子', 'PS5', 'SWITCH'],
      path: '',
      releaseDate: '2021-03-26',
      type: '双人',
      description:
        '游玩《双人成行》，踏上生命中最疯狂的旅程，扮演相互看不顺眼的科迪和小梅夫妇，这两个人被魔咒变成了玩偶。他们一起被困在一个奇幻世界里，每个角落都隐藏着意想不到的东西，他们不得不一起克服挑战，同时挽救他们破裂的关系。',
      video: 'assets/game-videos/双人成行.webm',
    },
    {
      name: '怪物猎人·荒野',
      image: 'assets/game-images/怪物猎人·荒野.png',
      category: ['店长推荐', '困难', 'PS5', 'SWITCH'],
      path: '',
      releaseDate: '2025-02-28',
      type: '狩猎',
      description:
        '狂野凶猛的大自然，袭来。 时刻都在动态变化的原野。 这是个关于生活在具有两面性的世界中的怪物与人们的故事。 进化的狩猎动作，寻求连续不断的沉浸感，究极的狩猎体验正等待你的到来。',
      video: 'assets/game-videos/怪物猎人·荒野.mp4',
    },
    {
      name: '真·三国无双 起源',
      image: 'assets/game-images/真·三国无双 起源.png',
      category: ['店长推荐', '困难', 'PS5'],
      path: '',
      releaseDate: '2025-01-17',
      type: '动作',
      description:
        '如临真实战场，畅享爽快的一骑当千动作！无名英雄闯荡三国乱世的“真・三国无双”系列新作。',
      video: 'assets/game-videos/真·三国无双 起源.mp4',
    },
    {
      name: '图片',
      image: 'assets/1058553_front.jpg',
      category: ['店长推荐', 'SWITCH'],
      path: 'F:\\04.游戏数据采集\\PS345\\001.真·三国无双·起源\\F_1qug5y.png',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
      video: '',
    },
    {
      name: '街机',
      image: 'assets/1058553_front.jpg',
      category: ['店长推荐', 'STEAM'],
      path: 'F:\\街机模拟器中文典藏版+500游戏合集\\WinKawaks.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
      video: '',
    },
    {
      name: 'CS:GO',
      image: 'csgo.jpg',
      category: ['店长推荐', 'STEAM'],
      path: 'D:\\[にじいろばんび] 尼特与天使与色色家族 官方中文版 V1.4\\[にじいろばんび] 尼特与天使与色色家族 官方中文版 V1.4\\NeetAndAngel.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
      video: '',
    },
    {
      name: '塞尔达',
      image: 'zelda.jpg',
      category: ['SWITCH'],
      path: 'C:\\Games\\Zelda.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
      video: '',
    },
  ];

  public selectedCategoryIndex = 0;
  public activeGameIndex = 0;
  public filteredGames = this.games.filter((g) =>
    g.category.includes(this.categories[this.selectedCategoryIndex])
  );

  public isGameRunning = false; // 是否正在运行游戏
  public runningGameName = ''; // 正在运行的游戏名称

  private lastPressTime = 0;
  private DEBOUNCE_TIME = 150; // 防抖时间

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
  }

  public launchGame() {
    if (this.mode === 'view') {
      console.log(`查看模式，游戏无法运行！`);
      return;
    }

    const game = this.filteredGames[this.activeGameIndex];

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
