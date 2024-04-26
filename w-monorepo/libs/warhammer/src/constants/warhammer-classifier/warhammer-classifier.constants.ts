import {
  IWarhammerClassifier,
  IWarhammerClassifierMap
} from '../../interfaces/warhammer-classifier/warhammer-classifier.interface';

export const WARHAMMER_CLASSIFIERS: IWarhammerClassifier[] = [
  {
    'id': 'Beastmen',
    'directory': 'Beastmen',
    'nameCN': '野兽人',
    'files': [
      {
        'id': 'Warherd_of_the_One_Eye',
        'name': 'Warherd_of_the_One-Eye',
        'nameCN': '独眼战兽群',
        'heroName': '卡扎克·独眼',
        'heroAvatarPath': 'assets/images/lords/beastmen-khazrak-the-one-eye.png',
        'description': '卡扎克是帝国北部森林的梦魇，他将再次令血域遍及邓肯瓦尔德',
        'path': 'assets/images/icons/Beastmen/Warherd_of_the_One-Eye.png'
      },
      {
        'id': 'Harbinger_of_Disaster',
        'name': 'Harbinger_of_Disaster',
        'nameCN': '灾厄先驱',
        'heroName': '马拉戈·黑暗征兆',
        'heroAvatarPath': 'assets/images/lords/beastmen-malagor-the-dark-omen.png',
        'path': 'assets/images/icons/Beastmen/Harbinger_of_Disaster.png'
      },
      {
        'id': 'Warherd_of_the_Shadowgave',
        'name': 'Warherd_of_the_Shadowgave',
        'nameCN': '影孽战兽群',
        'heroName': '魔古尔·影孽',
        'heroAvatarPath': 'assets/images/lords/beastmen-morghur-the-shadowgave.png',
        'path': 'assets/images/icons/Beastmen/Warherd_of_the_Shadowgave.png'
      },
      {
        'id': 'Slaughterhorn_Tribe',
        'name': 'Slaughterhorn_Tribe',
        'nameCN': '屠灭之角部落',
        'heroName': '陶诺斯·铜牛',
        'heroAvatarPath': 'assets/images/lords/beastmen-taurox-the-brass-bull.png',
        'path': 'assets/images/icons/Beastmen/Slaughterhorn_Tribe.png'
      }
    ]
  },
  {
    'id': 'Bretonnia',
    'directory': 'Bretonnia',
    'nameCN': '巴托尼亚',
    'files': [
      {
        'id': 'Couronne',
        'name': 'Couronne',
        'nameCN': '哥隆尼',
        'heroName': '劳恩·列奥康沃尔',
        'heroAvatarPath': 'assets/images/lords/bretonnia-louen-leoncoeur.png',
        'path': 'assets/images/icons/Bretonnia/Couronne.png'
      },
      {
        'id': 'Bordeleaux_Errant',
        'name': 'Bordeleaux_Errant',
        'nameCN': '波尔德洛长征军',
        'heroName': '艾博里克·德·波尔德罗',
        'heroAvatarPath': 'assets/images/lords/bretonnia-alberic-de-bordeleaux.png',
        'path': 'assets/images/icons/Bretonnia/Bordeleaux_Errant.png'
      },
      {
        'id': 'Carcassonne',
        'name': 'Carcassonne',
        'nameCN': '卡尔卡松',
        'heroName': '湖神仙女',
        'heroAvatarPath': 'assets/images/lords/bretonnia-fay-enchantress.png',
        'path': 'assets/images/icons/Bretonnia/Carcassonne.png'
      },
      {
        'id': 'Chevaliers_de_Lyonesse',
        'name': 'Chevaliers_de_Lyonesse',
        'nameCN': '里昂尼斯骑士战团',
        'heroName': '赫潘丝·德·里昂尼斯',
        'heroAvatarPath': 'assets/images/lords/bretonnia-repanse-de-lyonesse.png',
        'path': 'assets/images/icons/Bretonnia/Chevaliers_de_Lyonesse.png'
      }
    ]
  },
  {
    'id': 'Chaos_Dwarfs',
    'directory': 'Chaos Dwarfs',
    'nameCN': '混沌矮人',
    'files': [
      {
        'id': 'Disciples_of_Hashut',
        'name': 'Disciples_of_Hashut',
        'nameCN': '哈苏特信徒',
        'heroName': '阿斯特戈斯·铁手',
        'heroAvatarPath': 'assets/images/lords/chaos-dwarves-astragoth-ironhand.png',
        'path': 'assets/images/icons/Chaos Dwarfs/Disciples_of_Hashut.png'
      },
      {
        'id': 'The_Legion_of_Azgorh',
        'name': 'The_Legion_of_Azgorh',
        'nameCN': '阿佐格军团',
        'heroName': '灰烬·德拉兹霍斯',
        'heroAvatarPath': 'assets/images/lords/chaos-dwarves-drazhoath-the-ashen.png',
        'path': 'assets/images/icons/Chaos Dwarfs/The_Legion_of_Azgorh.png'
      },
      {
        'id': 'The_Warhost_of_Zharr',
        'name': 'The_Warhost_of_Zharr',
        'nameCN': '扎尔战团',
        'heroName': '黑心·扎坦',
        'heroAvatarPath': 'assets/images/lords/chaos-dwarves-zhatan-the-black.png',
        'path': 'assets/images/icons/Chaos Dwarfs/The_Warhost_of_Zharr.png'
      }
    ]
  },
  {
    'id': 'Daemons_of_Chaos',
    'directory': 'Daemons of Chaos',
    'nameCN': '混沌恶魔',
    'files': [
      {
        'id': 'Legion_of_Chaos',
        'name': 'Legion_of_Chaos',
        'nameCN': '混沌大军',
        'heroName': '恶魔亲王',
        'heroAvatarPath': 'assets/images/lords/legion-of-chaos-daemon-prince.png',
        'path': 'assets/images/icons/Daemons of Chaos/Legion_of_Chaos.png'
      }
    ]
  },
  {
    'id': 'Dark_Elves',
    'directory': 'Dark Elves',
    'nameCN': '黑暗精灵',
    'files': [
      {
        'id': 'Naggarond',
        'name': 'Naggarond',
        'nameCN': '纳迦隆德',
        'heroName': '马雷基斯',
        'heroAvatarPath': 'assets/images/lords/dark-elves-malekith.png',
        'path': 'assets/images/icons/Dark Elves/Naggarond.png'
      },
      {
        'id': 'Cult_of_Pleasure',
        'name': 'Cult_of_Pleasure',
        'nameCN': '欢愉教派',
        'heroName': '莫拉丝',
        'heroAvatarPath': 'assets/images/lords/dark-elves-morathi.png',
        'path': 'assets/images/icons/Dark Elves/Cult_of_Pleasure.png'
      },
      {
        'id': 'Har_Ganeth',
        'name': 'Har_Ganeth',
        'nameCN': '哈尔·冈西',
        'heroName': '妖婆赫莉本',
        'heroAvatarPath': 'assets/images/lords/dark-elves-crone-hellebron.png',
        'path': 'assets/images/icons/Dark Elves/Har_Ganeth.png'
      },
      {
        'id': 'The_Blessed_Dread',
        'name': 'The_Blessed_Dread',
        'nameCN': '神佑恶党',
        'heroName': '洛克西亚·堕落之心',
        'heroAvatarPath': 'assets/images/lords/dark-elves-lokhir-fellheart.png',
        'path': 'assets/images/icons/Dark Elves/The_Blessed_Dread.png'
      },
      {
        'id': 'Hag_Graef',
        'name': 'Hag_Graef',
        'nameCN': '海格·葛雷夫',
        'heroName': '马鲁斯·黑刃',
        'heroAvatarPath': 'assets/images/lords/dark-elves-malus-darkblade.png',
        'path': 'assets/images/icons/Dark Elves/Hag_Graef.png'
      },
      {
        'id': 'The_Thousand_Maws',
        'name': 'The_Thousand_Maws',
        'nameCN': '千噬',
        'heroName': '拉卡斯',
        'heroAvatarPath': 'assets/images/lords/dark-elves-rakarth.png',
        'path': 'assets/images/icons/Dark Elves/The_Thousand_Maws.png'
      }
    ]
  },
  {
    'id': 'Dwarfs',
    'directory': 'Dwarfs',
    'nameCN': '矮人',
    'files': [
      {
        'id': 'Karaz_a_Karak',
        'name': 'Karaz-a-Karak',
        'nameCN': '卡拉扎-阿-卡拉克',
        'heroName': '索尔葛林·负怨者',
        'heroAvatarPath': 'assets/images/lords/dwarves-thorgrim-grudgebearer.png',
        'path': 'assets/images/icons/Dwarfs/Karaz-a-Karak.png'
      },
      {
        'id': 'Karak_Kadrin',
        'name': 'Karak_Kadrin',
        'nameCN': '卡拉克·卡德林',
        'heroName': '阿格里姆·铁拳',
        'heroAvatarPath': 'assets/images/lords/dwarves-ungrim-ironfist.png',
        'path': 'assets/images/icons/Dwarfs/Karak_Kadrin.png'
      },
      {
        'id': 'Clan_Angrund',
        'name': 'Clan_Angrund',
        'nameCN': '安格朗德氏族',
        'heroName': '贝勒加·铁锤',
        'heroAvatarPath': 'assets/images/lords/dwarves-belegar-ironhammer.png',
        'path': 'assets/images/icons/Dwarfs/Clan_Angrund.png'
      },
      {
        'id': 'The_Ancestral_Throng',
        'name': 'The_Ancestral_Throng',
        'nameCN': '先祖之军',
        'heroName': '白矮人·格瑞姆布林戴尔',
        'heroAvatarPath': 'assets/images/lords/dwarves-grombrindal-the-white-dwarf.png',
        'path': 'assets/images/icons/Dwarfs/The_Ancestral_Throng.png'
      },
      {
        'id': 'Ironbrows_Expedition',
        'name': 'Ironbrows_Expedition',
        'nameCN': '铁眉远征军',
        'heroName': '托雷克·铁眉',
        'heroAvatarPath': 'assets/images/lords/dwarves-thorek-ironbrow.png',
        'path': 'assets/images/icons/Dwarfs/The_Ancestral_Throng.png'
      }
    ]
  },
  {
    'id': 'The_Empire',
    'directory': 'The Empire',
    'nameCN': '帝国',
    'files': [
      {
        'id': 'Reikland',
        'name': 'Reikland',
        'nameCN': '瑞克领',
        'heroName': '皇帝·卡尔·弗兰茨',
        'heroAvatarPath': 'assets/images/lords/empire-karl-franz.png',
        'path': 'assets/images/icons/The Empire/Reikland.png'
      },
      {
        'id': 'The_Golden_Order',
        'name': 'The_Golden_Order',
        'nameCN': '黄金学院',
        'heroName': '拜尔沙泽·盖尔特',
        'heroAvatarPath': 'assets/images/lords/empire-balthasar-gelt.png',
        'path': 'assets/images/icons/The Empire/The_Golden_Order.png'
      },
      {
        'id': 'The_Huntsmarshals_Expedition',
        'name': 'The_Huntsmarshals_Expedition',
        'nameCN': '猎人元帅远征军',
        'heroName': '马库斯·沃法特',
        'heroAvatarPath': 'assets/images/lords/empire-markus-wulfhart.png',
        'path': 'assets/images/icons/The Empire/The_Huntsmarshals_Expedition.png'
      },
      {
        'id': 'Cult_of_Sigmar',
        'name': 'Cult_of_Sigmar',
        'nameCN': '西格玛教会',
        'heroName': '沃克玛·无情者',
        'heroAvatarPath': 'assets/images/lords/empire-volkmar-the-grim.png',
        'path': 'assets/images/icons/The Empire/Cult_of_Sigmar.png'
      }
    ]
  },
  {
    'id': 'Grand_Cathay',
    'directory': 'Grand Cathay',
    'nameCN': '震旦天朝',
    'files': [
      {
        'id': 'The_Northern_Provinces',
        'name': 'The_Northern_Provinces',
        'nameCN': '卫北列省',
        'heroName': '飙龙·妙影',
        'heroAvatarPath': 'assets/images/lords/grand-cathay-miao-ying.png',
        'path': 'assets/images/icons/Grand Cathay/The_Northern_Provinces.png'
      },
      {
        'id': 'The_Western_Provinces',
        'name': 'The_Western_Provinces',
        'nameCN': '卫西列省',
        'heroName': '镔龙·昭明',
        'heroAvatarPath': 'assets/images/lords/grand-cathay-zhao-ming.png',
        'path': 'assets/images/icons/Grand Cathay/The_Western_Provinces.png'
      },
      {
        'id': 'The_Jade_Court',
        'name': 'The_Jade_Court',
        'nameCN': '玉廷',
        'heroName': '玉龙·元伯',
        'heroAvatarPath': 'assets/images/lords/grand-cathay-yuan-bo.png',
        'path': 'assets/images/icons/Grand Cathay/The_Jade_Court.png'
      }
    ]
  },
  {
    'id': 'Greenskins',
    'directory': 'Greenskins',
    'nameCN': '绿皮',
    'files': [
      {
        'id': 'Grimgors_Ardboyz',
        'name': 'Grimgors_Ardboyz',
        'nameCN': '格里姆格的狠小子',
        'heroName': '格里姆格·铁皮',
        'heroAvatarPath': 'assets/images/lords/greenskins-grimgor-ironhide.png',
        'path': 'assets/images/icons/Greenskins/Grimgors_Ardboyz.png'
      },
      {
        'id': 'Bonerattlaz',
        'name': 'Bonerattlaz',
        'nameCN': '响骨',
        'heroName': '阿兹汗·屠灭者',
        'heroAvatarPath': 'assets/images/lords/greenskins-azhag-the-slaughterer.png',
        'path': 'assets/images/icons/Greenskins/Bonerattlaz.png'
      },
      {
        'id': 'Crooked_Moon',
        'name': 'Crooked_Moon',
        'nameCN': '邪月',
        'heroName': '史卡斯尼克',
        'heroAvatarPath': 'assets/images/lords/greenskins-skarsnik.png',
        'path': 'assets/images/icons/Greenskins/Crooked_Moon.png'
      },
      {
        'id': 'The_Bloody_Handz',
        'name': 'The_Bloody_Handz',
        'nameCN': '血手',
        'heroName': '乌尔扎戈·绿先知',
        'heroAvatarPath': 'assets/images/lords/greenskins-wurrzag-da-great-green-prophet.png',
        'path': 'assets/images/icons/Greenskins/The_Bloody_Handz.png'
      },
      {
        'id': 'Broken_Axe',
        'name': 'Broken_Axe',
        'nameCN': '碎斧',
        'heroName': '大肚王·咕噜',
        'heroAvatarPath': 'assets/images/lords/greenskins-grom-the-paunch.png',
        'path': 'assets/images/icons/Greenskins/Broken_Axe.png'
      }
    ]
  },
  {
    'id': 'High_Elves',
    'directory': 'High Elves',
    'nameCN': '高等精灵',
    'files': [
      {
        'id': 'Eataine',
        'name': 'Eataine',
        'nameCN': '伊泰恩',
        'heroName': '泰瑞昂',
        'heroAvatarPath': 'assets/images/lords/high-elves-tyrion.png',
        'path': 'assets/images/icons/High Elves/Eataine.png'
      },
      {
        'id': 'Order_of_Loremasters',
        'name': 'Order_of_Loremasters',
        'nameCN': '魔剑士议会',
        'heroName': '泰格里斯',
        'heroAvatarPath': 'assets/images/lords/high-elves-teclis.png',
        'path': 'assets/images/icons/High Elves/Order_of_Loremasters.png'
      },
      {
        'id': 'Avelorn',
        'name': 'Avelorn',
        'nameCN': '阿瓦隆',
        'heroName': '艾拉瑞丽',
        'heroAvatarPath': 'assets/images/lords/high-elves-alarielle-the-radiant.png',
        'path': 'assets/images/icons/High Elves/Avelorn.png'
      },
      {
        'id': 'Nagarythe',
        'name': 'Nagarythe',
        'nameCN': '纳迦瑞斯',
        'heroName': '阿里斯·安纳尔',
        'heroAvatarPath': 'assets/images/lords/high-elves-alith-anar.png',
        'path': 'assets/images/icons/High Elves/Nagarythe.png'
      },
      {
        'id': 'Yvresse',
        'name': 'Yvresse',
        'nameCN': '伊瑞斯',
        'heroName': '艾萨里昂·无情者',
        'heroAvatarPath': 'assets/images/lords/high-elves-eltharion.png',
        'path': 'assets/images/icons/High Elves/Yvresse.png'
      },
      {
        'id': 'Knights_of_Caledor',
        'name': 'Knights_of_Caledor',
        'nameCN': '卡勒多骑士',
        'heroName': '伊姆瑞克',
        'heroAvatarPath': 'assets/images/lords/high-elves-imrik.png',
        'path': 'assets/images/icons/High Elves/Knights_of_Caledor.png'
      }
    ]
  },
  {
    'id': 'Khorne',
    'directory': 'Khorne',
    'nameCN': '恐虐',
    'files': [
      {
        'id': 'Exiles_of_Khorne',
        'name': 'Exiles_of_Khorne',
        'nameCN': '恐虐流放者',
        'heroName': '流放者·斯卡布兰德',
        'heroAvatarPath': 'assets/images/lords/khorne-skarbrand-the-exiled.png',
        'path': 'assets/images/icons/Khorne/Exiles_of_Khorne.png'
      }
    ]
  },
  {
    'id': 'Kislev',
    'directory': 'Kislev',
    'nameCN': '基斯里夫',
    'files': [
      {
        'id': 'The_Ice_Court',
        'name': 'The_Ice_Court',
        'nameCN': '冰雪王廷',
        'heroName': '女沙皇卡捷琳',
        'heroAvatarPath': 'assets/images/lords/kislev-tzarina-katarin.png',
        'path': 'assets/images/icons/Kislev/The_Ice_Court.png'
      },
      {
        'id': 'The_Great_Orthodoxy',
        'name': 'The_Great_Orthodoxy',
        'nameCN': '大正教会',
        'heroName': '康斯坦丁',
        'heroAvatarPath': 'assets/images/lords/kislev-kostaltyn.png',
        'path': 'assets/images/icons/Kislev/The_Great_Orthodoxy.png'
      },
      {
        'id': 'Ursun_Revivalists',
        'name': 'Ursun_Revivalists',
        'nameCN': '厄孙复兴者',
        'heroName': '鲍里斯·厄孙',
        'heroAvatarPath': 'assets/images/lords/kislev-boris-ursus.png',
        'path': 'assets/images/icons/Kislev/Ursun_Revivalists.png'
      },
      {
        'id': 'Daughters_of_the_Forest',
        'name': 'Daughters_of_the_Forest',
        'nameCN': '森林之女',
        'heroName': '奥斯坦基娅嬷嬷',
        'heroAvatarPath': 'assets/images/lords/kislev-mother-ostankya.png',
        'path': 'assets/images/icons/Kislev/Daughters_of_the_Forest.png'
      }
    ]
  },
  {
    'id': 'Lizardmen',
    'directory': 'Lizardmen',
    'nameCN': '蜥蜴人',
    'files': [
      {
        'id': 'Hexoatl',
        'name': 'Hexoatl',
        'nameCN': '赫斯欧塔',
        'heroName': '领主·马兹达穆迪',
        'heroAvatarPath': 'assets/images/lords/lizardmen-lord-mazdamundi.png',
        'path': 'assets/images/icons/Lizardmen/Hexoatl.png'
      },
      {
        'id': 'Last_Defenders',
        'name': 'Last_Defenders',
        'nameCN': '最后守卫者',
        'heroName': '库·迦',
        'heroAvatarPath': 'assets/images/lords/lizardmen-kroq-gar.png',
        'path': 'assets/images/icons/Lizardmen/Last_Defenders.png'
      },
      {
        'id': 'Cult_of_Sotek',
        'name': 'Cult_of_Sotek',
        'nameCN': '索提戈教派',
        'heroName': '特亨霍因',
        'heroAvatarPath': 'assets/images/lords/lizardmen-tehenhauin.png',
        'path': 'assets/images/icons/Lizardmen/Cult_of_Sotek.png'
      },
      {
        'id': 'Tlaqua',
        'name': 'Tlaqua',
        'nameCN': '塔拉夸',
        'heroName': '提克塔托',
        'heroAvatarPath': 'assets/images/lords/lizardmen-tiktaqto.png',
        'path': 'assets/images/icons/Lizardmen/Tlaqua.png'
      },
      {
        'id': 'Itza',
        'name': 'Itza',
        'nameCN': '伊塔扎',
        'heroName': '哥罗克',
        'heroAvatarPath': 'assets/images/lords/lizardmen-gor-rok.png',
        'path': 'assets/images/icons/Lizardmen/Itza.png'
      },
      {
        'id': 'Spirit_of_the_Jungle',
        'name': 'Spirit_of_the_Jungle',
        'nameCN': '丛林精魂',
        'heroName': '流放者·纳卡伊',
        'heroAvatarPath': 'assets/images/lords/lizardmen-nakai-the-wanderer.png',
        'path': 'assets/images/icons/Lizardmen/Spirit_of_the_Jungle.png'
      },
      {
        'id': 'Ghosts_of_Pahuax',
        'name': 'Ghosts_of_Pahuax',
        'nameCN': '帕花科斯幽灵',
        'heroName': '欧西约坦',
        'heroAvatarPath': 'assets/images/lords/lizardmen-oxyotl.png',
        'path': 'assets/images/icons/Lizardmen/Ghosts_of_Pahuax.png'
      }
    ]
  },
  {
    'id': 'Norsca',
    'directory': 'Norsca',
    'nameCN': '诺斯卡',
    'files': [
      {
        'id': 'World_Walkers',
        'name': 'World_Walkers',
        'nameCN': '世界行者',
        'heroName': '乌弗瑞克·流浪者',
        'heroAvatarPath': 'assets/images/lords/norsca-wulfrik-the-wanderer.png',
        'path': 'assets/images/icons/Norsca/World_Walkers.png'
      },
      {
        'id': 'Wintertooth',
        'name': 'Wintertooth',
        'nameCN': '冬牙',
        'heroName': '索隆格',
        'heroAvatarPath': 'assets/images/lords/norsca-throgg.png',
        'path': 'assets/images/icons/Norsca/Wintertooth.png'
      }
    ]
  },
  {
    'id': 'Nurgle',
    'directory': 'Nurgle',
    'nameCN': '纳垢',
    'files': [
      {
        'id': 'Poxmakers_of_Nurgle',
        'name': 'Poxmakers_of_Nurgle',
        'nameCN': '纳垢驭疹官',
        'heroName': '库嘎斯·瘟父',
        'heroAvatarPath': 'assets/images/lords/nurgle-kugath-plaguefather.png',
        'path': 'assets/images/icons/Nurgle/Poxmakers_of_Nurgle.png'
      }
    ]
  },
  {
    'id': 'Ogre_Kingdoms',
    'directory': 'Ogre Kingdoms',
    'nameCN': '食人魔王国',
    'files': [
      {
        'id': 'Goldtooth',
        'name': 'Goldtooth',
        'nameCN': '金牙',
        'heroName': '格雷苏·大金牙',
        'heroAvatarPath': 'assets/images/lords/ogre-kingdoms-greasus-goldtooth.png',
        'path': 'assets/images/icons/Ogre Kingdoms/Goldtooth.png'
      },
      {
        'id': 'Disciples_of_the_Maw',
        'name': 'Disciples_of_the_Maw',
        'nameCN': '大胃信徒',
        'heroName': '斯卡拉格',
        'heroAvatarPath': 'assets/images/lords/ogre-kingdoms-skrag-the-slaughterer.png',
        'path': 'assets/images/icons/Ogre Kingdoms/Disciples_of_the_Maw.png'
      }
    ]
  },
  {
    'id': 'Skaven',
    'directory': 'Skaven',
    'nameCN': '斯卡文鼠人',
    'files': [
      {
        'id': 'Clan_Mors',
        'name': 'Clan_Mors',
        'nameCN': '摩斯氏族',
        'heroName': '奎克·猎头者',
        'heroAvatarPath': 'assets/images/lords/skaven-queek-headtaker.png',
        'path': 'assets/images/icons/Skaven/Clan_Mors.png'
      },
      {
        'id': 'Clan_Pestilens',
        'name': 'Clan_Pestilens',
        'nameCN': '疫病氏族',
        'heroName': '领主·司库克',
        'heroAvatarPath': 'assets/images/lords/skaven-lord-skrolk.png',
        'path': 'assets/images/icons/Skaven/Clan_Pestilens.png'
      },
      {
        'id': 'Clan_Rictus',
        'name': 'Clan_Rictus',
        'nameCN': '咧嘴氏族',
        'heroName': '崔特思·畏尾',
        'heroAvatarPath': 'assets/images/lords/skaven-tretch-craventail.png',
        'path': 'assets/images/icons/Skaven/Clan_Rictus.png'
      },
      {
        'id': 'Clan_Skryre',
        'name': 'Clan_Skryre',
        'nameCN': '史库里氏族',
        'heroName': '伊克特·利爪',
        'heroAvatarPath': 'assets/images/lords/skaven-ikit-claw.png',
        'path': 'assets/images/icons/Skaven/Clan_Skryre.png'
      },
      {
        'id': 'Clan_Eshin',
        'name': 'Clan_Eshin',
        'nameCN': '艾辛氏族',
        'heroName': '死亡大师·斯尼奇',
        'heroAvatarPath': 'assets/images/lords/skaven-deathmaster-snikch.png',
        'path': 'assets/images/icons/Skaven/Clan_Eshin.png'
      },
      {
        'id': 'Clan_Moulder',
        'name': 'Clan_Moulder',
        'nameCN': '腐坏氏族',
        'heroName': '斯洛克·不洁者',
        'heroAvatarPath': 'assets/images/lords/skaven-throt-the-unclean.png',
        'path': 'assets/images/icons/Skaven/Clan_Moulder.png'
      }
    ]
  },
  {
    'id': 'Slaanesh',
    'directory': 'Slaanesh',
    'nameCN': '色孽',
    'files': [
      {
        'id': 'Seducers_of_Slaanesh',
        'name': 'Seducers_of_Slaanesh',
        'nameCN': '色孽迷魂者',
        'heroName': '纳卡里',
        'heroNameEN': 'nkari',
        'heroAvatarPath': 'assets/images/lords/slaanesh-nkari.png',
        'path': 'assets/images/icons/Slaanesh/Seducers_of_Slaanesh.png'
      }
    ]
  },
  {
    'id': 'Tomb_Kings',
    'directory': 'Tomb Kings',
    'nameCN': '古墓王',
    'files': [
      {
        'id': 'Khemri',
        'name': 'Khemri',
        'nameCN': '喀穆里',
        'heroName': '塞特拉',
        'heroNameEN': 'settra-the-imperishable',
        'heroAvatarPath': 'assets/images/lords/tomb-kings-settra-the-imperishable.png',
        'path': 'assets/images/icons/Tomb Kings/Khemri.png'
      },
      {
        'id': 'Exiles_of_Nehek',
        'name': 'Exiles_of_Nehek',
        'nameCN': '尼科放逐者',
        'heroName': '卡特普',
        'heroNameEN': 'grand-hierophant-khatep',
        'heroAvatarPath': 'assets/images/lords/tomb-kings-grand-hierophant-khatep.png',
        'path': 'assets/images/icons/Tomb Kings/Exiles_of_Nehek.png'
      },
      {
        'id': 'Court_of_Lybaras',
        'name': 'Court_of_Lybaras',
        'nameCN': '莱巴拉斯宫廷',
        'heroName': '至高女王卡莉达',
        'heroNameEN': 'high-queen-khalida',
        'heroAvatarPath': 'assets/images/lords/tomb-kings-high-queen-khalida.png',
        'path': 'assets/images/icons/Tomb Kings/Court_of_Lybaras.png'
      },
      {
        'id': 'Followers_of_Nagash',
        'name': 'Followers_of_Nagash',
        'nameCN': '纳迦什信徒',
        'heroName': '阿克汉',
        'heroNameEN': 'arkhan-the-black',
        'heroAvatarPath': 'assets/images/lords/tomb-kings-arkhan-the-black.png',
        'path': 'assets/images/icons/Tomb Kings/Followers_of_Nagash.png'
      }
    ]
  },
  {
    'id': 'Tzeentch',
    'directory': 'Tzeentch',
    'nameCN': '奸奇',
    'files': [
      {
        'id': 'Oracles_of_Tzeentch',
        'name': 'Oracles_of_Tzeentch',
        'nameCN': '奸奇传谕使',
        'heroName': '卡洛斯·织命者',
        'heroNameEN': 'kairos-fateweaver',
        'heroAvatarPath': 'assets/images/lords/tzeentch-kairos-fateweaver.png',
        'path': 'assets/images/icons/Tzeentch/Oracles_of_Tzeentch.png'
      },
      {
        'id': 'The_Deceivers',
        'name': 'The_Deceivers',
        'nameCN': '诓诈者',
        'heroName': '变化灵',
        'heroNameEN': 'changeling',
        'heroAvatarPath': 'assets/images/lords/tzeentch-changeling.png',
        'path': 'assets/images/icons/Tzeentch/The_Deceivers.png'
      }
    ]
  },
  {
    'id': 'Vampire_Coast',
    'directory': 'Vampire Coast',
    'nameCN': '吸血鬼海岸',
    'files': [
      {
        'id': 'The_Awakened',
        'name': 'The_Awakened',
        'nameCN': '觉醒者',
        'heroName': '卢瑟·哈肯',
        'heroNameEN': 'luthor-harkon',
        'heroAvatarPath': 'assets/images/lords/vampire-coast-luthor-harkon.png',
        'path': 'assets/images/icons/Vampire Coast/The_Awakened.png'
      },
      {
        'id': 'The_Dreadfleet',
        'name': 'The_Dreadfleet',
        'nameCN': '恐惧舰队',
        'heroName': '诺克特拉斯伯爵',
        'heroNameEN': 'count-noctilus',
        'heroAvatarPath': 'assets/images/lords/vampire-coast-count-noctilus.png',
        'path': 'assets/images/icons/Vampire Coast/The_Dreadfleet.png'
      },
      {
        'id': 'Pirates_of_Sartosa',
        'name': 'Pirates_of_Sartosa',
        'nameCN': '萨图沙海盗',
        'heroName': '艾蕊娜萨·盐怨',
        'heroNameEN': 'aranessa-saltspite',
        'heroAvatarPath': 'assets/images/lords/vampire-coast-aranessa-saltspite.png',
        'path': 'assets/images/icons/Vampire Coast/Pirates_of_Sartosa.png'
      },
      {
        'id': 'The_Drowned',
        'name': 'The_Drowned',
        'nameCN': '溺亡者',
        'heroName': '塞洛斯塔·恐怖之鳍',
        'heroNameEN': 'cylostra-direfin',
        'heroAvatarPath': 'assets/images/lords/vampire-coast-cylostra-direfin.png',
        'path': 'assets/images/icons/Vampire Coast/The_Drowned.png'
      }
    ]
  },
  {
    'id': 'Vampire_Counts',
    'directory': 'Vampire Counts',
    'nameCN': '吸血鬼伯爵',
    'files': [
      {
        'id': 'The_Drakenhof_Conclave',
        'name': 'The_Drakenhof_Conclave',
        'nameCN': '邓肯霍夫秘会',
        'heroName': '曼弗雷德·冯·卡斯坦因',
        'heroNameEN': 'mannfred-von-carstein',
        'heroAvatarPath': 'assets/images/lords/vampire-counts-mannfred-von-carstein.png',
        'path': 'assets/images/icons/Vampire Counts/The_Drakenhof_Conclave.png'
      },
      {
        'id': 'The_Barrow_Legion',
        'name': 'The_Barrow_Legion',
        'nameCN': '古坟军团',
        'heroName': '海因里希·凯姆勒',
        'heroNameEN': 'heinrich-kemmler',
        'heroAvatarPath': 'assets/images/lords/vampire-counts-heinrich-kemmler.png',
        'path': 'assets/images/icons/Vampire Counts/The_Barrow_Legion.png'
      },
      {
        'id': 'Sylvania_Vlad',
        'name': 'Sylvania',
        'nameCN': '希尔瓦尼亚',
        'heroName': '弗拉德·冯·卡斯坦因',
        'heroNameEN': 'vlad-von-carstein',
        'heroAvatarPath': 'assets/images/lords/vampire-counts-vlad-von-carstein.png',
        'path': 'assets/images/icons/Vampire Counts/Sylvania.png'
      },
      {
        'id': 'Sylvania_Isabella',
        'name': 'Sylvania',
        'nameCN': '希尔瓦尼亚',
        'heroName': '伊莎贝拉·冯·卡斯坦因',
        'heroNameEN': 'isabella-von-carstein',
        'heroAvatarPath': 'assets/images/lords/vampire-counts-isabella-von-carstein.png',
        'path': 'assets/images/icons/Vampire Counts/Sylvania.png'
      },
      {
        'id': 'Caravan_of_Blue_Roses',
        'name': 'Caravan_of_Blue_Roses',
        'nameCN': '蓝玫瑰车队',
        'heroName': '赫尔曼·苟斯特',
        'heroNameEN': 'helman-ghorst',
        'heroAvatarPath': 'assets/images/lords/vampire-counts-helman-ghorst.png',
        'path': 'assets/images/icons/Vampire Counts/Caravan_of_Blue_Roses.png'
      }
    ]
  },
  {
    'id': 'Warriors_of_Chaos',
    'directory': 'Warriors of Chaos',
    'nameCN': '混沌勇士',
    'files': [
      {
        'id': 'Warhost_of_the_Apocalypse',
        'name': 'Warhost_of_the_Apocalypse',
        'nameCN': '天启战帮',
        'heroName': '艾查恩·永世神选',
        'heroNameEN': 'archaon-the-everchosen',
        'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-archaon-the-everchosen.png',
        'path': 'assets/images/icons/Warriors of Chaos/Warhost_of_the_Apocalypse.png'
      },
      {
        'id': 'Heralds_of_the_Tempest',
        'name': 'Heralds_of_the_Tempest',
        'nameCN': '风暴使者',
        'heroName': '柯烈克·食日者',
        'heroNameEN': 'warriors-of-chaos-kholek-suneater',
        'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-kholek-suneater.png',
        'path': 'assets/images/icons/Warriors of Chaos/Heralds_of_the_Tempest.png'
      },
      {
        'id': 'The_Decadent_Host',
        'name': 'The_Decadent_Host',
        'nameCN': '颓堕大军',
        'heroName': '西格瓦尔德王子·美人',
        'heroNameEN': 'warriors-of-chaos-prince-sigvald-the-magnificent',
        'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-prince-sigvald-the-magnificent.png',
        'path': 'assets/images/icons/Warriors of Chaos/The_Decadent_Host.png'
      },
      {
        'id': 'The_Ecstatic_Legions',
        'name': 'The_Ecstatic_Legions',
        'nameCN': '欣狂军团',
        'heroName': '阿扎泽尔',
        'heroNameEN': 'azazel',
        'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-azazel.png',
        'path': 'assets/images/icons/Warriors of Chaos/The_Ecstatic_Legions.png'
      },
      {
        'id': 'The_Fecundites',
        'name': 'The_Fecundites',
        'nameCN': '猖殖聚群',
        'heroName': '水蛭领主·费斯图斯',
        'heroNameEN': 'festus-the-leechlord',
        'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-festus-the-leechlord.png',
        'path': 'assets/images/icons/Warriors of Chaos/The_Fecundites.png'
      },
      {
        'id': 'Legion_of_the_Gorequeen',
        'name': 'Legion_of_the_Gorequeen',
        'nameCN': '鲜血女王军团',
        'heroName': '血腥·瓦尔基娅',
        'heroNameEN': 'valkia-the-bloody',
        'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-valkia-the-bloody.png',
        'path': 'assets/images/icons/Warriors of Chaos/Legion_of_the_Gorequeen.png'
      },
      {
        'id': 'Puppets_of_Misrule',
        'name': 'Puppets_of_Misrule',
        'nameCN': '暴政傀儡',
        'heroName': '诅咒灵·维里奇',
        'heroNameEN': 'vilitch-the-curseling',
        'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-vilitch-the-curseling.png',
        'path': 'assets/images/icons/Warriors of Chaos/Puppets_of_Misrule.png'
      },
      {
        'id': 'Shadow_Legion',
        'name': 'Shadow_Legion',
        'nameCN': '暗影军团',
        'heroName': '比拉克',
        'heroNameEN': 'warriors-of-chaos-belakor',
        'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-belakor.png',
        'path': 'assets/images/icons/Warriors of Chaos/Shadow_Legion.png'
      }
    ]
  },
  {
    'id': 'Wood_Elves',
    'directory': 'Wood Elves',
    'nameCN': '木精灵',
    'files': [
      {
        'id': 'Talsyn',
        'name': 'Talsyn',
        'nameCN': '塔塞恩',
        'heroName': '奥莱恩',
        'heroNameEN': 'orion',
        'heroAvatarPath': 'assets/images/lords/wood-elves-orion.png',
        'path': 'assets/images/icons/Wood Elves/Talsyn.png'
      },
      {
        'id': 'Argwylon',
        'name': 'Argwylon',
        'nameCN': '阿格维隆',
        'heroName': '杜尔苏',
        'heroNameEN': 'durthu',
        'heroAvatarPath': 'assets/images/lords/wood-elves-durthu.png',
        'path': 'assets/images/icons/Wood Elves/Argwylon.png'
      },
      {
        'id': 'Heralds_of_Ariel',
        'name': 'Heralds_of_Ariel',
        'nameCN': '艾瑞尔军锋',
        'heroName': '暮光姐妹',
        'heroNameEN': 'sisters-of-twilight',
        'heroAvatarPath': 'assets/images/lords/wood-elves-sisters-of-twilight.png',
        'path': 'assets/images/icons/Wood Elves/Heralds_of_Ariel.png'
      },
      {
        'id': 'Wargrove_of_Woe',
        'name': 'Wargrove_of_Woe',
        'nameCN': '灾厄战林',
        'heroName': '戴查',
        'heroNameEN': 'drycha',
        'heroAvatarPath': 'assets/images/lords/wood-elves-drycha.png',
        'path': 'assets/images/icons/Wood Elves/Wargrove_of_Woe.png'
      }
    ]
  }
];

export const WARHAMMER_CLASSIFIERS_MAP: IWarhammerClassifierMap = {
  'Warherd_of_the_One_Eye': {
    'parentId': 'Beastmen',
    'file': {
      'id': 'Warherd_of_the_One_Eye',
      'name': 'Warherd_of_the_One-Eye',
      'nameCN': '独眼战兽群',
      'heroName': '卡扎克·独眼',
      'heroAvatarPath': 'assets/images/lords/beastmen-khazrak-the-one-eye.png',
      'description': '卡扎克是帝国北部森林的梦魇，他将再次令血域遍及邓肯瓦尔德',
      'path': 'assets/images/icons/Beastmen/Warherd_of_the_One-Eye.png'
    }
  },
  'Harbinger_of_Disaster': {
    'parentId': 'Beastmen',
    'file': {
      'id': 'Harbinger_of_Disaster',
      'name': 'Harbinger_of_Disaster',
      'nameCN': '灾厄先驱',
      'heroName': '马拉戈·黑暗征兆',
      'heroAvatarPath': 'assets/images/lords/beastmen-malagor-the-dark-omen.png',
      'path': 'assets/images/icons/Beastmen/Harbinger_of_Disaster.png'
    }
  },
  'Warherd_of_the_Shadowgave': {
    'parentId': 'Beastmen',
    'file': {
      'id': 'Warherd_of_the_Shadowgave',
      'name': 'Warherd_of_the_Shadowgave',
      'nameCN': '影孽战兽群',
      'heroName': '魔古尔·影孽',
      'heroAvatarPath': 'assets/images/lords/beastmen-morghur-the-shadowgave.png',
      'path': 'assets/images/icons/Beastmen/Warherd_of_the_Shadowgave.png'
    }
  },
  'Slaughterhorn_Tribe': {
    'parentId': 'Beastmen',
    'file': {
      'id': 'Slaughterhorn_Tribe',
      'name': 'Slaughterhorn_Tribe',
      'nameCN': '屠灭之角部落',
      'heroName': '陶诺斯·铜牛',
      'heroAvatarPath': 'assets/images/lords/beastmen-taurox-the-brass-bull.png',
      'path': 'assets/images/icons/Beastmen/Slaughterhorn_Tribe.png'
    }
  },
  'Couronne': {
    'parentId': 'Bretonnia',
    'file': {
      'id': 'Couronne',
      'name': 'Couronne',
      'nameCN': '哥隆尼',
      'heroName': '劳恩·列奥康沃尔',
      'heroAvatarPath': 'assets/images/lords/bretonnia-louen-leoncoeur.png',
      'path': 'assets/images/icons/Bretonnia/Couronne.png'
    }
  },
  'Bordeleaux_Errant': {
    'parentId': 'Bretonnia',
    'file': {
      'id': 'Bordeleaux_Errant',
      'name': 'Bordeleaux_Errant',
      'nameCN': '波尔德洛长征军',
      'heroName': '艾博里克·德·波尔德罗',
      'heroAvatarPath': 'assets/images/lords/bretonnia-alberic-de-bordeleaux.png',
      'path': 'assets/images/icons/Bretonnia/Bordeleaux_Errant.png'
    }
  },
  'Carcassonne': {
    'parentId': 'Bretonnia',
    'file': {
      'id': 'Carcassonne',
      'name': 'Carcassonne',
      'nameCN': '卡尔卡松',
      'heroName': '湖神仙女',
      'heroAvatarPath': 'assets/images/lords/bretonnia-fay-enchantress.png',
      'path': 'assets/images/icons/Bretonnia/Carcassonne.png'
    }
  },
  'Chevaliers_de_Lyonesse': {
    'parentId': 'Bretonnia',
    'file': {
      'id': 'Chevaliers_de_Lyonesse',
      'name': 'Chevaliers_de_Lyonesse',
      'nameCN': '里昂尼斯骑士战团',
      'heroName': '赫潘丝·德·里昂尼斯',
      'heroAvatarPath': 'assets/images/lords/bretonnia-repanse-de-lyonesse.png',
      'path': 'assets/images/icons/Bretonnia/Chevaliers_de_Lyonesse.png'
    }
  },
  'Disciples_of_Hashut': {
    'parentId': 'Chaos_Dwarfs',
    'file': {
      'id': 'Disciples_of_Hashut',
      'name': 'Disciples_of_Hashut',
      'nameCN': '哈苏特信徒',
      'heroName': '阿斯特戈斯·铁手',
      'heroAvatarPath': 'assets/images/lords/chaos-dwarves-astragoth-ironhand.png',
      'path': 'assets/images/icons/Chaos Dwarfs/Disciples_of_Hashut.png'
    }
  },
  'The_Legion_of_Azgorh': {
    'parentId': 'Chaos_Dwarfs',
    'file': {
      'id': 'The_Legion_of_Azgorh',
      'name': 'The_Legion_of_Azgorh',
      'nameCN': '阿佐格军团',
      'heroName': '灰烬·德拉兹霍斯',
      'heroAvatarPath': 'assets/images/lords/chaos-dwarves-drazhoath-the-ashen.png',
      'path': 'assets/images/icons/Chaos Dwarfs/The_Legion_of_Azgorh.png'
    }
  },
  'The_Warhost_of_Zharr': {
    'parentId': 'Chaos_Dwarfs',
    'file': {
      'id': 'The_Warhost_of_Zharr',
      'name': 'The_Warhost_of_Zharr',
      'nameCN': '扎尔战团',
      'heroName': '黑心·扎坦',
      'heroAvatarPath': 'assets/images/lords/chaos-dwarves-zhatan-the-black.png',
      'path': 'assets/images/icons/Chaos Dwarfs/The_Warhost_of_Zharr.png'
    }
  },
  'Legion_of_Chaos': {
    'parentId': 'Daemons_of_Chaos',
    'file': {
      'id': 'Legion_of_Chaos',
      'name': 'Legion_of_Chaos',
      'nameCN': '混沌大军',
      'heroName': '恶魔亲王',
      'heroAvatarPath': 'assets/images/lords/legion-of-chaos-daemon-prince.png',
      'path': 'assets/images/icons/Daemons of Chaos/Legion_of_Chaos.png'
    }
  },
  'Naggarond': {
    'parentId': 'Dark_Elves',
    'file': {
      'id': 'Naggarond',
      'name': 'Naggarond',
      'nameCN': '纳迦隆德',
      'heroName': '马雷基斯',
      'heroAvatarPath': 'assets/images/lords/dark-elves-malekith.png',
      'path': 'assets/images/icons/Dark Elves/Naggarond.png'
    }
  },
  'Cult_of_Pleasure': {
    'parentId': 'Dark_Elves',
    'file': {
      'id': 'Cult_of_Pleasure',
      'name': 'Cult_of_Pleasure',
      'nameCN': '欢愉教派',
      'heroName': '莫拉丝',
      'heroAvatarPath': 'assets/images/lords/dark-elves-morathi.png',
      'path': 'assets/images/icons/Dark Elves/Cult_of_Pleasure.png'
    }
  },
  'Hag_Graef': {
    'parentId': 'Dark_Elves',
    'file': {
      'id': 'Hag_Graef',
      'name': 'Hag_Graef',
      'nameCN': '海格·葛雷夫',
      'heroName': '马鲁斯·黑刃',
      'heroAvatarPath': 'assets/images/lords/dark-elves-malus-darkblade.png',
      'path': 'assets/images/icons/Dark Elves/Hag_Graef.png'
    }
  },
  'The_Blessed_Dread': {
    'parentId': 'Dark_Elves',
    'file': {
      'id': 'The_Blessed_Dread',
      'name': 'The_Blessed_Dread',
      'nameCN': '神佑恶党',
      'heroName': '洛克西亚·堕落之心',
      'heroAvatarPath': 'assets/images/lords/dark-elves-lokhir-fellheart.png',
      'path': 'assets/images/icons/Dark Elves/The_Blessed_Dread.png'
    }
  },
  'The_Thousand_Maws': {
    'parentId': 'Dark_Elves',
    'file': {
      'id': 'The_Thousand_Maws',
      'name': 'The_Thousand_Maws',
      'nameCN': '千噬',
      'heroName': '拉卡斯',
      'heroAvatarPath': 'assets/images/lords/dark-elves-rakarth.png',
      'path': 'assets/images/icons/Dark Elves/The_Thousand_Maws.png'
    }
  },
  'Karaz_a_Karak': {
    'parentId': 'Dwarfs',
    'file': {
      'id': 'Karaz_a_Karak',
      'name': 'Karaz-a-Karak',
      'nameCN': '卡拉扎-阿-卡拉克',
      'heroName': '索尔葛林·负怨者',
      'heroAvatarPath': 'assets/images/lords/dwarves-thorgrim-grudgebearer.png',
      'path': 'assets/images/icons/Dwarfs/Karaz-a-Karak.png'
    }
  },
  'Karak_Kadrin': {
    'parentId': 'Dwarfs',
    'file': {
      'id': 'Karak_Kadrin',
      'name': 'Karak_Kadrin',
      'nameCN': '卡拉克·卡德林',
      'heroName': '阿格里姆·铁拳',
      'heroAvatarPath': 'assets/images/lords/dwarves-ungrim-ironfist.png',
      'path': 'assets/images/icons/Dwarfs/Karak_Kadrin.png'
    }
  },
  'Clan_Angrund': {
    'parentId': 'Dwarfs',
    'file': {
      'id': 'Clan_Angrund',
      'name': 'Clan_Angrund',
      'nameCN': '安格朗德氏族',
      'heroName': '贝勒加·铁锤',
      'heroAvatarPath': 'assets/images/lords/dwarves-belegar-ironhammer.png',
      'path': 'assets/images/icons/Dwarfs/Clan_Angrund.png'
    }
  },
  'The_Ancestral_Throng': {
    'parentId': 'Dwarfs',
    'file': {
      'id': 'The_Ancestral_Throng',
      'name': 'The_Ancestral_Throng',
      'nameCN': '先祖之军',
      'heroName': '白矮人·格瑞姆布林戴尔',
      'heroAvatarPath': 'assets/images/lords/dwarves-grombrindal-the-white-dwarf.png',
      'path': 'assets/images/icons/Dwarfs/The_Ancestral_Throng.png'
    }
  },
  'Ironbrows_Expedition': {
    'parentId': 'Dwarfs',
    'file': {
      'id': 'Ironbrows_Expedition',
      'name': 'Ironbrows_Expedition',
      'nameCN': '铁眉远征军',
      'heroName': '托雷克·铁眉',
      'heroAvatarPath': 'assets/images/lords/dwarves-thorek-ironbrow.png',
      'path': 'assets/images/icons/Dwarfs/The_Ancestral_Throng.png'
    }
  },
  'Reikland': {
    'parentId': 'The_Empire',
    'file': {
      'id': 'Reikland',
      'name': 'Reikland',
      'nameCN': '瑞克领',
      'heroName': '皇帝·卡尔·弗兰茨',
      'heroAvatarPath': 'assets/images/lords/empire-karl-franz.png',
      'path': 'assets/images/icons/The Empire/Reikland.png'
    }
  },
  'The_Golden_Order': {
    'parentId': 'The_Empire',
    'file': {
      'id': 'The_Golden_Order',
      'name': 'The_Golden_Order',
      'nameCN': '黄金学院',
      'heroName': '拜尔沙泽·盖尔特',
      'heroAvatarPath': 'assets/images/lords/empire-balthasar-gelt.png',
      'path': 'assets/images/icons/The Empire/The_Golden_Order.png'
    }
  },
  'The_Huntsmarshals_Expedition': {
    'parentId': 'The_Empire',
    'file': {
      'id': 'The_Huntsmarshals_Expedition',
      'name': 'The_Huntsmarshals_Expedition',
      'nameCN': '猎人元帅远征军',
      'heroName': '马库斯·沃法特',
      'heroAvatarPath': 'assets/images/lords/empire-markus-wulfhart.png',
      'path': 'assets/images/icons/The Empire/The_Huntsmarshals_Expedition.png'
    }
  },
  'Cult_of_Sigmar': {
    'parentId': 'The_Empire',
    'file': {
      'id': 'Cult_of_Sigmar',
      'name': 'Cult_of_Sigmar',
      'nameCN': '西格玛教会',
      'heroName': '沃克玛·无情者',
      'heroAvatarPath': 'assets/images/lords/empire-volkmar-the-grim.png',
      'path': 'assets/images/icons/The Empire/Cult_of_Sigmar.png'
    }
  },
  'The_Northern_Provinces': {
    'parentId': 'Grand_Cathay',
    'file': {
      'id': 'The_Northern_Provinces',
      'name': 'The_Northern_Provinces',
      'nameCN': '卫北列省',
      'heroName': '飙龙·妙影',
      'heroAvatarPath': 'assets/images/lords/grand-cathay-miao-ying.png',
      'path': 'assets/images/icons/Grand Cathay/The_Northern_Provinces.png'
    }
  },
  'The_Western_Provinces': {
    'parentId': 'Grand_Cathay',
    'file': {
      'id': 'The_Western_Provinces',
      'name': 'The_Western_Provinces',
      'nameCN': '卫西列省',
      'heroName': '镔龙·昭明',
      'heroAvatarPath': 'assets/images/lords/grand-cathay-zhao-ming.png',
      'path': 'assets/images/icons/Grand Cathay/The_Western_Provinces.png'
    }
  },
  'The_Jade_Court': {
    'parentId': 'Grand_Cathay',
    'file': {
      'id': 'The_Jade_Court',
      'name': 'The_Jade_Court',
      'nameCN': '玉廷',
      'heroName': '玉龙·元伯',
      'heroAvatarPath': 'assets/images/lords/grand-cathay-yuan-bo.png',
      'path': 'assets/images/icons/Grand Cathay/The_Jade_Court.png'
    }
  },
  'Grimgors_Ardboyz': {
    'parentId': 'Greenskins',
    'file': {
      'id': 'Grimgors_Ardboyz',
      'name': 'Grimgors_Ardboyz',
      'nameCN': '格里姆格的狠小子',
      'heroName': '格里姆格·铁皮',
      'heroAvatarPath': 'assets/images/lords/greenskins-grimgor-ironhide.png',
      'path': 'assets/images/icons/Greenskins/Grimgors_Ardboyz.png'
    }
  },
  'Bonerattlaz': {
    'parentId': 'Greenskins',
    'file': {
      'id': 'Bonerattlaz',
      'name': 'Bonerattlaz',
      'nameCN': '响骨',
      'heroName': '阿兹汗·屠灭者',
      'heroAvatarPath': 'assets/images/lords/greenskins-azhag-the-slaughterer.png',
      'path': 'assets/images/icons/Greenskins/Bonerattlaz.png'
    }
  },
  'Crooked_Moon': {
    'parentId': 'Greenskins',
    'file': {
      'id': 'Crooked_Moon',
      'name': 'Crooked_Moon',
      'nameCN': '邪月',
      'heroName': '史卡斯尼克',
      'heroAvatarPath': 'assets/images/lords/greenskins-skarsnik.png',
      'path': 'assets/images/icons/Greenskins/Crooked_Moon.png'
    }
  },
  'The_Bloody_Handz': {
    'parentId': 'Greenskins',
    'file': {
      'id': 'The_Bloody_Handz',
      'name': 'The_Bloody_Handz',
      'nameCN': '血手',
      'heroName': '乌尔扎戈·绿先知',
      'heroAvatarPath': 'assets/images/lords/greenskins-wurrzag-da-great-green-prophet.png',
      'path': 'assets/images/icons/Greenskins/The_Bloody_Handz.png'
    }
  },
  'Broken_Axe': {
    'parentId': 'Greenskins',
    'file': {
      'id': 'Broken_Axe',
      'name': 'Broken_Axe',
      'nameCN': '碎斧',
      'heroName': '大肚王·咕噜',
      'heroAvatarPath': 'assets/images/lords/greenskins-grom-the-paunch.png',
      'path': 'assets/images/icons/Greenskins/Broken_Axe.png'
    }
  },
  'Eataine': {
    'parentId': 'High_Elves',
    'file': {
      'id': 'Eataine',
      'name': 'Eataine',
      'nameCN': '伊泰恩',
      'heroName': '泰瑞昂',
      'heroAvatarPath': 'assets/images/lords/high-elves-tyrion.png',
      'path': 'assets/images/icons/High Elves/Eataine.png'
    }
  },
  'Order_of_Loremasters': {
    'parentId': 'High_Elves',
    'file': {
      'id': 'Order_of_Loremasters',
      'name': 'Order_of_Loremasters',
      'nameCN': '魔剑士议会',
      'heroName': '泰格里斯',
      'heroAvatarPath': 'assets/images/lords/high-elves-teclis.png',
      'path': 'assets/images/icons/High Elves/Order_of_Loremasters.png'
    }
  },
  'Avelorn': {
    'parentId': 'High_Elves',
    'file': {
      'id': 'Avelorn',
      'name': 'Avelorn',
      'nameCN': '阿瓦隆',
      'heroName': '艾拉瑞丽',
      'heroAvatarPath': 'assets/images/lords/high-elves-alarielle-the-radiant.png',
      'path': 'assets/images/icons/High Elves/Avelorn.png'
    }
  },
  'Nagarythe': {
    'parentId': 'High_Elves',
    'file': {
      'id': 'Nagarythe',
      'name': 'Nagarythe',
      'nameCN': '纳迦瑞斯',
      'heroName': '阿里斯·安纳尔',
      'heroAvatarPath': 'assets/images/lords/high-elves-alith-anar.png',
      'path': 'assets/images/icons/High Elves/Nagarythe.png'
    }
  },
  'Yvresse': {
    'parentId': 'High_Elves',
    'file': {
      'id': 'Yvresse',
      'name': 'Yvresse',
      'nameCN': '伊瑞斯',
      'heroName': '艾萨里昂·无情者',
      'heroAvatarPath': 'assets/images/lords/high-elves-eltharion.png',
      'path': 'assets/images/icons/High Elves/Yvresse.png'
    }
  },
  'Knights_of_Caledor': {
    'parentId': 'High_Elves',
    'file': {
      'id': 'Knights_of_Caledor',
      'name': 'Knights_of_Caledor',
      'nameCN': '卡勒多骑士',
      'heroName': '伊姆瑞克',
      'heroAvatarPath': 'assets/images/lords/high-elves-imrik.png',
      'path': 'assets/images/icons/High Elves/Knights_of_Caledor.png'
    }
  },
  'Exiles_of_Khorne': {
    'parentId': 'Khorne',
    'file': {
      'id': 'Exiles_of_Khorne',
      'name': 'Exiles_of_Khorne',
      'nameCN': '恐虐流放者',
      'heroName': '流放者·斯卡布兰德',
      'heroAvatarPath': 'assets/images/lords/khorne-skarbrand-the-exiled.png',
      'path': 'assets/images/icons/Khorne/Exiles_of_Khorne.png'
    }
  },
  'The_Ice_Court': {
    'parentId': 'Kislev',
    'file': {
      'id': 'The_Ice_Court',
      'name': 'The_Ice_Court',
      'nameCN': '冰雪王廷',
      'heroName': '女沙皇卡捷琳',
      'heroAvatarPath': 'assets/images/lords/kislev-tzarina-katarin.png',
      'path': 'assets/images/icons/Kislev/The_Ice_Court.png'
    }
  },
  'The_Great_Orthodoxy': {
    'parentId': 'Kislev',
    'file': {
      'id': 'The_Great_Orthodoxy',
      'name': 'The_Great_Orthodoxy',
      'nameCN': '大正教会',
      'heroName': '康斯坦丁',
      'heroAvatarPath': 'assets/images/lords/kislev-kostaltyn.png',
      'path': 'assets/images/icons/Kislev/The_Great_Orthodoxy.png'
    }
  },
  'Ursun_Revivalists': {
    'parentId': 'Kislev',
    'file': {
      'id': 'Ursun_Revivalists',
      'name': 'Ursun_Revivalists',
      'nameCN': '厄孙复兴者',
      'heroName': '鲍里斯·厄孙',
      'heroAvatarPath': 'assets/images/lords/kislev-boris-ursus.png',
      'path': 'assets/images/icons/Kislev/Ursun_Revivalists.png'
    }
  },
  'Daughters_of_the_Forest': {
    'parentId': 'Kislev',
    'file': {
      'id': 'Daughters_of_the_Forest',
      'name': 'Daughters_of_the_Forest',
      'nameCN': '森林之女',
      'heroName': '奥斯坦基娅嬷嬷',
      'heroAvatarPath': 'assets/images/lords/kislev-mother-ostankya.png',
      'path': 'assets/images/icons/Kislev/Daughters_of_the_Forest.png'
    }
  },
  'Hexoatl': {
    'parentId': 'Lizardmen',
    'file': {
      'id': 'Hexoatl',
      'name': 'Hexoatl',
      'nameCN': '赫斯欧塔',
      'heroName': '领主·马兹达穆迪',
      'heroAvatarPath': 'assets/images/lords/lizardmen-lord-mazdamundi.png',
      'path': 'assets/images/icons/Lizardmen/Hexoatl.png'
    }
  },
  'Last_Defenders': {
    'parentId': 'Lizardmen',
    'file': {
      'id': 'Last_Defenders',
      'name': 'Last_Defenders',
      'nameCN': '最后守卫者',
      'heroName': '库·迦',
      'heroAvatarPath': 'assets/images/lords/lizardmen-kroq-gar.png',
      'path': 'assets/images/icons/Lizardmen/Last_Defenders.png'
    }
  },
  'Cult_of_Sotek': {
    'parentId': 'Lizardmen',
    'file': {
      'id': 'Cult_of_Sotek',
      'name': 'Cult_of_Sotek',
      'nameCN': '索提戈教派',
      'heroName': '特亨霍因',
      'heroAvatarPath': 'assets/images/lords/lizardmen-tehenhauin.png',
      'path': 'assets/images/icons/Lizardmen/Cult_of_Sotek.png'
    }
  },
  'Tlaqua': {
    'parentId': 'Lizardmen',
    'file': {
      'id': 'Tlaqua',
      'name': 'Tlaqua',
      'nameCN': '塔拉夸',
      'heroName': '提克塔托',
      'heroAvatarPath': 'assets/images/lords/lizardmen-tiktaqto.png',
      'path': 'assets/images/icons/Lizardmen/Tlaqua.png'
    }
  },
  'Itza': {
    'parentId': 'Lizardmen',
    'file': {
      'id': 'Itza',
      'name': 'Itza',
      'nameCN': '伊塔扎',
      'heroName': '哥罗克',
      'heroAvatarPath': 'assets/images/lords/lizardmen-gor-rok.png',
      'path': 'assets/images/icons/Lizardmen/Itza.png'
    }
  },
  'Spirit_of_the_Jungle': {
    'parentId': 'Lizardmen',
    'file': {
      'id': 'Spirit_of_the_Jungle',
      'name': 'Spirit_of_the_Jungle',
      'nameCN': '丛林精魂',
      'heroName': '流放者·纳卡伊',
      'heroAvatarPath': 'assets/images/lords/lizardmen-nakai-the-wanderer.png',
      'path': 'assets/images/icons/Lizardmen/Spirit_of_the_Jungle.png'
    }
  },
  'Ghosts_of_Pahuax': {
    'parentId': 'Lizardmen',
    'file': {
      'id': 'Ghosts_of_Pahuax',
      'name': 'Ghosts_of_Pahuax',
      'nameCN': '帕花科斯幽灵',
      'heroName': '欧西约坦',
      'heroAvatarPath': 'assets/images/lords/lizardmen-oxyotl.png',
      'path': 'assets/images/icons/Lizardmen/Ghosts_of_Pahuax.png'
    }
  },
  'World_Walkers': {
    'parentId': 'Norsca',
    'file': {
      'id': 'World_Walkers',
      'name': 'World_Walkers',
      'nameCN': '世界行者',
      'heroName': '乌弗瑞克·流浪者',
      'heroAvatarPath': 'assets/images/lords/norsca-wulfrik-the-wanderer.png',
      'path': 'assets/images/icons/Norsca/World_Walkers.png'
    }
  },
  'Wintertooth': {
    'parentId': 'Norsca',
    'file': {
      'id': 'Wintertooth',
      'name': 'Wintertooth',
      'nameCN': '冬牙',
      'heroName': '索隆格',
      'heroAvatarPath': 'assets/images/lords/norsca-throgg.png',
      'path': 'assets/images/icons/Norsca/Wintertooth.png'
    }
  },
  'Poxmakers_of_Nurgle': {
    'parentId': 'Nurgle',
    'file': {
      'id': 'Poxmakers_of_Nurgle',
      'name': 'Poxmakers_of_Nurgle',
      'nameCN': '纳垢驭疹官',
      'heroName': '库嘎斯·瘟父',
      'heroAvatarPath': 'assets/images/lords/nurgle-kugath-plaguefather.png',
      'path': 'assets/images/icons/Nurgle/Poxmakers_of_Nurgle.png'
    }
  },
  'Goldtooth': {
    'parentId': 'Ogre_Kingdoms',
    'file': {
      'id': 'Goldtooth',
      'name': 'Goldtooth',
      'nameCN': '金牙',
      'heroName': '格雷苏·大金牙',
      'heroAvatarPath': 'assets/images/lords/ogre-kingdoms-greasus-goldtooth.png',
      'path': 'assets/images/icons/Ogre Kingdoms/Goldtooth.png'
    }
  },
  'Disciples_of_the_Maw': {
    'parentId': 'Ogre_Kingdoms',
    'file': {
      'id': 'Disciples_of_the_Maw',
      'name': 'Disciples_of_the_Maw',
      'nameCN': '大胃信徒',
      'heroName': '斯卡拉格',
      'heroAvatarPath': 'assets/images/lords/ogre-kingdoms-skrag-the-slaughterer.png',
      'path': 'assets/images/icons/Ogre Kingdoms/Disciples_of_the_Maw.png'
    }
  },
  'Clan_Mors': {
    'parentId': 'Skaven',
    'file': {
      'id': 'Clan_Mors',
      'name': 'Clan_Mors',
      'nameCN': '摩斯氏族',
      'heroName': '奎克·猎头者',
      'heroAvatarPath': 'assets/images/lords/skaven-queek-headtaker.png',
      'path': 'assets/images/icons/Skaven/Clan_Mors.png'
    }
  },
  'Clan_Pestilens': {
    'parentId': 'Skaven',
    'file': {
      'id': 'Clan_Pestilens',
      'name': 'Clan_Pestilens',
      'nameCN': '疫病氏族',
      'heroName': '领主·司库克',
      'heroAvatarPath': 'assets/images/lords/skaven-lord-skrolk.png',
      'path': 'assets/images/icons/Skaven/Clan_Pestilens.png'
    }
  },
  'Clan_Rictus': {
    'parentId': 'Skaven',
    'file': {
      'id': 'Clan_Rictus',
      'name': 'Clan_Rictus',
      'nameCN': '咧嘴氏族',
      'heroName': '崔特思·畏尾',
      'heroAvatarPath': 'assets/images/lords/skaven-tretch-craventail.png',
      'path': 'assets/images/icons/Skaven/Clan_Rictus.png'
    }
  },
  'Clan_Skryre': {
    'parentId': 'Skaven',
    'file': {
      'id': 'Clan_Skryre',
      'name': 'Clan_Skryre',
      'nameCN': '史库里氏族',
      'heroName': '伊克特·利爪',
      'heroAvatarPath': 'assets/images/lords/skaven-ikit-claw.png',
      'path': 'assets/images/icons/Skaven/Clan_Skryre.png'
    }
  },
  'Clan_Eshin': {
    'parentId': 'Skaven',
    'file': {
      'id': 'Clan_Eshin',
      'name': 'Clan_Eshin',
      'nameCN': '艾辛氏族',
      'heroName': '死亡大师·斯尼奇',
      'heroAvatarPath': 'assets/images/lords/skaven-deathmaster-snikch.png',
      'path': 'assets/images/icons/Skaven/Clan_Eshin.png'
    }
  },
  'Clan_Moulder': {
    'parentId': 'Skaven',
    'file': {
      'id': 'Clan_Moulder',
      'name': 'Clan_Moulder',
      'nameCN': '腐坏氏族',
      'heroName': '斯洛克·不洁者',
      'heroAvatarPath': 'assets/images/lords/skaven-throt-the-unclean.png',
      'path': 'assets/images/icons/Skaven/Clan_Moulder.png'
    }
  },
  'Seducers_of_Slaanesh': {
    'parentId': 'Slaanesh',
    'file': {
      'id': 'Seducers_of_Slaanesh',
      'name': 'Seducers_of_Slaanesh',
      'nameCN': '色孽迷魂者',
      'heroName': '纳卡里',
      'heroNameEN': 'nkari',
      'heroAvatarPath': 'assets/images/lords/slaanesh-nkari.png',
      'path': 'assets/images/icons/Slaanesh/Seducers_of_Slaanesh.png'
    }
  },
  'Khemri': {
    'parentId': 'Tomb_Kings',
    'file': {
      'id': 'Khemri',
      'name': 'Khemri',
      'nameCN': '喀穆里',
      'heroName': '塞特拉',
      'heroNameEN': 'settra-the-imperishable',
      'heroAvatarPath': 'assets/images/lords/tomb-kings-settra-the-imperishable.png',
      'path': 'assets/images/icons/Tomb Kings/Khemri.png'
    }
  },
  'Exiles_of_Nehek': {
    'parentId': 'Tomb_Kings',
    'file': {
      'id': 'Exiles_of_Nehek',
      'name': 'Exiles_of_Nehek',
      'nameCN': '尼科放逐者',
      'heroName': '卡特普',
      'heroNameEN': 'grand-hierophant-khatep',
      'heroAvatarPath': 'assets/images/lords/tomb-kings-grand-hierophant-khatep.png',
      'path': 'assets/images/icons/Tomb Kings/Exiles_of_Nehek.png'
    }
  },
  'Court_of_Lybaras': {
    'parentId': 'Tomb_Kings',
    'file': {
      'id': 'Court_of_Lybaras',
      'name': 'Court_of_Lybaras',
      'nameCN': '莱巴拉斯宫廷',
      'heroName': '至高女王卡莉达',
      'heroNameEN': 'high-queen-khalida',
      'heroAvatarPath': 'assets/images/lords/tomb-kings-high-queen-khalida.png',
      'path': 'assets/images/icons/Tomb Kings/Court_of_Lybaras.png'
    }
  },
  'Followers_of_Nagash': {
    'parentId': 'Tomb_Kings',
    'file': {
      'id': 'Followers_of_Nagash',
      'name': 'Followers_of_Nagash',
      'nameCN': '纳迦什信徒',
      'heroName': '阿克汉',
      'heroNameEN': 'arkhan-the-black',
      'heroAvatarPath': 'assets/images/lords/tomb-kings-arkhan-the-black.png',
      'path': 'assets/images/icons/Tomb Kings/Followers_of_Nagash.png'
    }
  },
  'Oracles_of_Tzeentch': {
    'parentId': 'Tzeentch',
    'file': {
      'id': 'Oracles_of_Tzeentch',
      'name': 'Oracles_of_Tzeentch',
      'nameCN': '奸奇传谕使',
      'heroName': '卡洛斯·织命者',
      'heroNameEN': 'kairos-fateweaver',
      'heroAvatarPath': 'assets/images/lords/tzeentch-kairos-fateweaver.png',
      'path': 'assets/images/icons/Tzeentch/Oracles_of_Tzeentch.png'
    }
  },
  'The_Deceivers': {
    'parentId': 'Tzeentch',
    'file': {
      'id': 'The_Deceivers',
      'name': 'The_Deceivers',
      'nameCN': '诓诈者',
      'heroName': '变化灵',
      'heroNameEN': 'changeling',
      'heroAvatarPath': 'assets/images/lords/tzeentch-changeling.png',
      'path': 'assets/images/icons/Tzeentch/The_Deceivers.png'
    }
  },
  'The_Awakened': {
    'parentId': 'Vampire_Coast',
    'file': {
      'id': 'The_Awakened',
      'name': 'The_Awakened',
      'nameCN': '觉醒者',
      'heroName': '卢瑟·哈肯',
      'heroNameEN': 'luthor-harkon',
      'heroAvatarPath': 'assets/images/lords/vampire-coast-luthor-harkon.png',
      'path': 'assets/images/icons/Vampire Coast/The_Awakened.png'
    }
  },
  'The_Dreadfleet': {
    'parentId': 'Vampire_Coast',
    'file': {
      'id': 'The_Dreadfleet',
      'name': 'The_Dreadfleet',
      'nameCN': '恐惧舰队',
      'heroName': '诺克特拉斯伯爵',
      'heroNameEN': 'count-noctilus',
      'heroAvatarPath': 'assets/images/lords/vampire-coast-count-noctilus.png',
      'path': 'assets/images/icons/Vampire Coast/The_Dreadfleet.png'
    }
  },
  'Pirates_of_Sartosa': {
    'parentId': 'Vampire_Coast',
    'file': {
      'id': 'Pirates_of_Sartosa',
      'name': 'Pirates_of_Sartosa',
      'nameCN': '萨图沙海盗',
      'heroName': '艾蕊娜萨·盐怨',
      'heroNameEN': 'aranessa-saltspite',
      'heroAvatarPath': 'assets/images/lords/vampire-coast-aranessa-saltspite.png',
      'path': 'assets/images/icons/Vampire Coast/Pirates_of_Sartosa.png'
    }
  },
  'The_Drowned': {
    'parentId': 'Vampire_Coast',
    'file': {
      'id': 'The_Drowned',
      'name': 'The_Drowned',
      'nameCN': '溺亡者',
      'heroName': '塞洛斯塔·恐怖之鳍',
      'heroNameEN': 'cylostra-direfin',
      'heroAvatarPath': 'assets/images/lords/vampire-coast-cylostra-direfin.png',
      'path': 'assets/images/icons/Vampire Coast/The_Drowned.png'
    }
  },
  'The_Drakenhof_Conclave': {
    'parentId': 'Vampire_Counts',
    'file': {
      'id': 'The_Drakenhof_Conclave',
      'name': 'The_Drakenhof_Conclave',
      'nameCN': '邓肯霍夫秘会',
      'heroName': '曼弗雷德·冯·卡斯坦因',
      'heroNameEN': 'mannfred-von-carstein',
      'heroAvatarPath': 'assets/images/lords/vampire-counts-mannfred-von-carstein.png',
      'path': 'assets/images/icons/Vampire Counts/The_Drakenhof_Conclave.png'
    }
  },
  'The_Barrow_Legion': {
    'parentId': 'Vampire_Counts',
    'file': {
      'id': 'The_Barrow_Legion',
      'name': 'The_Barrow_Legion',
      'nameCN': '古坟军团',
      'heroName': '海因里希·凯姆勒',
      'heroNameEN': 'heinrich-kemmler',
      'heroAvatarPath': 'assets/images/lords/vampire-counts-heinrich-kemmler.png',
      'path': 'assets/images/icons/Vampire Counts/The_Barrow_Legion.png'
    }
  },
  'Sylvania': {
    'parentId': 'Vampire_Counts',
    'file': {
      'id': 'Sylvania_Isabella',
      'name': 'Sylvania',
      'nameCN': '希尔瓦尼亚',
      'heroName': '伊莎贝拉·冯·卡斯坦因',
      'heroNameEN': 'isabella-von-carstein',
      'heroAvatarPath': 'assets/images/lords/vampire-counts-isabella-von-carstein.png',
      'path': 'assets/images/icons/Vampire Counts/Sylvania.png'
    }
  },
  'Caravan_of_Blue_Roses': {
    'parentId': 'Vampire_Counts',
    'file': {
      'id': 'Caravan_of_Blue_Roses',
      'name': 'Caravan_of_Blue_Roses',
      'nameCN': '蓝玫瑰车队',
      'heroName': '赫尔曼·苟斯特',
      'heroNameEN': 'helman-ghorst',
      'heroAvatarPath': 'assets/images/lords/vampire-counts-helman-ghorst.png',
      'path': 'assets/images/icons/Vampire Counts/Caravan_of_Blue_Roses.png'
    }
  },
  'Warhost_of_the_Apocalypse': {
    'parentId': 'Warriors_of_Chaos',
    'file': {
      'id': 'Warhost_of_the_Apocalypse',
      'name': 'Warhost_of_the_Apocalypse',
      'nameCN': '天启战帮',
      'heroName': '艾查恩·永世神选',
      'heroNameEN': 'archaon-the-everchosen',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-archaon-the-everchosen.png',
      'path': 'assets/images/icons/Warriors of Chaos/Warhost_of_the_Apocalypse.png'
    }
  },
  'Heralds_of_the_Tempest': {
    'parentId': 'Warriors_of_Chaos',
    'file': {
      'id': 'Heralds_of_the_Tempest',
      'name': 'Heralds_of_the_Tempest',
      'nameCN': '风暴使者',
      'heroName': '柯烈克·食日者',
      'heroNameEN': 'warriors-of-chaos-kholek-suneater',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-kholek-suneater.png',
      'path': 'assets/images/icons/Warriors of Chaos/Heralds_of_the_Tempest.png'
    }
  },
  'The_Decadent_Host': {
    'parentId': 'Warriors_of_Chaos',
    'file': {
      'id': 'The_Decadent_Host',
      'name': 'The_Decadent_Host',
      'nameCN': '颓堕大军',
      'heroName': '西格瓦尔德王子·美人',
      'heroNameEN': 'warriors-of-chaos-prince-sigvald-the-magnificent',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-prince-sigvald-the-magnificent.png',
      'path': 'assets/images/icons/Warriors of Chaos/The_Decadent_Host.png'
    }
  },
  'The_Ecstatic_Legions': {
    'parentId': 'Warriors_of_Chaos',
    'file': {
      'id': 'The_Ecstatic_Legions',
      'name': 'The_Ecstatic_Legions',
      'nameCN': '欣狂军团',
      'heroName': '阿扎泽尔',
      'heroNameEN': 'azazel',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-azazel.png',
      'path': 'assets/images/icons/Warriors of Chaos/The_Ecstatic_Legions.png'
    }
  },
  'The_Fecundites': {
    'parentId': 'Warriors_of_Chaos',
    'file': {
      'id': 'The_Fecundites',
      'name': 'The_Fecundites',
      'nameCN': '猖殖聚群',
      'heroName': '水蛭领主·费斯图斯',
      'heroNameEN': 'festus-the-leechlord',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-festus-the-leechlord.png',
      'path': 'assets/images/icons/Warriors of Chaos/The_Fecundites.png'
    }
  },
  'Legion_of_the_Gorequeen': {
    'parentId': 'Warriors_of_Chaos',
    'file': {
      'id': 'Legion_of_the_Gorequeen',
      'name': 'Legion_of_the_Gorequeen',
      'nameCN': '鲜血女王军团',
      'heroName': '血腥·瓦尔基娅',
      'heroNameEN': 'valkia-the-bloody',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-valkia-the-bloody.png',
      'path': 'assets/images/icons/Warriors of Chaos/Legion_of_the_Gorequeen.png'
    }
  },
  'Puppets_of_Misrule': {
    'parentId': 'Warriors_of_Chaos',
    'file': {
      'id': 'Puppets_of_Misrule',
      'name': 'Puppets_of_Misrule',
      'nameCN': '暴政傀儡',
      'heroName': '诅咒灵·维里奇',
      'heroNameEN': 'vilitch-the-curseling',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-vilitch-the-curseling.png',
      'path': 'assets/images/icons/Warriors of Chaos/Puppets_of_Misrule.png'
    }
  },
  'Shadow_Legion': {
    'parentId': 'Warriors_of_Chaos',
    'file': {
      'id': 'Shadow_Legion',
      'name': 'Shadow_Legion',
      'nameCN': '暗影军团',
      'heroName': '比拉克',
      'heroNameEN': 'warriors-of-chaos-belakor',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-belakor.png',
      'path': 'assets/images/icons/Warriors of Chaos/Shadow_Legion.png'
    }
  },
  'Talsyn': {
    'parentId': 'Wood_Elves',
    'file': {
      'id': 'Talsyn',
      'name': 'Talsyn',
      'nameCN': '塔塞恩',
      'heroName': '奥莱恩',
      'heroNameEN': 'orion',
      'heroAvatarPath': 'assets/images/lords/wood-elves-orion.png',
      'path': 'assets/images/icons/Wood Elves/Talsyn.png'
    }
  },
  'Argwylon': {
    'parentId': 'Wood_Elves',
    'file': {
      'id': 'Argwylon',
      'name': 'Argwylon',
      'nameCN': '阿格维隆',
      'heroName': '杜尔苏',
      'heroNameEN': 'durthu',
      'heroAvatarPath': 'assets/images/lords/wood-elves-durthu.png',
      'path': 'assets/images/icons/Wood Elves/Argwylon.png'
    }
  },
  'Heralds_of_Ariel': {
    'parentId': 'Wood_Elves',
    'file': {
      'id': 'Heralds_of_Ariel',
      'name': 'Heralds_of_Ariel',
      'nameCN': '艾瑞尔军锋',
      'heroName': '暮光姐妹',
      'heroNameEN': 'sisters-of-twilight',
      'heroAvatarPath': 'assets/images/lords/wood-elves-sisters-of-twilight.png',
      'path': 'assets/images/icons/Wood Elves/Heralds_of_Ariel.png'
    }
  },
  'Wargrove_of_Woe': {
    'parentId': 'Wood_Elves',
    'file': {
      'id': 'Wargrove_of_Woe',
      'name': 'Wargrove_of_Woe',
      'nameCN': '灾厄战林',
      'heroName': '戴查',
      'heroNameEN': 'drycha',
      'heroAvatarPath': 'assets/images/lords/wood-elves-drycha.png',
      'path': 'assets/images/icons/Wood Elves/Wargrove_of_Woe.png'
    }
  }
};
