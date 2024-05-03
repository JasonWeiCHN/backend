import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EList, IItemCard, ListComponent } from '@w-monorepo/ui';
import { EArticleTags, EReferer } from '@w-monorepo/warhammer';

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
      'id': '431',
      'typeId': 'articles',
      'imageUrl': '',
      'title': '《全面战争战锤3》5.0版本单位一览！！！',
      'publisher': '奈何桃儿',
      'detail': '游戏推荐：',
      'description': '游戏推荐：',
      'views': 2278,
      'date': '2024-05-01 22:07:37',
      'tagIds': [
        'clip'
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV1AZ421n78g',
      'referer': null
    },
    {
      'id': '417',
      'typeId': 'articles',
      'imageUrl': '',
      'title': '【战锤3全面战争】帝国紫晶铁甲军对战混沌矮人宽刃火枪，顶级火枪之间的较量，谁能笑到最后?',
      'publisher': '网友花顺猪',
      'detail': '',
      'description': '',
      'views': 149,
      'date': '2024-05-01 13:04:03',
      'tagIds': [
        'clip'
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV1Fp421D7vp/?spm_id_from=333.337.search-card.all.click',
      'referer': null
    },
    {
      'id': '418',
      'typeId': 'articles',
      'imageUrl': '',
      'title': '“沉浸式吸蛆！”【战锤3腐烂王座】塔木尔可汗 本体与战斗动作展示',
      'publisher': '还未阳',
      'detail': '1.蛆虫领主盛宴这个技能如果可汗身边有多个单体，默认吸血最高血量的',
      'description': '1.蛆虫领主盛宴这个技能如果可汗身边有多个单体，默认吸血最高血量的',
      'views': 466,
      'date': '2024-05-01 10:21:56',
      'tagIds': [
        'clip'
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV1Mw4m1C7hv/?spm_id_from=333.337.search-card.all.click',
      'referer': null
    },
    {
      'id': '419',
      'typeId': 'articles',
      'imageUrl': '',
      'title': '战锤3腐烂王座DLC努恩墓园玫瑰开场动画',
      'publisher': '西极-监兵',
      'detail': '',
      'description': '',
      'views': 157,
      'date': '2024-04-30 22:58:43',
      'tagIds': [
        'clip'
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV1BM4m1f7yp/?spm_id_from=333.337.search-card.all.click',
      'referer': null
    },
    {
      'id': '416',
      'typeId': 'articles',
      'imageUrl': '',
      'title': '腐烂王座的存档拯救？ 什么叫矮人直升机啊！',
      'publisher': '明曦xmD',
      'detail': '新版本的矮人直升机战役招募来到了2本，模组数量从4架到了12架，变脆了，但输出明显的提升！',
      'description': '新版本的矮人直升机战役招募来到了2本，模组数量从4架到了12架，变脆了，但输出明显的提升！',
      'views': 6274,
      'date': '2024-04-30 15:44:37',
      'tagIds': [
        'news'
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV1UD421T7zZ/?spm_id_from=333.1007.tianma.4-4-14.click',
      'referer': null
    },
    {
      'id': '410',
      'typeId': 'Warherd_of_the_Shadowgave',
      'imageUrl': '',
      'title': '9.5分 《战锤3全面战争》DLC「腐烂王座」评测：知耻而后勇！',
      'publisher': '明曦xmD',
      'detail': '战锤3全面战争DLC 腐烂王座Throne of Decay 即将于4月30日晚10点正式上线。',
      'description': '战锤3全面战争DLC 腐烂王座Throne of Decay 即将于4月30日晚10点正式上线。',
      'views': 22000,
      'date': '2024-04-29 22:01:16',
      'tagIds': [
        'news'
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV19m421p7fi/?spm_id_from=333.337.search-card.all.click',
      'referer': null
    },
    {
      'id': '411',
      'typeId': 'articles',
      'imageUrl': '',
      'title': '【战锤3全战】- 腐烂王座 - 5.0更新日志前瞻 CA诚意满满 请问您准备好入库了嘛？ 开启传奇的战争之旅。',
      'publisher': '温酱与夏凉丶',
      'detail': '个人觉得这次CA的诚意绝对是够得 最后我们还不知道的就是定价如何。 但是我也担心如果新派系强度太高，整体上调的过于快餐化。 其实也有可能会让玩家觉得玩起来无聊， 毕竟策略游戏稍微有些深入才能让人觉得更有乐趣。',
      'description': '个人觉得这次CA的诚意绝对是够得 最后我们还不知道的就是定价如何。 但是我也担心如果新派系强度太高，整体上调的过于快餐化。 其实也有可能会让玩家觉得玩起来无聊， 毕竟策略游戏稍微有些深入才能让人觉得更有乐趣。',
      'views': 4750,
      'date': '2024-04-30 02:52:54',
      'tagIds': [
        'news'
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV1ME421j7ML/?spm_id_from=333.337.search-card.all.click',
      'referer': null
    },
    {
      'id': '412',
      'typeId': 'articles',
      'imageUrl': '',
      'title': '【寅子录播】2024年4月29日《全战：战锤3》',
      'publisher': '寅子',
      'detail': '相关游戏：《全面战争：战锤3》',
      'description': '相关游戏：《全面战争：战锤3》',
      'views': 2015,
      'date': '2024-04-30 10:25:18',
      'tagIds': [
        'liveRecording'
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV19D421N7NA/?spm_id_from=333.337.search-card.all.click',
      'referer': null
    },
    {
      'id': '413',
      'typeId': 'articles',
      'imageUrl': '',
      'title': '【战锤3全战：超凡】5.0内测纳垢-塔木尔可汗传奇SA#3',
      'publisher': '武侍建御雷',
      'detail': '次英杰建议选择混矮酋长，其解锁的雷铳手可以大幅提升副编的战斗力，尤其是在对抗食人魔时。',
      'description': '次英杰建议选择混矮酋长，其解锁的雷铳手可以大幅提升副编的战斗力，尤其是在对抗食人魔时。',
      'views': 1145,
      'date': '2024-04-30 08:22:05',
      'tagIds': [
        'news'
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV1hf421S71n/?spm_id_from=333.337.search-card.all.click',
      'referer': null
    },
    {
      'id': '414',
      'typeId': 'articles',
      'imageUrl': '',
      'title': '【战锤3全战】- 腐烂王座 - 5.0更新日志前瞻 CA诚意满满 请问您准备好入库了嘛？ 开启传奇的战争之旅。',
      'publisher': '温酱与夏凉丶',
      'detail': '个人觉得这次CA的诚意绝对是够得 最后我们还不知道的就是定价如何。 但是我也担心如果新派系强度太高，整体上调的过于快餐化。 其实也有可能会让玩家觉得玩起来无聊， 毕竟策略游戏稍微有些深入才能让人觉得更有乐趣。',
      'description': '个人觉得这次CA的诚意绝对是够得 最后我们还不知道的就是定价如何。 但是我也担心如果新派系强度太高，整体上调的过于快餐化。 其实也有可能会让玩家觉得玩起来无聊， 毕竟策略游戏稍微有些深入才能让人觉得更有乐趣。',
      'views': 4764,
      'date': '2024-04-30 02:52:54',
      'tagIds': [
        'news'
      ],
      'sourceUrl': 'https://www.bilibili.com/video/BV1ME421j7ML/?spm_id_from=333.337.search-card.all.click',
      'referer': null
    },
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
