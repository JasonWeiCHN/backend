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
  public categories = ['动作', '射击', '冒险', '策略'];
  public games = [
    {
      name: '真三国无双起源',
      image: 'assets/F_1qug5y.png',
      category: '动作',
      path: 'D:\\SANGUO\\SANGUO-ORIGINS\\DWORIGINS.exe',
    },
    {
      name: '雨魂',
      image: 'assets/1058553_front.jpg',
      category: '动作',
      path: 'F:\\BaiduNetdiskDownload\\雨魂\\app.exe',
    },
    {
      name: '街机',
      image: 'assets/1058553_front.jpg',
      category: '动作',
      path: 'F:\\街机模拟器中文典藏版+500游戏合集\\WinKawaks.exe',
    },
    {
      name: '图片',
      image: 'godofwar.jpg',
      category: '动作',
      path: 'F:\\真·三国无双-起源\\header_schinese.jpg',
    },
    {
      name: 'CS:GO',
      image: 'csgo.jpg',
      category: '射击',
      path: 'D:\\[にじいろばんび] 尼特与天使与色色家族 官方中文版 V1.4\\[にじいろばんび] 尼特与天使与色色家族 官方中文版 V1.4\\NeetAndAngel.exe',
    },
    {
      name: '塞尔达',
      image: 'zelda.jpg',
      category: '冒险',
      path: 'C:\\Games\\Zelda.exe',
    },
  ];

  public selectedCategoryIndex = 0;
  public activeGameIndex = 0;
  public filteredGames = this.games.filter(
    (g) => g.category === this.categories[0]
  );

  private lastPressTime = 0;
  private DEBOUNCE_TIME = 150; // 300ms 防抖时间

  public constructor(private gamepadService: GamepadService) {}

  public ngOnInit() {
    this.gamepadService.getGamepadState().subscribe((gp) => {
      if (gp) {
        const now = Date.now();
        if (now - this.lastPressTime < this.DEBOUNCE_TIME) return; // 防抖

        // 分类切换（LB/RB）
        if (gp.buttons[4].pressed) {
          this.changeCategory(this.selectedCategoryIndex - 1);
          this.lastPressTime = now;
        }
        if (gp.buttons[5].pressed) {
          this.changeCategory(this.selectedCategoryIndex + 1);
          this.lastPressTime = now;
        }

        // 方向键 + 左摇杆控制游戏选择
        const leftStickX = gp.axes[0];
        const leftStickY = gp.axes[1];

        if (gp.buttons[14].pressed || leftStickX < -0.5) {
          this.changeGame(this.activeGameIndex - 1); // 左
          this.lastPressTime = now;
        }
        if (gp.buttons[15].pressed || leftStickX > 0.5) {
          this.changeGame(this.activeGameIndex + 1); // 右
          this.lastPressTime = now;
        }
        if (gp.buttons[12].pressed || leftStickY < -0.5) {
          this.changeGame(this.activeGameIndex - 1); // 上
          this.lastPressTime = now;
        }
        if (gp.buttons[13].pressed || leftStickY > 0.5) {
          this.changeGame(this.activeGameIndex + 1); // 下
          this.lastPressTime = now;
        }

        // A 键启动游戏
        if (gp.buttons[0].pressed) {
          this.launchGame();
          this.lastPressTime = now;
        }
      }
    });
  }

  public changeCategory(index: number) {
    this.selectedCategoryIndex =
      (index + this.categories.length) % this.categories.length;
    this.filteredGames = this.games.filter(
      (g) => g.category === this.categories[this.selectedCategoryIndex]
    );
    this.activeGameIndex = 0;
  }

  public changeGame(index: number) {
    this.activeGameIndex =
      (index + this.filteredGames.length) % this.filteredGames.length;
  }

  // 运行游戏
  public launchGame() {
    const gamePath = this.filteredGames[this.activeGameIndex].path;
    console.log(`打开游戏：${gamePath}`);

    if ((window as any).electron) {
      (window as any).electron.launchGame(gamePath);
    } else {
      console.warn('Electron 未找到');
    }
  }
}
