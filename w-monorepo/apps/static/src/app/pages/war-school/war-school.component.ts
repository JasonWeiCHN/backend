import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IItemCard, ItemCardComponent } from '@w-monorepo/ui';
import { EArticleTags } from '@w-monorepo/warhammer';

@Component({
  selector: 'st-war-school',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './war-school.component.html',
  styleUrl: './war-school.component.scss'
})
export class WarSchoolComponent {
  public activeTypeId = '';

  public cards: IItemCard[] = [
    {
      'id': '18',
      'typeId': '',
      'imageUrl': 'assets/images/war-school/clks.jpg',
      'title': '【蛋疼】从零开始玩全战，战锤全面战争新手教学',
      'publisher': '小蛋疼君',
      'detail': '玩战锤也有些年头了，一直想做一个系统性的新手教学，让新接触这个游戏的朋友可以更快上手。\n预计篇幅在10-15篇左右，我会定时更新直到完结。\n做这个节目真的很费脑，这款游戏我了解的东西太多，要把一个一个细节整理出来需要花不少时间。。\n如果觉得我的视频能帮助到你，别忘了给我点个赞：）',
      'description': '玩战锤也有些年头了，一直想做一个系统性的新手教学，让新接触这个游戏的朋友可以更快上手。\n预计篇幅在10-15篇左右，我会定时更新直到完结。\n做这个节目真的很费脑，这款游戏我了解的东西太多，要把一个一个细节整理出来需要花不少时间。。\n如果觉得我的视频能帮助到你，别忘了给我点个赞：）',
      'views': 1087000.0,
      'date': '2019-10-11 21:11:07',
      'sourceUrl': 'https://www.bilibili.com/video/BV1fE411o7su/?spm_id_from=333.337.search-card.all.click',
      'tagIds': [
        EArticleTags.NEWER_TEACH
      ]
    },
    {
      'id': '19',
      'typeId': '',
      'imageUrl': 'assets/images/war-school/kjj.jpg',
      'title': '新人必看！战锤3全面战争保姆级快捷键教程',
      'publisher': '奥勒良Aurelianus',
      'detail': '相关游戏：全面战争战锤3\n《全面战争》游戏系列认证作者，欢迎关注',
      'description': '相关游戏：全面战争战锤3\n《全面战争》游戏系列认证作者，欢迎关注',
      'views': 35000.0,
      'date': '2022-02-21 20:00:05',
      'tagIds': [
        EArticleTags.NEWER_TEACH
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV1ob4y1471m/?spm_id_from=333.337.search-card.all.click'
    },
    {
      'id': '20',
      'typeId': '',
      'imageUrl': 'assets/images/war-school/kscq.jpg',
      'title': '【新手教学】新手看完就可以直接打传奇难度？进阶篇，王牌、核心、线，阵【战锤3:全面战争】丨No.2 - 2丨熊与火',
      'publisher': '火与熊的世界',
      'detail': '',
      'description': '',
      'views': 35000.0,
      'date': '2023-05-27 23:05:34',
      'tagIds': [
        EArticleTags.NEWER_TEACH
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV1gP411X7Sq/?spm_id_from=333.337.search-card.all.click'
    },
    {
      'id': '',
      'typeId': '',
      'imageUrl': 'assets/images/war-school/mxxzs.jpg',
      'title': '[全面战争·战锤3·入门攻略] 萌新小知识',
      'publisher': '古老游戏玩家',
      'detail': '1 如何切换游戏难度\n2 快速了解派系的兵种\n3 快速了解魔法\n4 常用战场快捷键\n5 地形说明',
      'description': '1 如何切换游戏难度\n2 快速了解派系的兵种\n3 快速了解魔法\n4 常用战场快捷键\n5 地形说明',
      'views': 1236,
      'date': '2024-04-16 18:20:42',
      'tagIds': [
        EArticleTags.NEWER_TEACH
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV1MH4y1T7LY/?spm_id_from=333.337.search-card.all.click'
    },
    {
      'id': '',
      'typeId': '',
      'imageUrl': 'assets/images/war-school/ksjx.jpg',
      'title': '【全面战争战锤3】远程扛射教学：基础篇',
      'publisher': 'wodwd-不是wdnmd-',
      'detail': '本篇为基础篇，讲了基础操作，布阵，战斗思路等内容\n视频制作不易，希望大家能多多点赞关注，投币收藏\n本期视频投币过千，会尽快更新进阶篇~讲地形利用，各兵种用法，进阶的一些细节~',
      'description': '本篇为基础篇，讲了基础操作，布阵，战斗思路等内容\n视频制作不易，希望大家能多多点赞关注，投币收藏\n本期视频投币过千，会尽快更新进阶篇~讲地形利用，各兵种用法，进阶的一些细节~',
      'views': 59000.0,
      'date': '2024-03-16 11:39:32',
      'tagIds': [
        EArticleTags.NEWER_TEACH
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV1Tx4y1D7TP/?spm_id_from=333.337.search-card.all.click'
    }
  ];

  public onCardClick(item: IItemCard) {
    console.log(item);
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }
}
