import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GamepadService } from './shared/services/gamepad.service';
import { CommonModule } from '@angular/common';
import { CategoryNavComponent } from './shared/components/category-nav/category-nav.component';
import { GameListComponent } from './shared/components/game-list/game-list.component';
import { IGame } from './shared/interfaces/game.interface';
import { EMode } from './shared/enums/mode.enum';

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
  public categories = [
    '店长推荐',
    '双人',
    '亲子',
    '剧情',
    '体育',
    '困难',
    'PS5',
    'SWITCH',
    'STEAM',
  ];
  public games: IGame[] = [
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
      name: '黑神话·悟空',
      image: 'assets/game-images/黑神话·悟空.png',
      category: ['店长推荐', '困难', 'PS5'],
      path: '',
      releaseDate: '2024-08-20',
      type: '神话',
      description: '直面天命！',
      video: 'assets/game-videos/黑神话·悟空.mp4',
    },
    {
      name: '刺客信条·影',
      image: 'assets/game-images/刺客信条·影.png',
      category: ['店长推荐', '剧情', 'PS5'],
      path: '',
      releaseDate: '2025-03-20',
      type: '刺杀 冒险 潜行',
      description:
        '在日本战国背景下，体验史诗般的动作冒险故事！变身夺命忍者刺客，化为强大传奇武士，在一片混沌的时代，进入美丽的开放世界进行探索！',
      video: 'assets/game-videos/刺客信条·影.mp4',
    },
    {
      name: '对马岛之魂',
      image: 'assets/game-images/对马岛之魂.png',
      category: ['店长推荐', '困难', '剧情', 'PS5'],
      path: '',
      releaseDate: '2024-05-16',
      type: '刺杀 冒险 潜行',
      description:
        '13世纪末，蒙古帝国东征，铁蹄所到之处皆成焦土。残暴狡诈的蒙军统帅赫通汗率领舰队大举入侵，对马岛是横亘在侵略者与日本本土之间的最后一道防线。',
      video: 'assets/game-videos/对马岛之魂.mp4',
    },
    {
      name: '魂斗罗·加鲁加行动',
      image: 'assets/game-images/魂斗罗·加鲁加行动.png',
      category: ['店长推荐', '双人', 'PS5'],
      path: '',
      releaseDate: '2024-08-20',
      type: '动作 街机 怀旧 横版射击',
      description:
        '经典魂斗罗系列的最新作品终于登场了！ 本作品是1980年代一经发售就获得广大支持的初代【魂斗罗】的完全重制版。 ',
      video: 'assets/game-videos/魂斗罗·加鲁加行动.mp4',
    },
    {
      name: 'EA SPORTS FC™ 25',
      image: 'assets/game-images/FC25.png',
      category: ['店长推荐', '体育', 'PS5'],
      path: '',
      releaseDate: '2024-09-27',
      type: '体育 足球',
      description:
        '《EA SPORTS FC™ 25》将为您带来更多为俱乐部奋勇争胜的方式。在您最喜爱的模式中通过全新 5 对 5 Rush 与好友并肩作战，借助 FC IQ 以前所未有的强大战术掌控力引领您的俱乐部走向胜利。',
      video: 'assets/game-videos/FC 25.webm',
    },
    {
      name: '街霸6',
      image: 'assets/game-images/街霸6.png',
      category: ['店长推荐', '双人', 'PS5'],
      path: '',
      releaseDate: '2023-06-02',
      type: '格斗',
      description:
        '隆、春丽、卢克、杰米、金佰莉等从传奇到新世代的FIGHTER们，带着令人印象深刻的视觉效果和丰富多彩的招式，集结于此。',
      video: 'assets/game-videos/街霸6-不知火舞.mp4',
    },
    {
      name: '拳皇15',
      image: 'assets/game-images/拳皇15.png',
      category: ['店长推荐', '双人', 'PS5'],
      path: '',
      releaseDate: '2024-12-12',
      type: '格斗',
      description: '粉碎！突破想象 突破一切的新生『15』！',
      video: 'assets/game-videos/拳皇15.webm',
    },
    {
      name: '疯狂兔子：奇遇派对',
      image: 'assets/game-images/疯狂兔子·奇遇派对.png',
      category: ['店长推荐', '双人', '亲子', 'PS5', 'SWITCH'],
      path: '',
      releaseDate: '2024-12-12',
      type: '多人 合家欢',
      description:
        '游戏中，疯狂兔子再次穿越时空回到过去，而与以往不同的是他们这次降落在了中国的土地上，机缘巧合下，疯狂兔子闯入西游记，扮演起了师徒四人组合，展开了新的旅程。',
      video: 'assets/game-videos/疯狂兔子·奇遇派对.mp4',
    },
    {
      name: '大富翁10',
      image: 'assets/game-images/大富翁10.png',
      category: ['店长推荐', '双人', '亲子', 'STEAM'],
      path: '',
      releaseDate: '2019-10-24',
      type: '多人 合家欢',
      description:
        '游戏采用回合制，初始所有玩家有一定的存款、现金、卡片。通过投骰子决定移动步数。踩中无主的地产可以购买，踩中敌人的地产需要交过路费。',
      video: 'assets/game-videos/大富翁10.webm',
    },
    {
      name: '艾尔登法环',
      image: 'assets/game-images/艾尔登法环.png',
      category: ['困难', '剧情', 'PS5', 'PS4', 'STEAM'],
      path: '',
      releaseDate: '2022-02-25',
      type: '魂 困难',
      description:
        '故事发生在名为“交界地”的地方，这里的人们拥戴永恒女王玛莉卡，也受到她的祝福。所有接受祝福的人瞳孔中都有黄金一般的光芒，但也有些人因为各种原因失去了赐福，眼中的光芒消逝。这些人就被称为褪色者，并因此被逐出交界地。',
      video: 'assets/game-videos/艾尔登法环.mp4',
    },
    {
      name: '暗影火炬城',
      image: 'assets/game-images/暗影火炬城.png',
      category: ['STEAM'],
      path: '',
      releaseDate: '2021-10-03',
      type: '蒸汽朋克',
      description:
        '玩家将扮演一只挥动着巨大铁拳的兔子，在柴油朋克美学的庞大世界中与军团展开激战。',
      video: 'assets/game-videos/暗影火炬城.webm',
    },
    {
      name: '苍翼：混沌效应',
      image: 'assets/game-images/苍翼：混沌效应.png',
      category: ['店长推荐', 'STEAM'],
      path: '',
      releaseDate: '2024-02-15',
      type: '动作',
      description:
        '超华丽动作战斗，极致畅爽连招！ 超多角色、超百种招式！这款独树一帜的动作Rogue游戏将带给你酣畅淋漓的超预期体验。',
      video: 'assets/game-videos/苍翼：混沌效应.webm',
    },
    {
      name: '饥荒',
      image: 'assets/game-images/饥荒.png',
      category: ['店长推荐', '双人', 'STEAM'],
      path: '',
      releaseDate: '2013-04-24',
      type: '生存',
      description:
        'Don’t Starve 是一款充满科学和魔法的硬派野外生存游戏。\n' +
        '你扮演 Wilson ，一位被恶魔困住而且被传送到神秘荒野的既勇敢又绅士的科学家。如果 Wilson 想逃出生天并找到回家的路，那就必须学会利用这里的环境和各种生物。\n' +
        '进入这样一个充满奇特生物，危险和惊奇的未知世界。收集资源并打造出符合你的生存方式的物品。用你的方式来揭开这谜一般的大陆的神秘面纱吧！',
      video: 'assets/game-videos/饥荒.webm',
    },
    {
      name: '歧路旅人2',
      image: 'assets/game-images/歧路旅人2.png',
      category: ['店长推荐', '剧情', 'STEAM'],
      path: '',
      releaseDate: '2023-02-25',
      type: '角色扮演 剧情',
      description:
        '故事发生在一个东西大陆隔海相望的地域，\n' +
        '那里被称为“索里苏提亚”。\n' +
        '\n' +
        '这是一个开拓新航线，巨轮频繁往来，\n' +
        '使用蒸汽新技术的发明不断涌现的时代。\n' +
        '\n' +
        '这是一个既有人为辉煌发展的工业及文化雀跃不已，\n' +
        '又有人因战乱、疾病和贫困泪流不止的世界。\n' +
        '\n' +
        '八位旅行者，\n' +
        '无论是家乡、志向还是绝技都截然不同。\n' +
        '而你，可以作为他们当中的一人，\n' +
        '自由地翱翔于世界。\n' +
        '\n' +
        '敢问路在何方？启程去创造只属于你自己的传说——',
      video: 'assets/game-videos/歧路旅人2.webm',
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
