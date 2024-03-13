import { Component } from '@angular/core';

@Component({
  selector: 'wei-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wei-front';

  data: any[] = [
    ['', 'Tesla', 'Mercedes', 'Toyota', 'Volvo'],
    ['2019', 10, 11, 12, 13],
    ['2020', 20, 11, 14, 13],
    ['2021', 30, 15, 12, 13],
  ];

  games: any[] = [
    {
      imageUrl: 'https://clan.cloudflare.steamstatic.com/images/44182194/3f73aa495313169cc31e92e9ce2d45deb1b2c257_400x225.png',
      title: '背包乱斗 v0.9.1 版本更新 ',
      description: '平衡调整',
      date: '2024年3月15日周五',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！'
    },
    {
      imageUrl: 'https://clan.akamai.steamstatic.com/images/4437469/c3c6ed62a98c6c0952d9847d40b9cb453ef7c405_400x225.png',
      title: '圣剑归来',
      description: '特别特别特别逗',
      date: '2024年3月18日周五',
      detail: '很少有《Warframe》粉丝会忘记在去年 TennoLive 演示中《Warframe：1999》的惊艳亮相——尤其是我们的第一个原型战甲亚瑟的出现。'
    },
    {
      imageUrl: 'https://clan.akamai.steamstatic.com/images/4437469/d3f472f8f5b1f111b39fdb39d9676fed2b941f25_400x225.png',
      title: 'TennoCon 2024 虚拟礼包',
      description: '你在家享受 TennoCon 2024 体验的最佳方式。',
      date: '2024年3月23日周六',
      detail: 'TennoCon 2024 虚拟礼包是提升你在家享受 TennoCon 2024 体验的最佳方式，可立即为你的军械库添加专属的 TennoCon 物品。今年的礼包以《Warframe：1999》的热潮为主题，带来用于装点你的轨道飞行器的全新展示图和让人想要拥抱的亚瑟玩偶，以及更多精彩内容！'
    }
  ]
}
