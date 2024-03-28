import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IImageFile, IWarhammerClassifier } from './shared/interfaces/warhammer-classifier';
import { ItemCardComponent } from '@w-monorepo/ui';

@Component({
  selector: 'st-warhammer-classifier',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './warhammer-classifier.component.html',
  styleUrl: './warhammer-classifier.component.scss',
})
export class WarhammerClassifierComponent {
  public data: IWarhammerClassifier[] = [
    {
      "directory": "Beastmen",
      "nameCN": "野兽人",
      "files": [
        {
          "name": "Harbinger_of_Disaster",
          "nameCN": "厄运使者",
          "path": "assets/images/icons/Beastmen/Harbinger_of_Disaster.png"
        },
        {
          "name": "Slaughterhorn_Tribe",
          "nameCN": "杀戮之角部落",
          "path": "assets/images/icons/Beastmen/Slaughterhorn_Tribe.png"
        },
        {
          "name": "Warherd_of_the_One-Eye",
          "nameCN": "独眼战兽群",
          "heroName": "卡扎克·独眼",
          "description": "卡扎克是帝国北部森林的梦魇，他将再次令血域遍及邓肯瓦尔德",
          "path": "assets/images/icons/Beastmen/Warherd_of_the_One-Eye.png"
        },
        {
          "name": "Warherd_of_the_Shadowgave",
          "nameCN": "暗影掠群",
          "path": "assets/images/icons/Beastmen/Warherd_of_the_Shadowgave.png"
        }
      ]
    },
    {
      "directory": "Bretonnia",
      "nameCN": "巴托尼亚",
      "files": [
        {
          "name": "Bordeleaux_Errant",
          "nameCN": "波尔德洛长征君",
          "path": "assets/images/icons/Bretonnia/Bordeleaux_Errant.png"
        },
        {
          "name": "Carcassonne",
          "nameCN": "卡尔卡松",
          "path": "assets/images/icons/Bretonnia/Carcassonne.png"
        },
        {
          "name": "Chevaliers_de_Lyonesse",
          "nameCN": "里昂尼斯骑士战团",
          "path": "assets/images/icons/Bretonnia/Chevaliers_de_Lyonesse.png"
        },
        {
          "name": "Couronne",
          "nameCN": "哥隆尼",
          "path": "assets/images/icons/Bretonnia/Couronne.png"
        }
      ]
    },
    {
      "directory": "Chaos Dwarfs",
      "nameCN": "混沌矮人",
      "files": [
        {
          "name": "Disciples_of_Hashut",
          "nameCN": "哈苏特信徒",
          "path": "assets/images/icons/Chaos Dwarfs/Disciples_of_Hashut.png"
        },
        {
          "name": "The_Legion_of_Azgorh",
          "nameCN": "阿佐格军团",
          "path": "assets/images/icons/Chaos Dwarfs/The_Legion_of_Azgorh.png"
        },
        {
          "name": "The_Warhost_of_Zharr",
          "nameCN": "扎尔战团",
          "path": "assets/images/icons/Chaos Dwarfs/The_Warhost_of_Zharr.png"
        }
      ]
    },
    {
      "directory": "Daemons of Chaos",
      "nameCN": "混沌恶魔",
      "files": [
        {
          "name": "Legion_of_Chaos",
          "nameCN": "混沌大军",
          "path": "assets/images/icons/Daemons of Chaos/Legion_of_Chaos.png"
        }
      ]
    },
    {
      "directory": "Dark Elves",
      "nameCN": "黑暗精灵",
      "files": [
        {
          "name": "Cult_of_Pleasure",
          "nameCN": "欢愉教派",
          "path": "assets/images/icons/Dark Elves/Cult_of_Pleasure.png"
        },
        {
          "name": "Hag_Graef",
          "nameCN": "海格·葛雷夫",
          "path": "assets/images/icons/Dark Elves/Hag_Graef.png"
        },
        {
          "name": "Har_Ganeth",
          "nameCN": "哈尔·冈西",
          "path": "assets/images/icons/Dark Elves/Har_Ganeth.png"
        },
        {
          "name": "Naggarond",
          "nameCN": "纳迦隆德",
          "path": "assets/images/icons/Dark Elves/Naggarond.png"
        },
        {
          "name": "The_Blessed_Dread",
          "nameCN": "神佑恶党",
          "path": "assets/images/icons/Dark Elves/The_Blessed_Dread.png"
        },
        {
          "name": "The_Thousand_Maws",
          "nameCN": "千噬",
          "path": "assets/images/icons/Dark Elves/The_Thousand_Maws.png"
        }
      ]
    },
    {
      "directory": "Dwarfs",
      "nameCN": "矮人",
      "files": [
        {
          "name": "Clan_Angrund",
          "nameCN": "安格朗德氏族",
          "path": "assets/images/icons/Dwarfs/Clan_Angrund.png"
        },
        {
          "name": "Ironbrows_Expedition",
          "nameCN": "铁眉远征军",
          "path": "assets/images/icons/Dwarfs/Ironbrows_Expedition.png"
        },
        {
          "name": "Karak_Kadrin",
          "nameCN": "卡拉克·卡德林",
          "path": "assets/images/icons/Dwarfs/Karak_Kadrin.png"
        },
        {
          "name": "Karaz-a-Karak",
          "nameCN": "卡拉扎-阿-卡拉克",
          "path": "assets/images/icons/Dwarfs/Karaz-a-Karak.png"
        },
        {
          "name": "The_Ancestral_Throng",
          "nameCN": "先祖之军",
          "path": "assets/images/icons/Dwarfs/The_Ancestral_Throng.png"
        }
      ]
    },
    {
      "directory": "The Empire",
      "nameCN": "帝国",
      "files": [
        {
          "name": "Reikland",
          "nameCN": "瑞克领",
          "path": "assets/images/icons/The Empire/Reikland.png"
        },
        {
          "name": "The_Golden_Order",
          "nameCN": "黄金学院",
          "path": "assets/images/icons/The Empire/The_Golden_Order.png"
        },

        {
          "name": "The_Huntsmarshals_Expedition",
          "nameCN": "猎人元帅远征军",
          "path": "assets/images/icons/The Empire/The_Huntsmarshals_Expedition.png"
        },
        {
          "name": "Cult_of_Sigmar",
          "nameCN": "西格玛教会",
          "path": "assets/images/icons/The Empire/Cult_of_Sigmar.png"
        }
      ]
    },
    {
      "directory": "Grand Cathay",
      "nameCN": "震旦天朝",
      "files": [
        {
          "name": "The_Jade_Court",
          "nameCN": "玉廷",
          "path": "assets/images/icons/Grand Cathay/The_Jade_Court.png"
        },
        {
          "name": "The_Northern_Provinces",
          "nameCN": "卫北列省",
          "path": "assets/images/icons/Grand Cathay/The_Northern_Provinces.png"
        },
        {
          "name": "The_Western_Provinces",
          "nameCN": "卫西列省",
          "path": "assets/images/icons/Grand Cathay/The_Western_Provinces.png"
        }
      ]
    },
    {
      "directory": "Greenskins",
      "nameCN": "绿皮",
      "files": [
        {
          "name": "Bonerattlaz",
          "nameCN": "响骨",
          "path": "assets/images/icons/Greenskins/Bonerattlaz.png"
        },
        {
          "name": "Broken_Axe",
          "nameCN": "碎斧",
          "path": "assets/images/icons/Greenskins/Broken_Axe.png"
        },
        {
          "name": "Crooked_Moon",
          "nameCN": "邪月",
          "path": "assets/images/icons/Greenskins/Crooked_Moon.png"
        },
        {
          "name": "Grimgors_Ardboyz",
          "nameCN": "格里姆格的狠小子",
          "path": "assets/images/icons/Greenskins/Grimgors_Ardboyz.png"
        },
        {
          "name": "The_Bloody_Handz",
          "nameCN": "血手",
          "path": "assets/images/icons/Greenskins/The_Bloody_Handz.png"
        }
      ]
    },
    {
      "directory": "High Elves",
      "nameCN": "高等精灵",
      "files": [
        {
          "name": "Avelorn",
          "nameCN": "阿瓦隆",
          "path": "assets/images/icons/High Elves/Avelorn.png"
        },
        {
          "name": "Eataine",
          "nameCN": "伊泰恩",
          "path": "assets/images/icons/High Elves/Eataine.png"
        },
        {
          "name": "Knights_of_Caledor",
          "nameCN": "卡勒多骑士",
          "path": "assets/images/icons/High Elves/Knights_of_Caledor.png"
        },
        {
          "name": "Nagarythe",
          "nameCN": "纳迦瑞斯",
          "path": "assets/images/icons/High Elves/Nagarythe.png"
        },
        {
          "name": "Order_of_Loremasters",
          "nameCN": "魔剑士议会",
          "path": "assets/images/icons/High Elves/Order_of_Loremasters.png"
        },
        {
          "name": "Yvresse",
          "nameCN": "伊瑞斯",
          "path": "assets/images/icons/High Elves/Yvresse.png"
        }
      ]
    },
    {
      "directory": "Khorne",
      "nameCN": "恐虐",
      "files": [
        {
          "name": "Exiles_of_Khorne",
          "nameCN": "恐虐流放者",
          "path": "assets/images/icons/Khorne/Exiles_of_Khorne.png"
        }
      ]
    },
    {
      "directory": "Kislev",
      "nameCN": "基斯里夫",
      "files": [
        {
          "name": "Daughters_of_the_Forest",
          "nameCN": "森林之女",
          "path": "assets/images/icons/Kislev/Daughters_of_the_Forest.png"
        },
        // {
        //   "name": "Kislev_Expedition",
        //   "nameCN": "冰雪王廷",
        //   "path": "assets/images/icons/Kislev/Kislev_Expedition.png"
        // },
        {
          "name": "The_Great_Orthodoxy",
          "nameCN": "大正教会",
          "path": "assets/images/icons/Kislev/The_Great_Orthodoxy.png"
        },
        {
          "name": "The_Ice_Court",
          "nameCN": "冰雪王廷",
          "path": "assets/images/icons/Kislev/The_Ice_Court.png"
        },
        {
          "name": "Ursun_Revivalists",
          "nameCN": "厄孙复兴者",
          "path": "assets/images/icons/Kislev/Ursun_Revivalists.png"
        }
      ]
    },
    {
      "directory": "Lizardmen",
      "nameCN": "蜥蜴人",
      "files": [
        {
          "name": "Cult_of_Sotek",
          "nameCN": "索提戈教派",
          "path": "assets/images/icons/Lizardmen/Cult_of_Sotek.png"
        },
        {
          "name": "Ghosts_of_Pahuax",
          "nameCN": "帕花科斯幽灵",
          "path": "assets/images/icons/Lizardmen/Ghosts_of_Pahuax.png"
        },
        {
          "name": "Hexoatl",
          "nameCN": "赫斯欧塔",
          "path": "assets/images/icons/Lizardmen/Hexoatl.png"
        },
        {
          "name": "Itza",
          "nameCN": "伊塔扎",
          "path": "assets/images/icons/Lizardmen/Itza.png"
        },
        {
          "name": "Last_Defenders",
          "nameCN": "最后守卫者",
          "path": "assets/images/icons/Lizardmen/Last_Defenders.png"
        },
        {
          "name": "Spirit_of_the_Jungle",
          "nameCN": "丛林精魂",
          "path": "assets/images/icons/Lizardmen/Spirit_of_the_Jungle.png"
        },
        {
          "name": "Tlaqua",
          "nameCN": "塔拉夸",
          "path": "assets/images/icons/Lizardmen/Tlaqua.png"
        }
      ]
    },
    {
      "directory": "Norsca",
      "nameCN": "诺斯卡",
      "files": [
        {
          "name": "Wintertooth",
          "nameCN": "冬牙",
          "path": "assets/images/icons/Norsca/Wintertooth.png"
        },
        {
          "name": "World_Walkers",
          "nameCN": "世界行者",
          "path": "assets/images/icons/Norsca/World_Walkers.png"
        }
      ]
    },
    {
      "directory": "Nurgle",
      "nameCN": "纳垢",
      "files": [
        {
          "name": "Poxmakers_of_Nurgle",
          "nameCN": "纳垢驭疹官",
          "path": "assets/images/icons/Nurgle/Poxmakers_of_Nurgle.png"
        }
      ]
    },
    {
      "directory": "Ogre Kingdoms",
      "nameCN": "食人魔王国",
      "files": [
        {
          "name": "Goldtooth",
          "nameCN": "金牙",
          "path": "assets/images/icons/Ogre Kingdoms/Goldtooth.png"
        },
        {
          "name": "Disciples_of_the_Maw",
          "nameCN": "大胃信徒",
          "path": "assets/images/icons/Ogre Kingdoms/Disciples_of_the_Maw.png"
        }
      ]
    },
    {
      "directory": "Skaven",
      "nameCN": "斯卡文鼠人",
      "files": [
        {
          "name": "Clan_Mors",
          "nameCN": "摩斯氏族",
          "path": "assets/images/icons/Skaven/Clan_Mors.png"
        },
        {
          "name": "Clan_Pestilens",
          "nameCN": "疫病氏族",
          "path": "assets/images/icons/Skaven/Clan_Pestilens.png"
        },
        {
          "name": "Clan_Rictus",
          "nameCN": "咧嘴氏族",
          "path": "assets/images/icons/Skaven/Clan_Rictus.png"
        },
        {
          "name": "Clan_Skryre",
          "nameCN": "史库里氏族",
          "path": "assets/images/icons/Skaven/Clan_Skryre.png"
        },
        {
          "name": "Clan_Eshin",
          "nameCN": "艾辛氏族",
          "path": "assets/images/icons/Skaven/Clan_Eshin.png"
        },
        {
          "name": "Clan_Moulder",
          "nameCN": "腐坏氏族",
          "path": "assets/images/icons/Skaven/Clan_Moulder.png"
        }
      ]
    },
    {
      "directory": "Slaanesh",
      "nameCN": "色孽",
      "files": [
        {
          "name": "Seducers_of_Slaanesh",
          "nameCN": "色孽迷魂者",
          "path": "assets/images/icons/Slaanesh/Seducers_of_Slaanesh.png"
        }
      ]
    },
    {
      "directory": "Tomb Kings",
      "nameCN": "古墓王",
      "files": [
        {
          "name": "Khemri",
          "nameCN": "喀穆里",
          "path": "assets/images/icons/Tomb Kings/Khemri.png"
        },
        {
          "name": "Exiles_of_Nehek",
          "nameCN": "尼科放逐者",
          "path": "assets/images/icons/Tomb Kings/Exiles_of_Nehek.png"
        },
        {
          "name": "Court_of_Lybaras",
          "nameCN": "莱巴拉斯宫廷",
          "path": "assets/images/icons/Tomb Kings/Court_of_Lybaras.png"
        },
        {
          "name": "Followers_of_Nagash",
          "nameCN": "纳迦什信徒",
          "path": "assets/images/icons/Tomb Kings/Followers_of_Nagash.png"
        },

      ]
    },
    {
      "directory": "Tzeentch",
      "nameCN": "奸奇",
      "files": [
        {
          "name": "Oracles_of_Tzeentch",
          "nameCN": "奸奇传谕使",
          "path": "assets/images/icons/Tzeentch/Oracles_of_Tzeentch.png"
        },
        {
          "name": "The_Deceivers",
          "nameCN": "诓诈者",
          "path": "assets/images/icons/Tzeentch/The_Deceivers.png"
        }
      ]
    },
    {
      "directory": "Vampire Coast",
      "nameCN": "吸血鬼海岸",
      "files": [
        {
          "name": "The_Awakened",
          "nameCN": "觉醒者",
          "path": "assets/images/icons/Vampire Coast/The_Awakened.png"
        },
        {
          "name": "The_Dreadfleet",
          "nameCN": "恐惧舰队",
          "path": "assets/images/icons/Vampire Coast/The_Dreadfleet.png"
        },
        {
          "name": "Pirates_of_Sartosa",
          "nameCN": "萨图沙海盗",
          "path": "assets/images/icons/Vampire Coast/Pirates_of_Sartosa.png"
        },
        {
          "name": "The_Drowned",
          "nameCN": "溺亡者",
          "path": "assets/images/icons/Vampire Coast/The_Drowned.png"
        }
      ]
    },
    {
      "directory": "Vampire Counts",
      "nameCN": "吸血鬼伯爵",
      "files": [
        {
          "name": "The_Drakenhof_Conclave",
          "nameCN": "邓肯霍夫秘会",
          "path": "assets/images/icons/Vampire Counts/The_Drakenhof_Conclave.png"
        },
        {
          "name": "The_Barrow_Legion",
          "nameCN": "古坟军团",
          "path": "assets/images/icons/Vampire Counts/The_Barrow_Legion.png"
        },
        {
          "name": "Sylvania",
          "nameCN": "希尔瓦尼亚",
          "path": "assets/images/icons/Vampire Counts/Sylvania.png"
        },
        {
          "name": "Caravan_of_Blue_Roses",
          "nameCN": "蓝玫瑰车队",
          "path": "assets/images/icons/Vampire Counts/Caravan_of_Blue_Roses.png"
        }
      ]
    },
    {
      "directory": "Warriors of Chaos",
      "nameCN": "混沌勇士",
      "files": [
        {
          "name": "Warhost_of_the_Apocalypse",
          "nameCN": "天启战帮",
          "path": "assets/images/icons/Warriors of Chaos/Warhost_of_the_Apocalypse.png"
        },
        {
          "name": "Heralds_of_the_Tempest",
          "nameCN": "风暴使者",
          "path": "assets/images/icons/Warriors of Chaos/Heralds_of_the_Tempest.png"
        },
        {
          "name": "The_Decadent_Host",
          "nameCN": "颓堕大军",
          "path": "assets/images/icons/Warriors of Chaos/The_Decadent_Host.png"
        },
        {
          "name": "The_Ecstatic_Legions",
          "nameCN": "欣狂军团",
          "path": "assets/images/icons/Warriors of Chaos/The_Ecstatic_Legions.png"
        },
        {
          "name": "The_Fecundites",
          "nameCN": "猖殖聚群",
          "path": "assets/images/icons/Warriors of Chaos/The_Fecundites.png"
        },
        {
          "name": "Legion_of_the_Gorequeen",
          "nameCN": "鲜血女王军团",
          "path": "assets/images/icons/Warriors of Chaos/Legion_of_the_Gorequeen.png"
        },
        {
          "name": "Puppets_of_Misrule",
          "nameCN": "暴政傀儡",
          "path": "assets/images/icons/Warriors of Chaos/Puppets_of_Misrule.png"
        },
        {
          "name": "Shadow_Legion",
          "nameCN": "暗影军团",
          "path": "assets/images/icons/Warriors of Chaos/Shadow_Legion.png"
        }
      ]
    },
    {
      "directory": "Wood Elves",
      "nameCN": "木精灵",
      "files": [
        {
          "name": "Talsyn",
          "nameCN": "塔塞恩",
          "path": "assets/images/icons/Wood Elves/Talsyn.png"
        },
        {
          "name": "Argwylon",
          "nameCN": "阿格维隆",
          "path": "assets/images/icons/Wood Elves/Argwylon.png"
        },
        {
          "name": "Heralds_of_Ariel",
          "nameCN": "艾瑞尔军锋",
          "path": "assets/images/icons/Wood Elves/Heralds_of_Ariel.png"
        },
        {
          "name": "Wargrove_of_Woe",
          "nameCN": "灾厄战林",
          "path": "assets/images/icons/Wood Elves/Wargrove_of_Woe.png"
        }
      ]
    }
  ]

  public onImgBoxClick(item: IImageFile): void {
    console.log(item)
  }
}
