import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  BannerComponent,
  ClassifierComponent,
  IClassifierItem,
  IItemCard,
  ItemCardComponent,
  SlideshowComponent
} from '@w-monorepo/ui';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BannerComponent, ClassifierComponent, ItemCardComponent, NgForOf, NgIf, SlideshowComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'static';
  public activeTypeId = '1';

  public slideImages: string[] = [
    'https://img2.baidu.com/it/u=1050575848,3504429509&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1711558800&t=47e2ac62986ebf7d77749a8418a65389',
    'assets/images/666.jpg',
    'https://clan.cloudflare.steamstatic.com/images/44182194/3f73aa495313169cc31e92e9ce2d45deb1b2c257_400x225.png',
  ];

  public cards: IItemCard[] = [
    {
      id: '',
      typeId: '1',
      imageUrl: 'https://img2.baidu.com/it/u=1050575848,3504429509&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1711558800&t=47e2ac62986ebf7d77749a8418a65389',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '吴彦祖的新作已经好久没有看到了，但一旦他发布照片，总能激起强烈的关注。这一次，吴彦祖在美国晒出了与贾玲的合影，这一举动竟直接引起了网友的震惊。先浏览一下这张经过滤镜处理的吴彦祖和贾玲的合影：一个高大英俊的男士，一个皮肤白皙容貌秀美的女士。'
    },
    {
      id: '',
      typeId: '2',
      imageUrl: 'https://img2.baidu.com/it/u=1050575848,3504429509&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1711558800&t=47e2ac62986ebf7d77749a8418a65389',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'https://img2.baidu.com/it/u=1050575848,3504429509&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1711558800&t=47e2ac62986ebf7d77749a8418a65389',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '4',
      imageUrl: 'https://img2.baidu.com/it/u=1050575848,3504429509&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1711558800&t=47e2ac62986ebf7d77749a8418a65389',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/666.jpg',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '3',
      imageUrl: 'assets/images/666.jpg',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics3.baidu.com%2Ffeed%2F8435e5dde71190ef4507f73c89c65d1bfffa60bb.jpeg%40f_auto%3Ftoken%3Dd9efd48e3ab35628c86d7103becfd790&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1711558800&t=2326a968a89000feae6ff147c263092d',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'https://clan.cloudflare.steamstatic.com/images/44182194/3f73aa495313169cc31e92e9ce2d45deb1b2c257_400x225.png',
      title: '背包乱斗 v0.9.1 版本更新 ',
      description: '平衡调整',
      date: '2024年3月15日周五',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/666.jpg',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics3.baidu.com%2Ffeed%2F8435e5dde71190ef4507f73c89c65d1bfffa60bb.jpeg%40f_auto%3Ftoken%3Dd9efd48e3ab35628c86d7103becfd790&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1711558800&t=2326a968a89000feae6ff147c263092d',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'https://clan.cloudflare.steamstatic.com/images/44182194/3f73aa495313169cc31e92e9ce2d45deb1b2c257_400x225.png',
      title: '背包乱斗 v0.9.1 版本更新 ',
      description: '平衡调整',
      date: '2024年3月15日周五',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/666.jpg',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics3.baidu.com%2Ffeed%2F8435e5dde71190ef4507f73c89c65d1bfffa60bb.jpeg%40f_auto%3Ftoken%3Dd9efd48e3ab35628c86d7103becfd790&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1711558800&t=2326a968a89000feae6ff147c263092d',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'https://clan.cloudflare.steamstatic.com/images/44182194/3f73aa495313169cc31e92e9ce2d45deb1b2c257_400x225.png',
      title: '背包乱斗 v0.9.1 版本更新 ',
      description: '平衡调整',
      date: '2024年3月15日周五',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/666.jpg',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics3.baidu.com%2Ffeed%2F8435e5dde71190ef4507f73c89c65d1bfffa60bb.jpeg%40f_auto%3Ftoken%3Dd9efd48e3ab35628c86d7103becfd790&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1711558800&t=2326a968a89000feae6ff147c263092d',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'https://clan.cloudflare.steamstatic.com/images/44182194/3f73aa495313169cc31e92e9ce2d45deb1b2c257_400x225.png',
      title: '背包乱斗 v0.9.1 版本更新 ',
      description: '平衡调整',
      date: '2024年3月15日周五',
      detail: '特别好玩有趣，背包自走棋，你值得拥有！',
    },
    {
      id: '',
      typeId: '3',
      imageUrl: 'https://clan.akamai.steamstatic.com/images/4437469/c3c6ed62a98c6c0952d9847d40b9cb453ef7c405_400x225.png',
      title: '圣剑归来',
      description: '特别特别特别逗',
      date: '2024年3月18日周五',
      detail: '很少有《Warframe》粉丝会忘记在去年 TennoLive 演示中《Warframe：1999》的惊艳亮相——尤其是我们的第一个原型战甲亚瑟的出现。',
    },
    {
      id: '',
      typeId: '5',
      imageUrl: 'https://clan.akamai.steamstatic.com/images/4437469/d3f472f8f5b1f111b39fdb39d9676fed2b941f25_400x225.png',
      title: 'TennoCon 2024 虚拟礼包',
      description: '你在家享受 TennoCon 2024 体验的最佳方式。',
      date: '2024年3月23日周六',
      detail: 'TennoCon 2024 虚拟礼包是提升你在家享受 TennoCon 2024 体验的最佳方式，可立即为你的军械库添加专属的 TennoCon 物品。今年的礼包以《Warframe：1999》的热潮为主题，带来用于装点你的轨道飞行器的全新展示图和让人想要拥抱的亚瑟玩偶，以及更多精彩内容！',
    },
  ];

  public onClassifierItemClick(item: IClassifierItem) {
    console.log(item);
    this.activeTypeId = item.id;
  }

  public onCardClick(item: IItemCard) {
    console.log(item);
  }

}
