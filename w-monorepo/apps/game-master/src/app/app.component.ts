import { Component, OnInit } from '@angular/core';
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
  public categories = ['店长推荐', 'PS5', 'SWITCH', 'STEAM'];
  public games = [
    {
      name: '真三国无双起源1',
      image: 'assets/F_1qug5y.png',
      category: ['店长推荐'],
      path: 'D:\\SANGUO\\SANGUO-ORIGINS\\DWORIGINS.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
    },
    {
      name: '真三国无双起源2',
      image: 'assets/F_1qug5y.png',
      category: ['店长推荐'],
      path: 'D:\\SANGUO\\SANGUO-ORIGINS\\DWORIGINS.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
    },
    {
      name: '真三国无双起源3',
      image: 'assets/F_1qug5y.png',
      category: ['店长推荐'],
      path: 'D:\\SANGUO\\SANGUO-ORIGINS\\DWORIGINS.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
    },
    {
      name: '真三国无双起源4',
      image: 'assets/F_1qug5y.png',
      category: ['店长推荐'],
      path: 'D:\\SANGUO\\SANGUO-ORIGINS\\DWORIGINS.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
    },
    {
      name: '真三国无双起源5',
      image: 'assets/F_1qug5y.png',
      category: ['店长推荐'],
      path: 'D:\\SANGUO\\SANGUO-ORIGINS\\DWORIGINS.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
    },
    {
      name: '真三国无双起源6',
      image: 'assets/F_1qug5y.png',
      category: ['店长推荐'],
      path: 'D:\\SANGUO\\SANGUO-ORIGINS\\DWORIGINS.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
    },
    {
      name: '真三国无双起源7',
      image: 'assets/F_1qug5y.png',
      category: ['店长推荐'],
      path: 'D:\\SANGUO\\SANGUO-ORIGINS\\DWORIGINS.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
    },
    {
      name: '店长推荐',
      image: 'assets/1058553_front.jpg',
      category: ['店长推荐', 'PS5'],
      path: 'F:\\BaiduNetdiskDownload\\雨魂\\app.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
    },
    {
      name: '图片',
      image: 'assets/1058553_front.jpg',
      category: ['店长推荐', 'SWITCH'],
      path: 'F:\\04.游戏数据采集\\PS345\\001.真·三国无双·起源\\F_1qug5y.png',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
    },
    {
      name: '街机',
      image: 'assets/1058553_front.jpg',
      category: ['店长推荐', 'STEAM'],
      path: 'F:\\街机模拟器中文典藏版+500游戏合集\\WinKawaks.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
    },
    {
      name: 'CS:GO',
      image: 'csgo.jpg',
      category: ['店长推荐', 'STEAM'],
      path: 'D:\\[にじいろばんび] 尼特与天使与色色家族 官方中文版 V1.4\\[にじいろばんび] 尼特与天使与色色家族 官方中文版 V1.4\\NeetAndAngel.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
    },
    {
      name: '塞尔达',
      image: 'zelda.jpg',
      category: ['SWITCH'],
      path: 'C:\\Games\\Zelda.exe',
      releaseDate: '2023-05-10',
      type: '动作冒险',
      description: '《塞尔达传说》是任天堂开发的动作角色扮演游戏系列...',
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

  public ngOnInit() {
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
          this.changeGame(this.activeGameIndex - 6);
          this.lastPressTime = now;
        }
        if (gp.buttons[13].pressed || leftStickY > 0.5) {
          // ↓
          this.changeGame(this.activeGameIndex + 6);
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
    const game = this.filteredGames[this.activeGameIndex];
    console.log(`正在启动游戏：${game.name}`);

    this.isGameRunning = true;
    this.runningGameName = game.name;

    if ((window as any).electron) {
      (window as any).electron.launchGame(game.path);
    } else {
      console.warn('Electron 未找到');
    }
  }
}
