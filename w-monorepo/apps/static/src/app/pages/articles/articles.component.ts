import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EList, IItemCard, ListComponent } from '@w-monorepo/ui';
import { EArticleTags, EReferer } from '../../shared/enums/articles.enum';

@Component({
  selector: 'st-articles',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  protected readonly eList = EList;

  public data: IItemCard[] = [
    {
      'id': '',
      'typeId': '',
      'imageUrl': '',
      'title': '【寅子录播】2024年4月27日《全战：战锤3+沙漠大冒险+熔炉密林+看视频》',
      'publisher': '寅子',
      'detail': '相关游戏：《全面战争：战锤3》《沙漠大冒险》《熔炉密林》\n寅子2024年4月27日直播录像\n喜欢的关注、三连走一走~！',
      'description': '相关游戏：《全面战争：战锤3》《沙漠大冒险》《熔炉密林》\n寅子2024年4月27日直播录像\n喜欢的关注、三连走一走~！',
      'views': 8577,
      'date': '2024-04-28 04:27:13',
      'tagIds': [
        EArticleTags.LIVE_RECORDING
      ],
      'referer': EReferer.BILIBILI,
      'sourceUrl': 'https://www.bilibili.com/video/BV14H4y1V7vx/?spm_id_from=333.337.search-card.all.click'
    },
    {
      'id': '',
      'typeId': '',
      'imageUrl': '',
      'title': '【战锤3全战：超凡】腐烂骑士泥头车！',
      'publisher': '武侍建御雷',
      'detail': '新版本的纳垢在腐烂骑士的泥头冲锋下，战斗再无以往的便秘感~~~',
      'description': '新版本的纳垢在腐烂骑士的泥头冲锋下，战斗再无以往的便秘感~~~',
      'views': 2232,
      'date': '2024-04-28 02:58:59',
      'tagIds': [
        EArticleTags.CLIP
      ],
      'referer': EReferer.BILIBILI,
      'sourceUrl': 'https://www.bilibili.com/video/BV1jp421D7TR/?spm_id_from=333.337.search-card.all.click'
    },
    {
      'id': '',
      'typeId': '',
      'imageUrl': '',
      'title': '《全面战争：战锤3》DLC“腐朽王座”宣布4月30日发售',
      'publisher': '3DMGAME',
      'detail': '世嘉官方宣布《全面战争：战锤3》新DLC“腐朽王座”（Thrones of Decay）将于4月30日发售',
      'description': '世嘉官方宣布《全面战争：战锤3》新DLC“腐朽王座”（Thrones of Decay）将于4月30日发售',
      'views': 0,
      'date': '2024-04-19 11:18',
      'tagIds': [
        EArticleTags.NEWS
      ],
      'referer': EReferer.BAI_DU,
      'sourceUrl': 'https://baijiahao.baidu.com/s?id=1796731551639720285&wfr=spider&for=pc'
    },
    {
      'id': '18',
      'typeId': '',
      'imageUrl': '',
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
    }
  ];

  public onListItemClick(item: IItemCard): void {
    console.log(item);
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }
}
