import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent, ClassifierComponent, IClassifierItem, IItemCard, ItemCardComponent } from '@w-monorepo/ui';
import { WarhammerClassifierComponent } from '../../components/warhammer-classifier/warhammer-classifier.component';

@Component({
  selector: 'st-home',
  standalone: true,
  imports: [CommonModule, BannerComponent, ClassifierComponent, ItemCardComponent, WarhammerClassifierComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public activeTypeId = '1';

  public slideImages: string[] = [
    'assets/images/0c2760acd7c801477aa781da72480cc915707b6d.jpg@480w_300h_1c_!web-space-channel-video.webp',
    'assets/images/6fb05224da2445c13604e14e6e12b6761b27b7e7.jpg@480w_300h_1c_!web-space-channel-video.webp',
    'https://img2.baidu.com/it/u=1050575848,3504429509&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1711558800&t=47e2ac62986ebf7d77749a8418a65389',
    'https://clan.cloudflare.steamstatic.com/images/44182194/3f73aa495313169cc31e92e9ce2d45deb1b2c257_400x225.png',
  ];

  public cards: IItemCard[] = [
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/0c2760acd7c801477aa781da72480cc915707b6d.jpg@480w_300h_1c_!web-space-channel-video.webp',
      sourceUrl: 'https://www.bilibili.com/video/BV1bF4m1F7po/?spm_id_from=333.999.0.0',
      title: '库·迦',
      description: '[全面战争·战锤3·半小时玩一个领主] ',
      date: '2024年03月23日 09:30:00',
      detail: '蜥蜴人派系 库·迦 最后守卫者'
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/4cbf1a48a2017751c08a2741a826c96bba595520.jpg@480w_300h_1c_!web-space-channel-video.webp',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '吴彦祖的新作已经好久没有看到了，但一旦他发布照片，总能激起强烈的关注。这一次，吴彦祖在美国晒出了与贾玲的合影，这一举动竟直接引起了网友的震惊。先浏览一下这张经过滤镜处理的吴彦祖和贾玲的合影：一个高大英俊的男士，一个皮肤白皙容貌秀美的女士。'
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/6fb05224da2445c13604e14e6e12b6761b27b7e7.jpg@480w_300h_1c_!web-space-channel-video.webp',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '吴彦祖的新作已经好久没有看到了，但一旦他发布照片，总能激起强烈的关注。这一次，吴彦祖在美国晒出了与贾玲的合影，这一举动竟直接引起了网友的震惊。先浏览一下这张经过滤镜处理的吴彦祖和贾玲的合影：一个高大英俊的男士，一个皮肤白皙容貌秀美的女士。'
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/8a176e9391f113d80352ce3d805c3209abbafd46.jpg@480w_300h_1c_!web-space-channel-video.webp',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '吴彦祖的新作已经好久没有看到了，但一旦他发布照片，总能激起强烈的关注。这一次，吴彦祖在美国晒出了与贾玲的合影，这一举动竟直接引起了网友的震惊。先浏览一下这张经过滤镜处理的吴彦祖和贾玲的合影：一个高大英俊的男士，一个皮肤白皙容貌秀美的女士。'
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/9a1b33a55e5145dd43ca4cc664cdf6b415d14625.jpg@480w_300h_1c_!web-space-channel-video.webp',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '吴彦祖的新作已经好久没有看到了，但一旦他发布照片，总能激起强烈的关注。这一次，吴彦祖在美国晒出了与贾玲的合影，这一举动竟直接引起了网友的震惊。先浏览一下这张经过滤镜处理的吴彦祖和贾玲的合影：一个高大英俊的男士，一个皮肤白皙容貌秀美的女士。'
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/9ecc5066d91818161355233bf127db8ff34783b7.jpg@480w_300h_1c_!web-space-channel-video.webp',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '吴彦祖的新作已经好久没有看到了，但一旦他发布照片，总能激起强烈的关注。这一次，吴彦祖在美国晒出了与贾玲的合影，这一举动竟直接引起了网友的震惊。先浏览一下这张经过滤镜处理的吴彦祖和贾玲的合影：一个高大英俊的男士，一个皮肤白皙容貌秀美的女士。'
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/48af72f9dd0cb3c41fadc9debf8faa876892c92f.jpg@480w_300h_1c_!web-space-channel-video.webp',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '吴彦祖的新作已经好久没有看到了，但一旦他发布照片，总能激起强烈的关注。这一次，吴彦祖在美国晒出了与贾玲的合影，这一举动竟直接引起了网友的震惊。先浏览一下这张经过滤镜处理的吴彦祖和贾玲的合影：一个高大英俊的男士，一个皮肤白皙容貌秀美的女士。'
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/99ce1c7391b57a04958fc28468d0759da1cca6ee.jpg@480w_300h_1c_!web-space-channel-video.webp',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '吴彦祖的新作已经好久没有看到了，但一旦他发布照片，总能激起强烈的关注。这一次，吴彦祖在美国晒出了与贾玲的合影，这一举动竟直接引起了网友的震惊。先浏览一下这张经过滤镜处理的吴彦祖和贾玲的合影：一个高大英俊的男士，一个皮肤白皙容貌秀美的女士。'
    },
    {
      id: '',
      typeId: '1',
      imageUrl: 'assets/images/3907d001db4b19de11416777f1f6d5e1233c7d98.jpg@480w_300h_1c_!web-space-channel-video.webp',
      title: '世莉架after',
      description: '（二）野兽人的生理结构与心理学——『中古战锤种族背景故事』',
      date: '2023-1-10',
      detail: '吴彦祖的新作已经好久没有看到了，但一旦他发布照片，总能激起强烈的关注。这一次，吴彦祖在美国晒出了与贾玲的合影，这一举动竟直接引起了网友的震惊。先浏览一下这张经过滤镜处理的吴彦祖和贾玲的合影：一个高大英俊的男士，一个皮肤白皙容貌秀美的女士。'
    },
  ];

  public onClassifierItemClick(item: IClassifierItem) {
    console.log(item);
    this.activeTypeId = item.id;
  }

  public onCardClick(item: IItemCard) {
    console.log(item);
    if(item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }
}
