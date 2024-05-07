import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EList, IItemCard, ListComponent } from '@w-monorepo/ui';
import { EArticleTags, EReferer } from '@w-monorepo/warhammer';

@Component({
  selector: 'st-mods',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './mods.component.html',
  styleUrl: './mods.component.scss'
})
export class ModsComponent {
  protected readonly eList = EList;

  public newMods: IItemCard[] = [
    {
      'id': '442',
      'typeId': 'mods',
      'imageUrl': '',
      'sourceUrl': 'https://www.bilibili.com/video/BV1GE421V7wH',
      'title': '战锤3MOD推荐 墓园玫瑰埃斯佩斯“美化”',
      'views': 8368,
      'description': '一共七个墓园玫瑰的美化，合集链接：https://steamcommunity.com/workshop/filedetails/?id=3239918889',
      'publisher': '明曦xmD & _Alvaro_',
      'date': '2024-05-05 21:30:00',
      'tagIds': [
        'mods'
      ],
      'referer': null,
      'detail': '一共七个墓园玫瑰的美化，合集链接：https://steamcommunity.com/workshop/filedetails/?id=3239918889'
    },
    {
      'id': '433',
      'typeId': 'mods',
      'imageUrl': '',
      'title': '战锤3MOD推荐 玫瑰美化/基础必用更新/感染BUG修复',
      'publisher': '明曦xmD',
      'detail': '腐烂王座刚更新没多久，各路MOD大佬就发力了，创作了许多实用的MOD',
      'description': '腐烂王座刚更新没多久，各路MOD大佬就发力了，创作了许多实用的MOD',
      'views': 8338,
      'date': '2024-05-02 11:05:04',
      'tagIds': [
        'mods'
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV1Lw4m1C7bu',
      'referer': null
    }
  ];

  public modCollection: IItemCard[] = [
    {
      'id': '',
      'typeId': '',
      'imageUrl': '',
      'title': '[嘉维尔丛林之魂] 合集·战锤mod',
      'publisher': '嘉维尔丛林之魂',
      'detail': '近400个战锤mod，一次选个够',
      'description': '近400个战锤mod，一次选个够',
      'views': 0,
      'date': '2024-04-25',
      'tagIds': [
        EArticleTags.MODS
      ],
      'referer': EReferer.BILIBILI,
      'sourceUrl': 'https://space.bilibili.com/1313675621/channel/collectiondetail?sid=1199948'
    },
    {
      'id': '',
      'typeId': '',
      'imageUrl': '',
      'title': '[阿斯塔特修会] 合集·战锤3R大Mod',
      'publisher': '阿斯塔特修会',
      'detail': '29个Mod视频',
      'description': '29个Mod视频',
      'views': 0,
      'date': '2024-04-29',
      'tagIds': [
        EArticleTags.MODS
      ],
      'referer': EReferer.BILIBILI,
      'sourceUrl': 'https://space.bilibili.com/20714613/channel/collectiondetail?sid=965379'
    },
    {
      'id': '',
      'typeId': '',
      'imageUrl': '',
      'title': '[夏墨tactics] 锤3 Mods 推荐',
      'publisher': '夏墨tactics',
      'detail': '看空间合集',
      'description': '看空间合集',
      'views': 0,
      'date': '2024-04-29',
      'tagIds': [
        EArticleTags.MODS
      ],
      'referer': EReferer.BILIBILI,
      'sourceUrl': 'https://space.bilibili.com/35933059?spm_id_from=333.337.0.0'
    },
    {
      'id': '',
      'typeId': '',
      'imageUrl': '',
      'title': '[明曦xmD] 合集·战锤3MOD必看',
      'publisher': '明曦xmD',
      'detail': '2个必看Mod视频',
      'description': '2个必看Mod视频',
      'views': 0,
      'date': '2023-10-12',
      'tagIds': [
        EArticleTags.MODS
      ],
      'referer': EReferer.BILIBILI,
      'sourceUrl': 'https://space.bilibili.com/259524914/channel/collectiondetail?sid=2028116'
    },
    {
      'id': '',
      'typeId': '',
      'imageUrl': '',
      'title': '[明曦xmD] 合集·战锤3派系MOD',
      'publisher': '明曦xmD',
      'detail': '3个派系Mod视频',
      'description': '2个必看Mod视频',
      'views': 0,
      'date': '2024-01-09',
      'tagIds': [
        EArticleTags.MODS
      ],
      'referer': EReferer.BILIBILI,
      'sourceUrl': 'https://space.bilibili.com/259524914/channel/collectiondetail?sid=2040151'
    },
    {
      'id': '',
      'typeId': '',
      'imageUrl': '',
      'title': '[明曦xmD] 合集·战锤年度MOD颁奖',
      'publisher': '明曦xmD',
      'detail': 'Mod颁奖视频',
      'description': 'Mod颁奖视频',
      'views': 0,
      'date': '2023-12-28',
      'tagIds': [
        EArticleTags.MODS
      ],
      'referer': EReferer.BILIBILI,
      'sourceUrl': 'https://space.bilibili.com/259524914/channel/collectiondetail?sid=2084926'
    },
    {
      'id': '',
      'typeId': '',
      'imageUrl': '',
      'title': '[wodwd-不是wdnmd-] 合集·MOD推荐与攻略！',
      'publisher': 'wodwd-不是wdnmd-',
      'detail': '4个精选战锤mod',
      'description': '4精选战锤mod',
      'views': 0,
      'date': '2024-03-27',
      'tagIds': [
        EArticleTags.MODS
      ],
      'referer': EReferer.BILIBILI,
      'sourceUrl': 'https://space.bilibili.com/324051633/channel/collectiondetail?sid=2128824'
    },
    {
      'id': '',
      'typeId': '',
      'imageUrl': '',
      'title': '[奥勒良Aurelianus] 合集·战锤3Mod介绍',
      'publisher': '奥勒良Aurelianus',
      'detail': '40多个精选战锤mod',
      'description': '40多个精选战锤mod',
      'views': 0,
      'date': '2023-06-23',
      'tagIds': [
        EArticleTags.MODS
      ],
      'referer': EReferer.BILIBILI,
      'sourceUrl': 'https://space.bilibili.com/9968225/channel/collectiondetail?sid=668346'
    },
    {
      'id': '',
      'typeId': '',
      'imageUrl': '',
      'title': '全面战争：战锤3MOD工具及下载地址',
      'publisher': '金花家族',
      'detail': '以下是制作MOD需要用到的工具插件及下载地址',
      'description': '以下是制作MOD需要用到的工具插件及下载地址',
      'views': 1411,
      'date': '2022年10月25日 13:48',
      'tagIds': [
        EArticleTags.MODS
      ],
      'referer': EReferer.BILIBILI,
      'sourceUrl': 'https://www.bilibili.com/read/cv19304826/?spm_id_from=333.999.0.0'
    }
  ];

  public onListItemClick(item: IItemCard): void {
    console.log(item);
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }
}
