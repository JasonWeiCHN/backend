import {
  IWarhammerClassifier,
  IWarhammerClassifierMap
} from '../../interfaces/warhammer-classifier/warhammer-classifier.interface';

export const WARHAMMER_CLASSIFIERS: IWarhammerClassifier[] = [
  {
    'nameCN': '野兽人',
    'files': [{
      'heroNickName': '独眼',
      'heroAvatarPath': 'assets/images/lords/beastmen-khazrak-the-one-eye.png',
      'path': 'assets/images/icons/Beastmen/Warherd_of_the_One-Eye.png',
      'name': 'Warherd_of_the_One-Eye',
      'nameCN': '独眼战兽群',
      'description': '<p>开局攻下劳伦洛伦，竖立万魔岩创造“血域”。</p><p>这里是帝国的腹地，周围任何人都可以是我们的敌人，最有实力者，是“皇帝·卡尔·弗兰茨”。</p><p>向南方进攻，摧毁米登领，就能打通前往“阿尔道夫”的道路。</p><p>隐蔽营地可以隐藏部队，卡扎克·独眼拥有很高的伏击率，进入战场后，大量先锋部署的部队，可以让我们占得先机。</p><p>利用好角兽群先锋部署和潜行，即可轻易撕碎帝国的部队。</p><p>攻下“阿尔道夫”，灭掉“皇帝·卡尔·弗兰茨”，即可完成破局。</p>',
      'id': 'Warherd_of_the_One_Eye',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '卡扎克·独眼',
      'order': 1
    }, {
      'heroNickName': '鸦父',
      'heroAvatarPath': 'assets/images/lords/beastmen-malagor-the-dark-omen.png',
      'path': 'assets/images/icons/Beastmen/Harbinger_of_Disaster.png',
      'name': 'Harbinger_of_Disaster',
      'nameCN': '灾厄先驱',
      'description': '<p>开局攻下“赫尔纳齐洼地”，竖立万魔岩创造“血域”。</p><p>宣战顶髻，和斯卡布兰德一起瓜分他的地盘。</p><p>之后我们可以随意发展。</p><p>马拉戈·黑暗征兆的核心玩法是利用“隐蔽营地”悄然接近敌人，发起伏击。</p><p>前期以练级为主，升到12级可以点“特殊线”，最快点出“群鸦蔽日”学会“无尽群鸦盛宴”，就可以让敌人感受无尽的痛苦。</p><p>消灭附近所有的派系。</p>',
      'id': 'Harbinger_of_Disaster',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '马拉戈·黑暗征兆',
      'order': 2
    }, {
      'heroNickName': '蘑菇儿',
      'heroAvatarPath': 'assets/images/lords/beastmen-morghur-the-shadowgave.png',
      'path': 'assets/images/icons/Beastmen/Warherd_of_the_Shadowgave.png',
      'name': 'Warherd_of_the_Shadowgave',
      'nameCN': '影孽战兽群',
      'description': '<p>开局攻下“蒙特纳斯”，竖立万魔岩创造“血域”。</p><p>向南进军，快速拿下整个“埃斯塔利亚”，敌人是帝国派系“南方王国”，然后可以进攻“湖神仙女”。</p><p>魔古尔·影孽的核心玩法是利用被动技能“卑鄙嬗变光环”的烧血效果消耗敌军兵模，回血光环可以恢复自身血量。</p><p>小模组、高移速，让影孽成为“移动烧血机”。</p><p>大量的角兽群结合混沌之卵可以对敌人进行毁灭打击。</p><p>攻下“卡尔卡松”，即可破局。</p>',
      'id': 'Warherd_of_the_Shadowgave',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '魔古尔·影孽',
      'order': 3
    }, {
      'heroNickName': '牛牛、勇敢牛牛',
      'heroAvatarPath': 'assets/images/lords/beastmen-taurox-the-brass-bull.png',
      'path': 'assets/images/icons/Beastmen/Slaughterhorn_Tribe.png',
      'name': 'Slaughterhorn_Tribe',
      'nameCN': '屠灭之角部落',
      'description': '<p>开局攻下“克拉卡隆德”，竖立万魔岩创造“血域”。</p><p>一路向东，敌人都是黑暗精灵，先消灭挡住前路的塞洛斯塔·恐怖之鳍，最后和“影王”阿里斯·安纳尔进行终极对决。</p><p>陶诺斯·铜牛拥有强大的物理输出和高护甲，他能身先士卒带领牛头怪部队轻易摧毁敌人的防线，结合战獒的高速迂回战术，轻松击败敌人。</p><p>消灭阿里斯·安纳尔之后，即可破局。</p>',
      'id': 'Slaughterhorn_Tribe',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '陶诺斯·铜牛',
      'order': 4
    }],
    'id': 'Beastmen',
    'directory': 'Beastmen',
    'order': 1
  }, {
    'nameCN': '巴托尼亚',
    'files': [{
      'heroNickName': '牢恩',
      'heroAvatarPath': 'assets/images/lords/bretonnia-louen-leoncoeur.png',
      'path': 'assets/images/icons/Bretonnia/Couronne.png',
      'name': 'Couronne',
      'nameCN': '哥隆尼',
      'description': '<p>第一场战争会考验玩家使用骑兵的能力，攻下“勒·安古朗”。</p><p>前期最难缠的敌人是绿皮派系“大肚王·咕噜”，先消灭吸血鬼伯爵派系“穆席隆”，进攻奥卡山。</p><p>警惕西北方的混沌勇士“比拉克”，他随时可能穿过奥比恩海峡入侵你。</p><p>劳恩·列奥康沃尔是一位伟大的巴托国王，在战场上利用好骑兵部队，他们拥有很多优异的加成效果。</p><p>搭配抗线的老农部队，善用士气打击，进行机动作战，就能取得不错的战果。</p><p>消灭大肚王·咕噜，即可破局。</p>',
      'id': 'Couronne',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '劳恩·列奥康沃尔',
      'order': 1
    }, {
      'heroNickName': '海产王',
      'heroAvatarPath': 'assets/images/lords/bretonnia-alberic-de-bordeleaux.png',
      'path': 'assets/images/icons/Bretonnia/Bordeleaux_Errant.png',
      'name': 'Bordeleaux_Errant',
      'nameCN': '波尔德洛长征军',
      'description': '<p>攻下“扎慧塔克”和“塔拉克斯兰”统一“食人鱼沼泽”。</p><p>接下来主要的敌人是吸血鬼海盗“卢瑟·哈肯”和南方的蜥蜴人“哥罗克”。</p><p>艾博里克·德·波尔德罗的技能“恢弘打击”拥有反大加成，再加上“波尔德罗冠军勇士”，使得他的“王国骑士”非常适合攻击蜥蜴人这种大型部队较多的派系。</p><p>善用骑兵，依靠机动迂回的战术，可以取得不错的效果。</p><p>消灭卢瑟·哈肯和哥罗克，即可破局。</p>',
      'id': 'Bordeleaux_Errant',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '艾博里克·德·波尔德罗',
      'order': 2
    }, {
      'heroNickName': '湖女',
      'heroAvatarPath': 'assets/images/lords/bretonnia-fay-enchantress.png',
      'path': 'assets/images/icons/Bretonnia/Carcassonne.png',
      'name': 'Carcassonne',
      'nameCN': '卡尔卡松',
      'description': '<p>初始战的敌人是绿皮派系“红云”，依靠强大的神佑投石机和圣杯骑士，可以轻松击败他们。</p><p>接下来，快速集结部队，消灭盘踞在奥卡山的大肚王·咕噜。</p><p>警惕南方的斯卡文鼠人“伊克特·利爪”和游牧野兽人派系“魔古尔·影孽”。</p><p>湖神仙女开局就有神佑投石机和圣杯骑士，强大的巴托尼亚骑士领主，再加上大量的老农部队。</p><p>在战场上有着强悍的实力。</p><p>消灭大肚王·咕噜，即可破局。</p>',
      'id': 'Carcassonne',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '湖神仙女',
      'order': 3
    }, {
      'heroNickName': '女骑士、贞德',
      'heroAvatarPath': 'assets/images/lords/bretonnia-repanse-de-lyonesse.png',
      'path': 'assets/images/icons/Bretonnia/Chevaliers_de_Lyonesse.png',
      'name': 'Chevaliers_de_Lyonesse',
      'nameCN': '里昂尼斯骑士战团',
      'description': '<p>攻下“费拉斯”和“亥卡”统一“阿拉比海岸”。</p><p>通过外交与“欧瑞格骑士”合邦，进攻西南方的“术士群岛”，那里是古墓王“黑色·阿克汉”的地盘。</p><p>也可以东进或南下，选择很多。</p><p>赫潘丝·德·里昂尼斯是一位强大的少女骑士，拥有爆炸技能“少女之怒”，可以反复爆炸击杀敌军。</p><p>升到9级后点出“放逐天灾”能让她的部队获得高额加成，在对付吸血鬼和古墓王派系时得心应手。</p><p>强大的骑士部队在发起冲锋后能给予敌人致命一击。</p>',
      'id': 'Chevaliers_de_Lyonesse',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '赫潘丝·德·里昂尼斯',
      'order': 4
    }],
    'id': 'Bretonnia',
    'directory': 'Bretonnia',
    'order': 2
  }, {
    'nameCN': '混沌矮人',
    'files': [{
      'heroNickName': '铁手',
      'heroAvatarPath': 'assets/images/lords/chaos-dwarves-astragoth-ironhand.png',
      'path': 'assets/images/icons/Chaos Dwarfs/Disciples_of_Hashut.png',
      'name': 'Disciples_of_Hashut',
      'nameCN': '哈苏特信徒',
      'description': '<p>攻下“巨颅湖”和“德兹内沃特要塞”，灭掉扎尔之奴，统一“骸骨高原”。</p><p>这里是一个分水岭，再招募一个领主组建副队，招巨型魔牛，去攻打“莱弥亚姐妹会”，这是西南方的“吸血鬼伯爵”派系。</p><p>主队则直接向北通过“达尔斯拉夫要塞”，穿越戈罗迈德尼山脉，进攻创新大师“马拉凯·马凯森”。</p><br/><p>阿斯特戈斯·铁手是一个“魔武双休”的传奇领主。神器任务的奖励品“石披风”增加高额的物抗，廉价的魔法技能“杀戮之火”，极大提升了铁手的初期实力。</p><br/><p>大地精弓箭手向敌人发射无尽的箭雨，大地精卑鄙潜伏者与领主组合进行包抄和士气打击。传奇事务官“戈度兹·暗算者”能提供强大的加成，尽快招募他。</p><br/><p>消灭创新大师“马拉凯·马凯森”，即可破局。</p>',
      'id': 'Disciples_of_Hashut',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '阿斯特戈斯·铁手',
      'order': 1
    }, {
      'heroNickName': '灰烬',
      'heroAvatarPath': 'assets/images/lords/chaos-dwarves-drazhoath-the-ashen.png',
      'path': 'assets/images/icons/Chaos Dwarfs/The_Legion_of_Azgorh.png',
      'name': 'The_Legion_of_Azgorh',
      'nameCN': '阿佐格军团',
      'description': '<p>攻下“前哨站”和“黑堡”，消灭黑暗之地兽人，统一“呼啸荒原”。</p><br/><p>如果节奏合适，我们会在西北的“灰魔女山”碰到斯卡文鼠人派系“崔特思·畏尾”的主力。利用伏击消灭他们，占领他们的地盘后，转向南方，与骸骨平原上的“龙王子.伊姆瑞克”对决。</p><br/><p>灰烬·德拉兹霍斯是一位强大的“哈苏特系”法师，但他也有很强的近战肉搏能力。</p><p>升到12级后点出特殊线的“长期流亡”和“灰烬”。</p><p>长期流亡可以用很低的魔法施放“阿佐格烈焰”。</p><p>灰烬能获得“魔屏”。</p><p>神器任务的奖励品“魔怨坩埚”可以随着杀敌数的增加提升法术精通，还有“地狱碎片护符”可以反弹近战伤害。</p><p>武装车队派往邓肯霍夫城堡可以获得回血。</p><br/><p>有了魔屏、回血和近战反伤后，灰烬·德拉兹霍斯可以一个人深入敌阵，杀伤敌军。</p><br/><p>前期的敌人主要是鼠人和高等精灵，大地精弓箭手的性价比不高，混沌矮人的领主们属性优秀，所以我们可以选择用大地精卑鄙者与领主结合，利用法术，潜行后消灭敌人后排，打偷袭战术为佳。</p><br/><p>消灭掉“崔特思·畏尾”和“伊姆瑞克”，即可破局。</p>',
      'id': 'The_Legion_of_Azgorh',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '灰烬·德拉兹霍斯',
      'order': 2
    }, {
      'heroNickName': '扎坦',
      'heroAvatarPath': 'assets/images/lords/chaos-dwarves-zhatan-the-black.png',
      'path': 'assets/images/icons/Chaos Dwarfs/The_Warhost_of_Zharr.png',
      'name': 'The_Warhost_of_Zharr',
      'nameCN': '扎尔战团',
      'description': '<p>攻下“千眼要塞”统一“岩天矮丘”。</p><p>一路向东进军，拿下“鳌门关”、“龙门关”、“蝰门关”。</p><p>掌握“三关”对我们来说至关重要。</p><br/><p>主要的敌人是混沌勇士“诅咒灵·维里奇”和震旦天朝“飙龙·妙影”。</p><br/><p>黑心·扎坦的加成在于步兵和战争机器，再加上传奇事务官“戈度兹·暗算者”的高加成。 我们的部队用大地精弓箭手和大地精卑鄙潜伏者组合，使用得当，就能发挥恐怖的作战能力。</p><br/><p>消灭“诅咒灵·维里奇”和“飙龙·妙影”，即可破局。</p>',
      'id': 'The_Warhost_of_Zharr',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '黑心·扎坦',
      'order': 3
    }],
    'id': 'Chaos_Dwarfs',
    'directory': 'Chaos Dwarfs',
    'order': 3
  }, {
    'nameCN': '混沌恶魔',
    'files': [{
      'heroNickName': '恶魔亲王',
      'heroAvatarPath': 'assets/images/lords/legion-of-chaos-daemon-prince.png',
      'path': 'assets/images/icons/Daemons of Chaos/Legion_of_Chaos.png',
      'name': 'Legion_of_Chaos',
      'nameCN': '混沌大军',
      'description': '<p>这是一个玩法多样化，甚至随心所欲的派系。</p><p>可以自由组合混沌四神派系的部队，或者说四神部队都为你所用。</p><br/><p>攻下“衰败森林”、“蝇塔”、“呕胆崖”统一“恶臭肿瘤”。</p><p>向东进军攻打奸奇派系“全视之眼”，占领火山之心，之后会遇到主要的对手“马鲁斯·黑刃”。</p><br/><p>部队组合很自由，我推荐“恐虐”与“色孽”组合，拥有恐怖的肉搏能力，也可以选择“恐虐”与“奸奇”，如果你喜欢“射爆流”玩法。</p><p>“纳垢”与“色孽”或“奸奇”也是一种组合方案。</p><p>恶魔亲王的装备也有很多选择，可随意调整，十分强力。</p><br/><p>消灭“马鲁斯·黑刃”，即可破局。</p>',
      'id': 'Legion_of_Chaos',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '恶魔亲王',
      'order': 1
    }],
    'id': 'Daemons_of_Chaos',
    'directory': 'Daemons of Chaos',
    'order': 4
  }, {
    'nameCN': '黑暗精灵',
    'files': [{
      'heroNickName': '鸡丝、麻辣鸡丝、耐烧王、真凤凰王',
      'heroAvatarPath': 'assets/images/lords/dark-elves-malekith.png',
      'path': 'assets/images/icons/Dark Elves/Naggarond.png',
      'name': 'Naggarond',
      'nameCN': '纳迦隆德',
      'description': '<p>开局攻下“哈尔·卡拉卓”, 直接直奔西南，拿下“锐克杜山下”。</p><p>如果速度不够快，斯卡文鼠人的派系会控制南方的“凯恩神殿”，给我们造成不小的麻烦。</p><p>我们需要截住敌人的主力,返回终极黑暗祭坛。</p><p>这时白矮人·格瑞姆布林戴尔的主力也会到达此地，我们需要消灭他们。</p><p>穿过白矮人的领土,从“夸格兹深渊”进行战略迂回, 消灭“影王”阿里斯·安纳尔。</p><p>注意与北方“瓦尔基娅”的外交关系，避免双线作战。</p><br/><p>纳迦罗斯的巫王“马雷基斯”是一位魔武双修的领主，先加法师技能点。</p><p>“利刃狂风”和“窃魂术”都是核心技能，升到12级后点特殊线技能，可以给派系带来非常大的加成。</p><p>搭配极其强力的射爆体系，黑暗精灵的作战能力非常优秀。</p><br/><p>消灭格瑞姆布林戴和阿里斯·安纳尔之后，即可破局。</p>',
      'id': 'Naggarond',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '马雷基斯',
      'order': 1
    }, {
      'heroNickName': '莫大妈',
      'heroAvatarPath': 'assets/images/lords/dark-elves-morathi.png',
      'path': 'assets/images/icons/Dark Elves/Cult_of_Pleasure.png',
      'name': 'Cult_of_Pleasure',
      'nameCN': '欢愉教派',
      'description': '<p>开局攻下“石化森林”和“希拉卓·塔尔”。</p><p>在“铁刺镇”向北迂回的同时消灭斯卡文鼠人，就可以到达“海格之厅”，消灭“奥斯坦基娅嬷嬷”，从凄凉海岸的“碎月山”渡海进攻奥苏安。</p><p>这是一个比较完美的闭环路线。</p><br/><p>莫拉斯是至高女巫，拥有极强的法术输出能力。</p><p>前期加完法师技能后，可以适当保留技能点，用来加特殊线。</p><p>“幽暗深渊”技能有着强大的输出伤害，结合黑暗精灵领主的优秀属性，可以发挥强大的作战能力。</p><br/><p>迂回后，消灭奥斯坦基娅嬷嬷，即可破局。</p>',
      'id': 'Cult_of_Pleasure',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '莫拉丝',
      'order': 2
    }, {
      'heroNickName': '妖婆',
      'heroAvatarPath': 'assets/images/lords/dark-elves-crone-hellebron.png',
      'path': 'assets/images/icons/Dark Elves/Har_Ganeth.png',
      'name': 'Har_Ganeth',
      'nameCN': '哈尔·冈西',
      'description': '<p>消灭绿皮派系“破笼者”，他的领土都属于你。</p><p>注意与混沌勇士“瓦尔基娅”的外交关系，不要与“戈隆德”签订任何条约。</p><p>占领“纳格尔”后渡海登录“破败之地”。</p><p>可以通过“加入战斗”的方式迷惑“影王”阿里斯·安纳尔，再伺机一举消灭他，接着直奔奥苏安。</p><br/><p>妖婆赫莉本是一位敏捷的杀手，擅长单挑并斩杀敌方领主。</p><p>快速练级，解锁坐骑“沸腾血池”。</p><p>在特殊线点出“血腥女王”，增加重生能力。</p><p>沸腾血池作为一个多模组攻击的小型判定单位，加上烧血光环，让妖婆赫莉本拥有了非常恐怖的无双能力。</p><br/><p>消灭阿里斯·安纳尔，即可破局。</p>',
      'id': 'Har_Ganeth',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '妖婆赫莉本',
      'order': 3
    }, {
      'heroNickName': '章鱼脸',
      'heroAvatarPath': 'assets/images/lords/dark-elves-lokhir-fellheart.png',
      'path': 'assets/images/icons/Dark Elves/The_Blessed_Dread.png',
      'name': 'The_Blessed_Dread',
      'nameCN': '神佑恶党',
      'description': '<p>攻下“北齐”，敌人是吸血鬼海岸派系“死旗舰队”。</p><p>和“艾辛氏族”建立友好的外交关系，之后就可以进攻“镔龙·昭明”，注意与蜥蜴人“纳卡伊”的外交关系。</p><p>也可以灭掉蜥蜴人，也是一种简单实在的战略选择。</p><br/><p>开局位置很好，利于发展。</p><br/><p>核心玩法通过占领港口主城，招募“黑色方舟”。</p><p>用很低的维护费组件大量的军队，进行海岸侵袭。</p><br/><p>洛克西亚·堕落之心是一个非常“硬”的近战领主。</p><p>领主本队的“黑色方舟海盗部队”可以获得高额的加成。</p><p>获得坐骑黑龙“波涛漩涡”之后，可以给予敌人致命一击。</p><br/><p>消灭镔龙·昭明，即可破局。</p>',
      'id': 'The_Blessed_Dread',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '洛克西亚·堕落之心',
      'order': 4
    }, {
      'heroNickName': '小马哥',
      'heroAvatarPath': 'assets/images/lords/dark-elves-malus-darkblade.png',
      'path': 'assets/images/icons/Dark Elves/Hag_Graef.png',
      'name': 'Hag_Graef',
      'nameCN': '海格·葛雷夫',
      'description': '<p>攻下“黑岩”，消灭奸奇派系“零落命轮”。</p><p>我们的主要敌人是“恶魔亲王”，一路向东，消灭他们。</p><p>之后就可以随心所欲的洗劫占领了。</p><br/><p>马鲁斯·黑刃是为数不多的，开局就能进行“无双”，深入敌阵的领主。</p><p>他拥有超强的体魄，还能变身“扎坎”，等于拥有两次生命。</p><br/><p>通过“炼金药”驱逐扎坎快速发展，或者是让扎坎完全附身，增强部队的作战能力。</p><br/><p>消灭恶魔亲王，即可破局。</p>',
      'id': 'Hag_Graef',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '马鲁斯·黑刃',
      'order': 5
    }, {
      'heroNickName': '歪嘴、动物朋友',
      'heroAvatarPath': 'assets/images/lords/dark-elves-rakarth.png',
      'path': 'assets/images/icons/Dark Elves/The_Thousand_Maws.png',
      'name': 'The_Thousand_Maws',
      'nameCN': '千噬',
      'description': '<p>消灭“瑟提哨站”，统一“海龟群岛”。</p><p>接下来是一个选择点，北上进攻玉龙·元伯，或者南下进攻“蛇神先知”特亨霍因。</p><p>从战略上来说，进攻特亨霍因比玉龙·元伯好，因为可以得到稳定的发展地盘。</p><br/><p>拉卡斯是驯兽师，自身作战能力并不算强。</p><p>可以招募大量的强力怪兽来进行战斗，所以拉卡斯是黑精派系中最需要操作的。</p><p>大量的野兽单位能如巨浪般的淹没敌人，正面冲击就行，也可以包抄，敌人都会被轻易摧毁。</p><br/><p>消灭玉龙·元伯或特亨霍因，即可破局。</p>',
      'id': 'The_Thousand_Maws',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '拉卡斯',
      'order': 6
    }],
    'id': 'Dark_Elves',
    'directory': 'Dark Elves',
    'order': 5
  }, {
    'nameCN': '矮人',
    'files': [{
      'heroNickName': '至高王、短人王',
      'heroAvatarPath': 'assets/images/lords/dwarves-thorgrim-grudgebearer.png',
      'path': 'assets/images/icons/Dwarfs/Karaz-a-Karak.png',
      'name': 'Karaz-a-Karak',
      'nameCN': '卡拉扎-阿-卡拉克',
      'description': '<p>向东攻下“葛朗尼石厅”、“史奎格独角山”，统一“白银之路”。</p><p>敌人是绿皮派系“血矛”，他们只是个小威胁。</p><p>招募副领主，攻下“至高之地”后，我们会遇上邪月“史卡斯尼克”的主力。</p><p>可以伏击，抓住机会消灭他们。</p><p>也可以直接突进上去干。</p><p>前期主力作战单位是雷管矿工。</p><br/><p>索尔格林是一位非常“硬”的矮人传奇领主。</p><p>大师级恶怨符文是他的主要输出手段。</p><p>先点红线，留点加特殊线技能。</p><br/><p>消灭史卡斯尼克，即可破局。</p>',
      'id': 'Karaz_a_Karak',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '索尔葛林·负怨者',
      'order': 1
    }, {
      'heroNickName': '屠夫王',
      'heroAvatarPath': 'assets/images/lords/dwarves-ungrim-ironfist.png',
      'path': 'assets/images/icons/Dwarfs/Karak_Kadrin.png',
      'name': 'Karak_Kadrin',
      'nameCN': '卡拉克·卡德林',
      'description': '<p>攻下“纳施拉克巢穴”。</p><p>可以考虑兵分两路。</p><p>主队向南进攻“殇王山”、“葛罗姆峰”，拿下“肋骨峰”。</p><p>通过“穿行地道”进入东面的“刚巴德峰”。</p><p>建造“攻城工坊”出投石车，招募副队向北偷袭绿皮派系“响骨”阿兹汗·屠灭者。</p><p>我们被两个绿皮派系夹在中间，如果不先动手，就会陷入腹背受敌的困境。</p><br/><p>阿格里姆·铁拳是一位传奇屠夫领主。</p><p>拥有非常强的战斗能力，特性“永不战败”，大师级恶怨符文加上很强的近战能力，让他成为“斩将”好手。</p><p>但也要小心，撤退不及时可能暴毙。</p><p>开局就是二本城，可以出投石机，也可以用矿工（雷管）和重矢弩手开局。</p><br/><p>消灭阿兹汗·屠灭者和史卡斯尼克，即可破局。</p>',
      'id': 'Karak_Kadrin',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '阿格里姆·铁拳',
      'order': 2
    }, {
      'heroNickName': '贝勒爷',
      'heroAvatarPath': 'assets/images/lords/dwarves-belegar-ironhammer.png',
      'path': 'assets/images/icons/Dwarfs/Clan_Angrund.png',
      'name': 'Clan_Angrund',
      'nameCN': '安格朗德氏族',
      'description': '<p>攻下“卡拉克·卜达尔”，“卡拉克·铜山堡”，统一“山底洞窟”。</p><p>与“卡拉克·号角堡”合邦。</p><p>接下来有三种发展思路：</p><p>思路一，守卫家园，这是一种求稳的玩法。把与自己接壤或临近的敌人逐一消灭，包括史库里氏族-伊克特·利爪、萨图沙海盗-盐怨和大胃信徒-斯卡拉格，这种玩法对作战能力要求比较高，因为敌人不弱，部队维持费也较贵。</p><p>思路二，招募投石车，补充部队，直奔八峰山，兵贵神速，灭掉奎克·猎头者，可以减少维持费，但也会进入多线作战的局面。</p><p>思路三，攻下“斯坦加特”，进攻“索尔岭”，将城市交易给埃斯佩斯·冯·邓肯（新传奇领主，外号“墓园玫瑰”），达成防御同盟。进攻盐怨，打下“提利尔岭”交易给大胃信徒，达成防御同盟...通过外交手段来改变周边的敌我环境，寻求发展。</p><br/><p>每种思路都可破局，自由选择。</p><br/><p>贝勒爷开局自带四位先祖（英雄）， 战斗力极强，但惧怕魔法攻击。</p><p>主加红线技能，增强部队作战能力，留点加特殊线。</p><p>投石机、矿工（雷管）和重矢弩手都是可靠的作战单位。</p>',
      'id': 'Clan_Angrund',
      'contributors': [{
        'id': 5,
        'name': '御剑小蚂蚁Zorth',
        'url': 'https://space.bilibili.com/3546654250633889'
      }, { 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '贝勒加·铁锤',
      'order': 3
    }, {
      'heroNickName': '白矮人',
      'heroAvatarPath': 'assets/images/lords/dwarves-grombrindal-the-white-dwarf.png',
      'path': 'assets/images/icons/Dwarfs/The_Ancestral_Throng.png',
      'name': 'The_Ancestral_Throng',
      'nameCN': '先祖之军',
      'description': '<p>攻下“上古尖塔”、“终极黑暗祭坛”，统一“镔铁海岸”。</p><br/><p>在终极黑暗祭坛，可能会撞上“娜迦隆德”的主力。</p><p>伏击“马雷基斯”或者与他正面开战，也可以等他们攻城，我们在后面偷袭，这里有很多选择。</p><br/><p>“白矮人”格瑞姆布林戴尔是一位强力的近战领主，开局部队的“铁龙手炮兵”杀伤力惊人。</p><p>推荐红线加点，12级前留点加特殊线技能。</p><p>矮人直升机飞机和铁龙手炮兵可以获得很好的战果。</p><p>注意黑暗精灵的弩手部队，破甲伤害对矮人是不小的威胁。</p><br/><p>消灭马雷基斯，即可破局。</p>',
      'id': 'The_Ancestral_Throng',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '白矮人·格瑞姆布林戴尔',
      'order': 4
    }, {
      'heroNickName': '铁眉',
      'heroAvatarPath': 'assets/images/lords/dwarves-thorek-ironbrow.png',
      'path': 'assets/images/icons/Dwarfs/The_Ancestral_Throng.png',
      'name': 'Ironbrows_Expedition',
      'nameCN': '铁眉远征军',
      'description': '<p>攻下“失落高原”、“蛛网山”，统一“南地世界边缘山脉”</p><p>一路北上，打下“卡拉格·红云山”，拿下你的第一个神器。</p><br/><p>有两个选择，宣战西面的恐虐派系“斯卡布兰德”，和他厮杀。</p><p>也可以向东，帮助至高女王消灭吸血鬼，穿过迷雾山，进攻奎克·猎头者，拿下一件神器。</p><p>去八峰山方向的神器比较多，路线也更好走。</p><br/><p>托雷克·铁眉是一位传奇符文铁匠，给部队非常高的加成，自身的属性也很好。</p><p>恶怨符文输出，矿工（雷管）和重矢弩手组合能轻松干掉周围的敌人。</p><p>主加红线技能。</p><br/><p>消灭斯卡布兰德或者奎克·猎头者，即可破局。</p>',
      'id': 'Ironbrows_Expedition',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '托雷克·铁眉',
      'order': 5
    }, {
      'heroNickName': '马大师',
      'heroAvatarPath': 'assets/images/lords/dwarves-malakai-makaisson.png',
      'path': 'assets/images/icons/Dwarfs/The_Ancestral_Throng.png',
      'name': 'Masters_of_lnnovation',
      'nameCN': '创新大师',
      'description': '<p>5.0版本新增的矮人传奇领主，拥有超级大杀器飞艇“葛朗尼之魂”。</p><p>这艘飞艇能让你获得“绝对”的快感。</p><br/><p>开局战后可以通过“穿行地道”向南直取“地狱深坑”，再向东进攻“阿斯特戈斯·铁手”。</p><p>也可以分兵两路，在第3/4回合拿下地狱深坑，注意西边的“冬牙”，这是一个实实在在的威胁。</p><br/><p>马拉凯·马凯森是一位混合武器领主，作战能力一般，主队是“半游牧”部队。</p><p>但有了大杀器-飞艇“哥朗尼之魂”后，不需要太多部队，就能发挥超强的战斗力。</p><p>可以很快建立副队实现扩张，马拉凯的大冒险也可以让我们在前期获得不少战力强悍的部队。</p><p>主加红线技能。</p><br/><p>拿下地狱深坑，即可破局。</p>',
      'id': 'Masters_of_lnnovation',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '马拉凯·马凯森',
      'order': 6
    }],
    'id': 'Dwarfs',
    'directory': 'Dwarfs',
    'order': 6
  }, {
    'nameCN': '帝国',
    'files': [{
      'heroNickName': '卡皇、卡+8、帝国大只佬、死亡爪挂件',
      'heroAvatarPath': 'assets/images/lords/empire-karl-franz.png',
      'path': 'assets/images/icons/The Empire/Reikland.png',
      'name': 'Reikland',
      'nameCN': '瑞克领',
      'description': '<p>消灭叛军“帝国分离势力”，统一“瑞克领”。</p><p>集结部队进攻西北方的“玛丽恩堡”，也是帝国派系，但和卡皇关系并不好。</p><p>拿下玛丽恩堡后可以招募边民骑手，他可以使用榴弹发射器，简称“榴弹骑”。</p><br/><p>一路北上，消灭宿敌“卡扎克·独眼”。</p><p>向“黄铜要塞”进军攻打“费斯图斯”，也是我们必须要消灭的敌人。</p><br/><p>卡尔·弗兰茨前期的身板并不“硬”，作战时需要注意他的血量。</p><p>红线加点，然后加特殊线。</p><br/><p>副领主招募“工程大师”，非常好用。</p><p>可以选择“射爆流”或是骑兵与工程大师组合的“炮轰流”，都非常舒服。</p><br/><p>消灭弗卡扎克·独眼和费斯图斯，即可破局。</p>',
      'id': 'Reikland',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '皇帝·卡尔·弗兰茨',
      'order': 1
    }, {
      'heroNickName': '金属脸',
      'heroAvatarPath': 'assets/images/lords/empire-balthasar-gelt.png',
      'path': 'assets/images/icons/The Empire/The_Golden_Order.png',
      'name': 'The_Golden_Order',
      'nameCN': '黄金学院',
      'description': '<p>5.0版本之后，拜尔沙泽·盖尔特的初始位置已经移动到了“天离烈土”，这儿是震旦天朝的势力范围。</p><br/><p>攻下“精风寺” ，先占领一个城市。</p><p>可以兵分两路，让主队拜尔沙泽·盖尔特进入西南峡谷隧道，攻打“蓝玫瑰车队”赫尔曼·苟斯特和纳垢派系“库嘎斯·瘟父”。</p><p>副队进攻“燃风牧民”。</p><br/><p>消灭两大威胁后，拿下“巨龙群岛”这块肥硕之地。</p><br/><p>得益于5.0版本对于“魔法学院”的改动，通过得到“奥数论文”，可以快速组建“法师大队”，战力惊人。</p><p>主加法师线和特殊线。</p><br/><p>消灭赫尔曼·苟斯特和库嘎斯·瘟父，即可破局。</p>',
      'id': 'The_Golden_Order',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '拜尔沙泽·盖尔特',
      'order': 2
    }, {
      'heroNickName': '猎帅',
      'heroAvatarPath': 'assets/images/lords/empire-markus-wulfhart.png',
      'path': 'assets/images/icons/The Empire/The_Huntsmarshals_Expedition.png',
      'name': 'The_Huntsmarshals_Expedition',
      'nameCN': '猎人元帅远征军',
      'description': '<p>开局消灭一支斯卡文鼠人部队，在南美（露丝契亚），猎人元帅的主要任务是消灭蜥蜴人。</p><p>进攻“塔兰克斯拉”，以大白蜥“哥罗克”为攻略目标。</p><br/><p>马库斯·沃法特在“特殊线”技能的加成下，招募“工程大师”，战力很恐怖。</p><p>通过不停的征战，获得帝国的援兵。</p><br/><p>外交上与艾博里克·德·波尔德罗和玉龙·元伯联合，在南美可以肆意妄为。</p><br/><p>消灭哥罗克，即可破局。</p>',
      'id': 'The_Huntsmarshals_Expedition',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '马库斯·沃法特',
      'order': 3
    }, {
      'heroNickName': '沃克玛、大光头',
      'heroAvatarPath': 'assets/images/lords/empire-volkmar-the-grim.png',
      'path': 'assets/images/icons/The Empire/Cult_of_Sigmar.png',
      'name': 'Cult_of_Sigmar',
      'nameCN': '西格玛教会',
      'description': '<p>消灭“沙丘王国”，统一“苦行僧之地”。</p><p>在夺取“漂移沙地”时，会碰上曼弗雷德·冯·卡斯坦因（吸血鬼伯爵）的部队。</p><p>可以借刀杀人，也可以直接向他宣战。</p><br/><p>击败曼弗雷德主队后，一鼓作气拿下他的地盘。</p><p>接下来消灭附近所有的古墓王派系。</p><br/><p>沃克玛·无情者可以招募非常强力的牧师领主，这是他的厉害之处。</p><p>这些牧师技能CD短、自身属性优秀。</p><p>再加上工程大师，破局简单。</p><br/><p>消灭曼弗雷德·冯·卡斯坦因，即可破局。</p>',
      'id': 'Cult_of_Sigmar',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '沃克玛·无情者',
      'order': 4
    }, {
      'heroNickName': '墓园玫瑰',
      'heroAvatarPath': 'assets/images/lords/empire-elspeth-von-draken.png',
      'path': 'assets/images/icons/The Empire/Cult_of_Sigmar.png',
      'name': 'Wissenland_Nuln',
      'nameCN': '威森领与努恩',
      'description': '<p>攻下“道腾巴赫”、“威森堡”，统一“威森领”。</p><p>拿下“索尔领”，第五回合在“穆特”建造“莫尔花园”和附属建筑“莫尔民兵营”，攻下“索尔要塞”。</p><p>传送至穆特，与吸血鬼派系希尔瓦尼亚“弗拉德·冯·卡斯坦因”开战。</p><br/><p>前期战损很低，建造“法师密会所”，准备招募“烈焰法师”，他是对付绿皮和吸血鬼的强力单位。</p><p>招募一个“大诵经师”领主作为前排。</p><p>墓园玫瑰护甲很低，不要近战。</p><p>大工程师的默认武器榴弹是很强的反步兵手段。</p><p>火枪手、努恩铁甲军、黑色玫瑰团骑士、地狱风暴火箭炮都是核心战力。</p><br/><p>消灭弗拉德·冯·卡斯坦因，即可破局。</p>',
      'id': 'Wissenland_Nuln',
      'contributors': [{ 'id': 6, 'name': '时间老猫', 'url': 'https://space.bilibili.com/12426474' }],
      'heroName': '埃斯佩斯·冯·邓肯',
      'order': 5
    }],
    'id': 'The_Empire',
    'directory': 'The Empire',
    'order': 7
  }, {
    'nameCN': '震旦天朝',
    'files': [{
      'heroNickName': '喵影',
      'heroAvatarPath': 'assets/images/lords/grand-cathay-miao-ying.png',
      'path': 'assets/images/icons/Grand Cathay/The_Northern_Provinces.png',
      'name': 'The_Northern_Provinces',
      'nameCN': '卫北列省',
      'description': '<p>攻下“南离”，统一“硝硫路”，接着拿下“蕹昌”、“兵马俑墓园”、“魄魅”，统一“岩镔原”。</p><p>快速集结部队，直扑东南方的绿皮派系“点心”。</p><p>攻下点心的主城后，会与艾辛氏族相遇，消灭他们。</p><p>下一个目标是洛克西亚·堕落之心。</p><br/><p>飙龙·妙影是拥有强大法术的法师，“大地之血”为部队补充血量。</p><p>震旦部队属性优异，注意保持“武道宁和”。</p><p>外交上与“帝国戍卫”和“天庭忠卫”合邦。</p><br/><p>控制长垣，抵御库尔甘战帮和维里奇的进攻。</p><br/><p>扫平震旦境内威胁，消灭艾辛氏族和洛克西亚·堕落之心，即可破局。</p>',
      'id': 'The_Northern_Provinces',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '飙龙·妙影',
      'order': 1
    }, {
      'heroNickName': '镔镔、赵铁龙',
      'heroAvatarPath': 'assets/images/lords/grand-cathay-zhao-ming.png',
      'path': 'assets/images/icons/Grand Cathay/The_Western_Provinces.png',
      'name': 'The_Western_Provinces',
      'nameCN': '卫西列省',
      'description': '<p>攻下“瀚宇港”，统一“缙绅荒原”。</p><p>灭掉“新武”的斯卡文鼠人，北攻“上阳”，到达“泰梓”后，可以向东北进攻，背刺“艾辛氏族”，拿下行省“皓月林”。</p><p>合邦“玉石护军”，消灭吸血鬼伯爵派系“僵尸叛军”，宣战洛克西亚·堕落之心。</p><br/><p>他的出生点很好，破局简单。</p><br/><p>镔龙·昭明兼通“金属系”和“阳系”的双修法师，还有强大的近战肉搏能力。</p><p>对近战部队有很好的加成。</p><br/><p>消灭艾辛氏族，即可破局。</p>',
      'id': 'The_Western_Provinces',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '镔龙·昭明',
      'order': 2
    }, {
      'heroNickName': '元神',
      'heroAvatarPath': 'assets/images/lords/grand-cathay-yuan-bo.png',
      'path': 'assets/images/icons/Grand Cathay/The_Jade_Court.png',
      'name': 'The_Jade_Court',
      'nameCN': '玉廷',
      'description': '<p>玉龙·元伯开局就是双线发展。</p><br/><p>在南美（露丝契亚）消灭蛮荒兽人派系“蓝蝰蛇”，沿着海岸，向正南方往“千噬”方向进攻。</p><p>震旦方向招募部队攻打吸血鬼伯爵派系“僵尸叛军”，统一“天廷河源”，之后进攻“艾辛氏族”和洛克西亚·堕落之心。</p><br/><p>玉龙·元伯属性优异，拥有无与伦比的近战肉搏能力，强大的“无双”，可以斩杀敌方领主或部队。</p><p>拥有天堂系法术“卡莎朵拉彗星”和阴系法术“夜鸮决”可以大范围秒杀敌方部队。</p><br/><p>“国是”机制可以加速完成招募和建造。</p><br/><p>消灭千噬，即可破局。</p>',
      'id': 'The_Jade_Court',
      'contributors': [{ 'id': 3, 'name': '温酱与夏凉丶', 'url': 'https://space.bilibili.com/22088751' }],
      'heroName': '玉龙·元伯',
      'order': 3
    }],
    'id': 'Grand_Cathay',
    'directory': 'Grand Cathay',
    'order': 8
  }, {
    'nameCN': '绿皮',
    'files': [{
      'heroNickName': '铁皮',
      'heroAvatarPath': 'assets/images/lords/greenskins-grimgor-ironhide.png',
      'path': 'assets/images/icons/Greenskins/Grimgors_Ardboyz.png',
      'name': 'Grimgors_Ardboyz',
      'nameCN': '格里姆格的狠小子',
      'description': null,
      'id': 'Grimgors_Ardboyz',
      'contributors': [],
      'heroName': '格里姆格·铁皮',
      'order': 1
    }, {
      'heroNickName': '阿兹汗',
      'heroAvatarPath': 'assets/images/lords/greenskins-azhag-the-slaughterer.png',
      'path': 'assets/images/icons/Greenskins/Bonerattlaz.png',
      'name': 'Bonerattlaz',
      'nameCN': '响骨',
      'description': null,
      'id': 'Bonerattlaz',
      'contributors': [],
      'heroName': '阿兹汗·屠灭者',
      'order': 2
    }, {
      'heroNickName': '邪月',
      'heroAvatarPath': 'assets/images/lords/greenskins-skarsnik.png',
      'path': 'assets/images/icons/Greenskins/Crooked_Moon.png',
      'name': 'Crooked_Moon',
      'nameCN': '邪月',
      'description': null,
      'id': 'Crooked_Moon',
      'contributors': [],
      'heroName': '史卡斯尼克',
      'order': 3
    }, {
      'heroNickName': '舞王、恶地舞王',
      'heroAvatarPath': 'assets/images/lords/greenskins-wurrzag-da-great-green-prophet.png',
      'path': 'assets/images/icons/Greenskins/The_Bloody_Handz.png',
      'name': 'The_Bloody_Handz',
      'nameCN': '血手',
      'description': null,
      'id': 'The_Bloody_Handz',
      'contributors': [],
      'heroName': '乌尔扎戈·绿先知',
      'order': 4
    }, {
      'heroNickName': '大肚王、咕噜',
      'heroAvatarPath': 'assets/images/lords/greenskins-grom-the-paunch.png',
      'path': 'assets/images/icons/Greenskins/Broken_Axe.png',
      'name': 'Broken_Axe',
      'nameCN': '碎斧',
      'description': null,
      'id': 'Broken_Axe',
      'contributors': [],
      'heroName': '大肚王·咕噜',
      'order': 5
    }],
    'id': 'Greenskins',
    'directory': 'Greenskins',
    'order': 9
  }, {
    'nameCN': '高等精灵',
    'files': [{
      'heroNickName': '泰哥、泰日天',
      'heroAvatarPath': 'assets/images/lords/high-elves-tyrion.png',
      'path': 'assets/images/icons/High Elves/Eataine.png',
      'name': 'Eataine',
      'nameCN': '伊泰恩',
      'description': null,
      'id': 'Eataine',
      'contributors': [],
      'heroName': '泰瑞昂',
      'order': 1
    }, {
      'heroNickName': '泰弟、泰迪',
      'heroAvatarPath': 'assets/images/lords/high-elves-teclis.png',
      'path': 'assets/images/icons/High Elves/Order_of_Loremasters.png',
      'name': 'Order_of_Loremasters',
      'nameCN': '魔剑士议会',
      'description': null,
      'id': 'Order_of_Loremasters',
      'contributors': [],
      'heroName': '泰格里斯',
      'order': 2
    }, {
      'heroNickName': '永恒女王',
      'heroAvatarPath': 'assets/images/lords/high-elves-alarielle-the-radiant.png',
      'path': 'assets/images/icons/High Elves/Avelorn.png',
      'name': 'Avelorn',
      'nameCN': '阿瓦隆',
      'description': null,
      'id': 'Avelorn',
      'contributors': [],
      'heroName': '艾拉瑞丽',
      'order': 3
    }, {
      'heroNickName': '影王、鼠王',
      'heroAvatarPath': 'assets/images/lords/high-elves-alith-anar.png',
      'path': 'assets/images/icons/High Elves/Nagarythe.png',
      'name': 'Nagarythe',
      'nameCN': '纳迦瑞斯',
      'description': null,
      'id': 'Nagarythe',
      'contributors': [],
      'heroName': '阿里斯·安纳尔',
      'order': 4
    }, {
      'heroNickName': '牢头',
      'heroAvatarPath': 'assets/images/lords/high-elves-eltharion.png',
      'path': 'assets/images/icons/High Elves/Yvresse.png',
      'name': 'Yvresse',
      'nameCN': '伊瑞斯',
      'description': null,
      'id': 'Yvresse',
      'contributors': [],
      'heroName': '艾萨里昂·无情者',
      'order': 5
    }, {
      'heroNickName': '龙王子、穷王子',
      'heroAvatarPath': 'assets/images/lords/high-elves-imrik.png',
      'path': 'assets/images/icons/High Elves/Knights_of_Caledor.png',
      'name': 'Knights_of_Caledor',
      'nameCN': '卡勒多骑士',
      'description': null,
      'id': 'Knights_of_Caledor',
      'contributors': [],
      'heroName': '伊姆瑞克',
      'order': 6
    }],
    'id': 'High_Elves',
    'directory': 'High Elves',
    'order': 10
  }, {
    'nameCN': '恐虐',
    'files': [{
      'heroNickName': '牢K',
      'heroAvatarPath': 'assets/images/lords/khorne-skarbrand-the-exiled.png',
      'path': 'assets/images/icons/Khorne/Exiles_of_Khorne.png',
      'name': 'Exiles_of_Khorne',
      'nameCN': '恐虐流放者',
      'description': null,
      'id': 'Exiles_of_Khorne',
      'contributors': [],
      'heroName': '流放者·斯卡布兰德',
      'order': 1
    }],
    'id': 'Khorne',
    'directory': 'Khorne',
    'order': 11
  }, {
    'nameCN': '基斯里夫',
    'files': [{
      'heroNickName': '女沙皇、冰雪女王',
      'heroAvatarPath': 'assets/images/lords/kislev-tzarina-katarin.png',
      'path': 'assets/images/icons/Kislev/The_Ice_Court.png',
      'name': 'The_Ice_Court',
      'nameCN': '冰雪王廷',
      'description': '<p>开局祈唤一位基斯里夫神祗，令其庇佑保护整个祖国母亲，获得你需要的增益效果。</p><p>女皇卡捷琳是非常强大的冰雪系法师，你的目标是点出"凛冬之心"这种强大的AOE法术。</p><p>女皇很脆弱，避免近战或陷入敌阵深处。</p><p>你的初始敌人是诺斯卡，你需要攻下三座他们的城池统一"南方州"。</p><p>每一场战斗都有一定的难度，用好你的冰雪系减速魔法，依靠翼骑兵和雪豹这种高机动战斗单位侵扰敌军，引出落单然后围杀。</p><p>你有很多远程单位，但他们弹药有限，需要创造好的射击环境。</p><p>前期记得招募一个波耶，补充哥萨、近卫军和基斯里夫勇士。</p><p>统一南方州后其实有南北两个扩张路线，北边是基斯里夫同族，南方进入山区是食人魔和响骨。</p><p>建议先攻南方，基斯里夫内战很惨烈，而且会掉虔信。</p><p>所以，先攻下"千柱石厅"统一"北世界边缘山脉"，再考虑下一步的计划。</p>',
      'id': 'The_Ice_Court',
      'contributors': [{ 'id': 2, 'name': '时雨宫笙', 'url': '' }],
      'heroName': '女沙皇卡捷琳',
      'order': 1
    }, {
      'heroNickName': '大牧首、康师傅',
      'heroAvatarPath': 'assets/images/lords/kislev-kostaltyn.png',
      'path': 'assets/images/icons/Kislev/The_Great_Orthodoxy.png',
      'name': 'The_Great_Orthodoxy',
      'nameCN': '大正教会',
      'description': null,
      'id': 'The_Great_Orthodoxy',
      'contributors': [],
      'heroName': '康斯坦丁',
      'order': 2
    }, {
      'heroNickName': '红沙皇',
      'heroAvatarPath': 'assets/images/lords/kislev-boris-ursus.png',
      'path': 'assets/images/icons/Kislev/Ursun_Revivalists.png',
      'name': 'Ursun_Revivalists',
      'nameCN': '厄孙复兴者',
      'description': null,
      'id': 'Ursun_Revivalists',
      'contributors': [],
      'heroName': '鲍里斯·厄孙',
      'order': 3
    }, {
      'heroNickName': '婆婆、嬷嬷',
      'heroAvatarPath': 'assets/images/lords/kislev-mother-ostankya.png',
      'path': 'assets/images/icons/Kislev/Daughters_of_the_Forest.png',
      'name': 'Daughters_of_the_Forest',
      'nameCN': '森林之女',
      'description': null,
      'id': 'Daughters_of_the_Forest',
      'contributors': [],
      'heroName': '奥斯坦基娅嬷嬷',
      'order': 4
    }],
    'id': 'Kislev',
    'directory': 'Kislev',
    'order': 12
  }, {
    'nameCN': '蜥蜴人',
    'files': [{
      'heroNickName': '马大师',
      'heroAvatarPath': 'assets/images/lords/lizardmen-lord-mazdamundi.png',
      'path': 'assets/images/icons/Lizardmen/Hexoatl.png',
      'name': 'Hexoatl',
      'nameCN': '赫斯欧塔',
      'description': null,
      'id': 'Hexoatl',
      'contributors': [],
      'heroName': '领主·马兹达穆迪',
      'order': 1
    }, {
      'heroNickName': '库大帅',
      'heroAvatarPath': 'assets/images/lords/lizardmen-kroq-gar.png',
      'path': 'assets/images/icons/Lizardmen/Last_Defenders.png',
      'name': 'Last_Defenders',
      'nameCN': '最后守卫者',
      'description': null,
      'id': 'Last_Defenders',
      'contributors': [],
      'heroName': '库·迦',
      'order': 2
    }, {
      'heroNickName': '蛇神、先知',
      'heroAvatarPath': 'assets/images/lords/lizardmen-tehenhauin.png',
      'path': 'assets/images/icons/Lizardmen/Cult_of_Sotek.png',
      'name': 'Cult_of_Sotek',
      'nameCN': '索提戈教派',
      'description': null,
      'id': 'Cult_of_Sotek',
      'contributors': [],
      'heroName': '特亨霍因',
      'order': 3
    }, {
      'heroNickName': '小飞侠',
      'heroAvatarPath': 'assets/images/lords/lizardmen-tiktaqto.png',
      'path': 'assets/images/icons/Lizardmen/Tlaqua.png',
      'name': 'Tlaqua',
      'nameCN': '塔拉夸',
      'description': null,
      'id': 'Tlaqua',
      'contributors': [],
      'heroName': '提克塔托',
      'order': 4
    }, {
      'heroNickName': '大白蜥',
      'heroAvatarPath': 'assets/images/lords/lizardmen-gor-rok.png',
      'path': 'assets/images/icons/Lizardmen/Itza.png',
      'name': 'Itza',
      'nameCN': '伊塔扎',
      'description': null,
      'id': 'Itza',
      'contributors': [],
      'heroName': '哥罗克',
      'order': 5
    }, {
      'heroNickName': '纳卡伊',
      'heroAvatarPath': 'assets/images/lords/lizardmen-nakai-the-wanderer.png',
      'path': 'assets/images/icons/Lizardmen/Spirit_of_the_Jungle.png',
      'name': 'Spirit_of_the_Jungle',
      'nameCN': '丛林精魂',
      'description': null,
      'id': 'Spirit_of_the_Jungle',
      'contributors': [],
      'heroName': '流放者·纳卡伊',
      'order': 6
    }, {
      'heroNickName': '变色龙\n',
      'heroAvatarPath': 'assets/images/lords/lizardmen-oxyotl.png',
      'path': 'assets/images/icons/Lizardmen/Ghosts_of_Pahuax.png',
      'name': 'Ghosts_of_Pahuax',
      'nameCN': '帕花科斯幽灵',
      'description': null,
      'id': 'Ghosts_of_Pahuax',
      'contributors': [],
      'heroName': '欧西约坦',
      'order': 7
    }],
    'id': 'Lizardmen',
    'directory': 'Lizardmen',
    'order': 13
  }, {
    'nameCN': '诺斯卡',
    'files': [{
      'heroNickName': '象王、嘴臭哥',
      'heroAvatarPath': 'assets/images/lords/norsca-wulfrik-the-wanderer.png',
      'path': 'assets/images/icons/Norsca/World_Walkers.png',
      'name': 'World_Walkers',
      'nameCN': '世界行者',
      'description': null,
      'id': 'World_Walkers',
      'contributors': [],
      'heroName': '乌弗瑞克·流浪者',
      'order': 1
    }, {
      'heroNickName': '巨魔王',
      'heroAvatarPath': 'assets/images/lords/norsca-throgg.png',
      'path': 'assets/images/icons/Norsca/Wintertooth.png',
      'name': 'Wintertooth',
      'nameCN': '冬牙',
      'description': null,
      'id': 'Wintertooth',
      'contributors': [],
      'heroName': '索隆格',
      'order': 2
    }],
    'id': 'Norsca',
    'directory': 'Norsca',
    'order': 14
  }, {
    'nameCN': '纳垢',
    'files': [{
      'heroNickName': '瘟父',
      'heroAvatarPath': 'assets/images/lords/nurgle-kugath-plaguefather.png',
      'path': 'assets/images/icons/Nurgle/Poxmakers_of_Nurgle.png',
      'name': 'Poxmakers_of_Nurgle',
      'nameCN': '纳垢驭疹官',
      'description': null,
      'id': 'Poxmakers_of_Nurgle',
      'contributors': [],
      'heroName': '库嘎斯·瘟父',
      'order': 1
    }, {
      'heroNickName': '可汗',
      'heroAvatarPath': 'assets/images/lords/nurgle-tankhan-the-maggot-lord.png',
      'path': 'assets/images/icons/Nurgle/Poxmakers_of_Nurgle.png',
      'name': 'The_Maggot_Host',
      'nameCN': '蛆虫军团',
      'description': '<p>开局往南方进攻，死敌柯烈克·食日者等着你，你和他只有一个能活在这个世界。</p><p>攻下"绞架树"一统"卡达莎"，接着进攻"奇美拉高地"。</p><p>存够"霸权"(纳垢资源)立刻招募"玷污者·凯兹克"，自带坐骑，移速达到80+，武器威力560，还能重生。</p><p>手动战中利用凯兹克和强大的腐烂骑士(也会重生)，将敌军作战单位一个接一个勾引出来围杀是上好的战术。</p><p>击败柯烈克·食日者即可完成前期破局。</p>',
      'id': 'The_Maggot_Host',
      'contributors': [{ 'id': 1, 'name': '古老游戏玩家', 'url': 'https://space.bilibili.com/431259608' }],
      'heroName': '蛆虫之主·塔木尔可汗',
      'order': 2
    }, {
      'heroNickName': '瘟疫计患官',
      'heroAvatarPath': 'assets/images/lords/nurgle-epidemius.png',
      'path': 'assets/images/icons/Nurgle/Poxmakers_of_Nurgle.png',
      'name': 'Tallymen_of_Pestilence',
      'nameCN': '瘟疫计患官',
      'description': null,
      'id': 'Tallymen_of_Pestilence',
      'contributors': [],
      'heroName': '埃皮德穆斯',
      'order': 3
    }],
    'id': 'Nurgle',
    'directory': 'Nurgle',
    'order': 15
  }, {
    'nameCN': '食人魔王国',
    'files': [{
      'heroNickName': '大金牙',
      'heroAvatarPath': 'assets/images/lords/ogre-kingdoms-greasus-goldtooth.png',
      'path': 'assets/images/icons/Ogre Kingdoms/Goldtooth.png',
      'name': 'Goldtooth',
      'nameCN': '金牙',
      'description': null,
      'id': 'Goldtooth',
      'contributors': [],
      'heroName': '格雷苏·大金牙',
      'order': 1
    }, {
      'heroNickName': '厨子',
      'heroAvatarPath': 'assets/images/lords/ogre-kingdoms-skrag-the-slaughterer.png',
      'path': 'assets/images/icons/Ogre Kingdoms/Disciples_of_the_Maw.png',
      'name': 'Disciples_of_the_Maw',
      'nameCN': '大胃信徒',
      'description': null,
      'id': 'Disciples_of_the_Maw',
      'contributors': [],
      'heroName': '斯卡拉格',
      'order': 2
    }],
    'id': 'Ogre_Kingdoms',
    'directory': 'Ogre Kingdoms',
    'order': 16
  }, {
    'nameCN': '斯卡文鼠人',
    'files': [{
      'heroNickName': '步行刚牛、奎克、猎头者',
      'heroAvatarPath': 'assets/images/lords/skaven-queek-headtaker.png',
      'path': 'assets/images/icons/Skaven/Clan_Mors.png',
      'name': 'Clan_Mors',
      'nameCN': '摩斯氏族',
      'description': null,
      'id': 'Clan_Mors',
      'contributors': [],
      'heroName': '奎克·猎头者',
      'order': 1
    }, {
      'heroNickName': '司库克',
      'heroAvatarPath': 'assets/images/lords/skaven-lord-skrolk.png',
      'path': 'assets/images/icons/Skaven/Clan_Pestilens.png',
      'name': 'Clan_Pestilens',
      'nameCN': '疫病氏族',
      'description': null,
      'id': 'Clan_Pestilens',
      'contributors': [],
      'heroName': '领主·司库克',
      'order': 2
    }, {
      'heroNickName': 'VV',
      'heroAvatarPath': 'assets/images/lords/skaven-tretch-craventail.png',
      'path': 'assets/images/icons/Skaven/Clan_Rictus.png',
      'name': 'Clan_Rictus',
      'nameCN': '咧嘴氏族',
      'description': null,
      'id': 'Clan_Rictus',
      'contributors': [],
      'heroName': '崔特思·畏尾',
      'order': 3
    }, {
      'heroNickName': '利爪',
      'heroAvatarPath': 'assets/images/lords/skaven-ikit-claw.png',
      'path': 'assets/images/icons/Skaven/Clan_Skryre.png',
      'name': 'Clan_Skryre',
      'nameCN': '史库里氏族',
      'description': null,
      'id': 'Clan_Skryre',
      'contributors': [],
      'heroName': '伊克特·利爪',
      'order': 4
    }, {
      'heroNickName': '丝妮绮',
      'heroAvatarPath': 'assets/images/lords/skaven-deathmaster-snikch.png',
      'path': 'assets/images/icons/Skaven/Clan_Eshin.png',
      'name': 'Clan_Eshin',
      'nameCN': '艾辛氏族',
      'description': null,
      'id': 'Clan_Eshin',
      'contributors': [],
      'heroName': '死亡大师·斯尼奇',
      'order': 5
    }, {
      'heroNickName': '斯洛克',
      'heroAvatarPath': 'assets/images/lords/skaven-throt-the-unclean.png',
      'path': 'assets/images/icons/Skaven/Clan_Moulder.png',
      'name': 'Clan_Moulder',
      'nameCN': '腐坏氏族',
      'description': null,
      'id': 'Clan_Moulder',
      'contributors': [],
      'heroName': '斯洛克·不洁者',
      'order': 6
    }],
    'id': 'Skaven',
    'directory': 'Skaven',
    'order': 17
  }, {
    'nameCN': '色孽',
    'files': [{
      'heroNickName': '纳卡里',
      'heroAvatarPath': 'assets/images/lords/slaanesh-nkari.png',
      'path': 'assets/images/icons/Slaanesh/Seducers_of_Slaanesh.png',
      'name': 'Seducers_of_Slaanesh',
      'nameCN': '色孽迷魂者',
      'description': null,
      'id': 'Seducers_of_Slaanesh',
      'contributors': [],
      'heroName': '纳卡里',
      'order': 1
    }],
    'id': 'Slaanesh',
    'directory': 'Slaanesh',
    'order': 18
  }, {
    'nameCN': '古墓王',
    'files': [{
      'heroNickName': '大帝、万王之王',
      'heroAvatarPath': 'assets/images/lords/tomb-kings-settra-the-imperishable.png',
      'path': 'assets/images/icons/Tomb Kings/Khemri.png',
      'name': 'Khemri',
      'nameCN': '喀穆里',
      'description': null,
      'id': 'Khemri',
      'contributors': [],
      'heroName': '塞特拉',
      'order': 1
    }, {
      'heroNickName': '大祭司',
      'heroAvatarPath': 'assets/images/lords/tomb-kings-grand-hierophant-khatep.png',
      'path': 'assets/images/icons/Tomb Kings/Exiles_of_Nehek.png',
      'name': 'Exiles_of_Nehek',
      'nameCN': '尼科放逐者',
      'description': null,
      'id': 'Exiles_of_Nehek',
      'contributors': [],
      'heroName': '卡特普',
      'order': 2
    }, {
      'heroNickName': '卡莉达',
      'heroAvatarPath': 'assets/images/lords/tomb-kings-high-queen-khalida.png',
      'path': 'assets/images/icons/Tomb Kings/Court_of_Lybaras.png',
      'name': 'Court_of_Lybaras',
      'nameCN': '莱巴拉斯宫廷',
      'description': null,
      'id': 'Court_of_Lybaras',
      'contributors': [],
      'heroName': '至高女王卡莉达',
      'order': 3
    }, {
      'heroNickName': '巫妖王',
      'heroAvatarPath': 'assets/images/lords/tomb-kings-arkhan-the-black.png',
      'path': 'assets/images/icons/Tomb Kings/Followers_of_Nagash.png',
      'name': 'Followers_of_Nagash',
      'nameCN': '纳迦什信徒',
      'description': null,
      'id': 'Followers_of_Nagash',
      'contributors': [],
      'heroName': '阿克汉',
      'order': 4
    }],
    'id': 'Tomb_Kings',
    'directory': 'Tomb Kings',
    'order': 19
  }, {
    'nameCN': '奸奇',
    'files': [{
      'heroNickName': '双头鸡',
      'heroAvatarPath': 'assets/images/lords/tzeentch-kairos-fateweaver.png',
      'path': 'assets/images/icons/Tzeentch/Oracles_of_Tzeentch.png',
      'name': 'Oracles_of_Tzeentch',
      'nameCN': '奸奇传谕使',
      'description': null,
      'id': 'Oracles_of_Tzeentch',
      'contributors': [],
      'heroName': '卡洛斯·织命者',
      'order': 1
    }, {
      'heroNickName': '变化灵',
      'heroAvatarPath': 'assets/images/lords/tzeentch-changeling.png',
      'path': 'assets/images/icons/Tzeentch/The_Deceivers.png',
      'name': 'The_Deceivers',
      'nameCN': '诓诈者',
      'description': null,
      'id': 'The_Deceivers',
      'contributors': [],
      'heroName': '变化灵',
      'order': 2
    }],
    'id': 'Tzeentch',
    'directory': 'Tzeentch',
    'order': 20
  }, {
    'nameCN': '吸血鬼海岸',
    'files': [{
      'heroNickName': '卢姥爷',
      'heroAvatarPath': 'assets/images/lords/vampire-coast-luthor-harkon.png',
      'path': 'assets/images/icons/Vampire Coast/The_Awakened.png',
      'name': 'The_Awakened',
      'nameCN': '觉醒者',
      'description': null,
      'id': 'The_Awakened',
      'contributors': [],
      'heroName': '卢瑟·哈肯',
      'order': 1
    }, {
      'heroNickName': '提督、诺伯爵',
      'heroAvatarPath': 'assets/images/lords/vampire-coast-count-noctilus.png',
      'path': 'assets/images/icons/Vampire Coast/The_Dreadfleet.png',
      'name': 'The_Dreadfleet',
      'nameCN': '恐惧舰队',
      'description': null,
      'id': 'The_Dreadfleet',
      'contributors': [],
      'heroName': '诺克特拉斯伯爵',
      'order': 2
    }, {
      'heroNickName': '盐怨、猴王',
      'heroAvatarPath': 'assets/images/lords/vampire-coast-aranessa-saltspite.png',
      'path': 'assets/images/icons/Vampire Coast/Pirates_of_Sartosa.png',
      'name': 'Pirates_of_Sartosa',
      'nameCN': '萨图沙海盗',
      'description': null,
      'id': 'Pirates_of_Sartosa',
      'contributors': [],
      'heroName': '艾蕊娜萨·盐怨',
      'order': 3
    }, {
      'heroNickName': '歌女、肥婆',
      'heroAvatarPath': 'assets/images/lords/vampire-coast-cylostra-direfin.png',
      'path': 'assets/images/icons/Vampire Coast/The_Drowned.png',
      'name': 'The_Drowned',
      'nameCN': '溺亡者',
      'description': null,
      'id': 'The_Drowned',
      'contributors': [],
      'heroName': '塞洛斯塔·恐怖之鳍',
      'order': 4
    }],
    'id': 'Vampire_Coast',
    'directory': 'Vampire Coast',
    'order': 21
  }, {
    'nameCN': '吸血鬼伯爵',
    'files': [{
      'heroNickName': '曼光头',
      'heroAvatarPath': 'assets/images/lords/vampire-counts-mannfred-von-carstein.png',
      'path': 'assets/images/icons/Vampire Counts/The_Drakenhof_Conclave.png',
      'name': 'The_Drakenhof_Conclave',
      'nameCN': '邓肯霍夫秘会',
      'description': null,
      'id': 'The_Drakenhof_Conclave',
      'contributors': [],
      'heroName': '曼弗雷德·冯·卡斯坦因',
      'order': 1
    }, {
      'heroNickName': '海大师、海老头',
      'heroAvatarPath': 'assets/images/lords/vampire-counts-heinrich-kemmler.png',
      'path': 'assets/images/icons/Vampire Counts/The_Barrow_Legion.png',
      'name': 'The_Barrow_Legion',
      'nameCN': '古坟军团',
      'description': null,
      'id': 'The_Barrow_Legion',
      'contributors': [],
      'heroName': '海因里希·凯姆勒',
      'order': 2
    }, {
      'heroNickName': '没鼻子、家主、弗拉德',
      'heroAvatarPath': 'assets/images/lords/vampire-counts-vlad-von-carstein.png',
      'path': 'assets/images/icons/Vampire Counts/Sylvania.png',
      'name': 'Sylvania',
      'nameCN': '希尔瓦尼亚',
      'description': null,
      'id': 'Sylvania_Vlad',
      'contributors': [],
      'heroName': '弗拉德·冯·卡斯坦因',
      'order': 3
    }, {
      'heroNickName': '伊莎贝拉',
      'heroAvatarPath': 'assets/images/lords/vampire-counts-isabella-von-carstein.png',
      'path': 'assets/images/icons/Vampire Counts/Sylvania.png',
      'name': 'Sylvania',
      'nameCN': '希尔瓦尼亚',
      'description': null,
      'id': 'Sylvania_Isabella',
      'contributors': [],
      'heroName': '伊莎贝拉·冯·卡斯坦因',
      'order': 4
    }, {
      'heroNickName': '僵尸王',
      'heroAvatarPath': 'assets/images/lords/vampire-counts-helman-ghorst.png',
      'path': 'assets/images/icons/Vampire Counts/Caravan_of_Blue_Roses.png',
      'name': 'Caravan_of_Blue_Roses',
      'nameCN': '蓝玫瑰车队',
      'description': null,
      'id': 'Caravan_of_Blue_Roses',
      'contributors': [],
      'heroName': '赫尔曼·苟斯特',
      'order': 5
    }],
    'id': 'Vampire_Counts',
    'directory': 'Vampire Counts',
    'order': 22
  }, {
    'nameCN': '混沌勇士',
    'files': [{
      'heroNickName': '阿查',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-archaon-the-everchosen.png',
      'path': 'assets/images/icons/Warriors of Chaos/Warhost_of_the_Apocalypse.png',
      'name': 'Warhost_of_the_Apocalypse',
      'nameCN': '天启战帮',
      'description': null,
      'id': 'Warhost_of_the_Apocalypse',
      'contributors': [],
      'heroName': '艾查恩·永世神选',
      'order': 1
    }, {
      'heroNickName': '柯日天、大龙魔',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-kholek-suneater.png',
      'path': 'assets/images/icons/Warriors of Chaos/Heralds_of_the_Tempest.png',
      'name': 'Heralds_of_the_Tempest',
      'nameCN': '风暴使者',
      'description': null,
      'id': 'Heralds_of_the_Tempest',
      'contributors': [],
      'heroName': '柯烈克·食日者',
      'order': 2
    }, {
      'heroNickName': '美人',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-prince-sigvald-the-magnificent.png',
      'path': 'assets/images/icons/Warriors of Chaos/The_Decadent_Host.png',
      'name': 'The_Decadent_Host',
      'nameCN': '颓堕大军',
      'description': null,
      'id': 'The_Decadent_Host',
      'contributors': [],
      'heroName': '西格瓦尔德王子·美人',
      'order': 3
    }, {
      'heroNickName': '阿扎',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-azazel.png',
      'path': 'assets/images/icons/Warriors of Chaos/The_Ecstatic_Legions.png',
      'name': 'The_Ecstatic_Legions',
      'nameCN': '欣狂军团',
      'description': null,
      'id': 'The_Ecstatic_Legions',
      'contributors': [],
      'heroName': '阿扎泽尔',
      'order': 4
    }, {
      'heroNickName': '医生',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-festus-the-leechlord.png',
      'path': 'assets/images/icons/Warriors of Chaos/The_Fecundites.png',
      'name': 'The_Fecundites',
      'nameCN': '猖殖聚群',
      'description': null,
      'id': 'The_Fecundites',
      'contributors': [],
      'heroName': '水蛭领主·费斯图斯',
      'order': 5
    }, {
      'heroNickName': '瓦鸡',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-valkia-the-bloody.png',
      'path': 'assets/images/icons/Warriors of Chaos/Legion_of_the_Gorequeen.png',
      'name': 'Legion_of_the_Gorequeen',
      'nameCN': '鲜血女王军团',
      'description': null,
      'id': 'Legion_of_the_Gorequeen',
      'contributors': [],
      'heroName': '血腥·瓦尔基娅',
      'order': 6
    }, {
      'heroNickName': '维里奇',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-vilitch-the-curseling.png',
      'path': 'assets/images/icons/Warriors of Chaos/Puppets_of_Misrule.png',
      'name': 'Puppets_of_Misrule',
      'nameCN': '暴政傀儡',
      'description': null,
      'id': 'Puppets_of_Misrule',
      'contributors': [],
      'heroName': '诅咒灵·维里奇',
      'order': 7
    }, {
      'heroNickName': '永世不选',
      'heroAvatarPath': 'assets/images/lords/warriors-of-chaos-belakor.png',
      'path': 'assets/images/icons/Warriors of Chaos/Shadow_Legion.png',
      'name': 'Shadow_Legion',
      'nameCN': '暗影军团',
      'description': null,
      'id': 'Shadow_Legion',
      'contributors': [],
      'heroName': '比拉克',
      'order': 8
    }],
    'id': 'Warriors_of_Chaos',
    'directory': 'Warriors of Chaos',
    'order': 23
  }, {
    'nameCN': '木精灵',
    'files': [{
      'heroNickName': '绿混沌',
      'heroAvatarPath': 'assets/images/lords/wood-elves-orion.png',
      'path': 'assets/images/icons/Wood Elves/Talsyn.png',
      'name': 'Talsyn',
      'nameCN': '塔塞恩',
      'description': '<p>这是一个玩法特殊的派系，可以全地图宣战。</p><p>宣战派系达到一定数量后，军队的维持费会降为零！</p><p>也就是变成了“无维持费”的状态。</p><br/><p>攻下“奎那利斯”统一“夏珑森林”。</p><p>进攻奥卡山，消灭绿皮派系“大肚王·咕噜”。</p><p>他离我们最近，还会打洞。</p><p>为了完成“艾索洛伦的重生仪式”，附近需要占领的城市尽快拿下。</p><br/><p>外交方面建议结交巴托尼亚、木精灵和帝国。</p><br/><p>宣战绿皮、吸血鬼、矮人和斯卡文鼠人。</p><br/><p>因为宣战减维持费的机制，奥莱恩破局很快，前期可以用事务官出去探路，方便寻找宣战目标。</p><br/><p>利用“深层根须”进行在大地图上进行远距离的传送。</p><br/><p>木精灵拥有强大的射击部队，射程超远，弓箭手从“林地守卫”到“巡林客”都是王牌军队，多倚仗他们的力量。</p><br/><p>奥莱恩有多个骑兵加成，本队可以多带骑兵。</p><br/><p>三本后可以招募“树精”代替矛兵抗线，四本后多招“巡林客”，不缺钱。</p><br/><p>奥莱恩多宣战就能破局，远宣近攻！</p>',
      'id': 'Talsyn',
      'contributors': [{ 'id': 4, 'name': '卡卓因', 'url': 'https://space.bilibili.com/404279534' }],
      'heroName': '奥莱恩',
      'order': 1
    }, {
      'heroNickName': '老树、神剑树王、大树王',
      'heroAvatarPath': 'assets/images/lords/wood-elves-durthu.png',
      'path': 'assets/images/icons/Wood Elves/Argwylon.png',
      'name': 'Argwylon',
      'nameCN': '阿格维隆',
      'description': null,
      'id': 'Argwylon',
      'contributors': [],
      'heroName': '杜尔苏',
      'order': 2
    }, {
      'heroNickName': '鹰爪弩炮、阿帕奇',
      'heroAvatarPath': 'assets/images/lords/wood-elves-sisters-of-twilight.png',
      'path': 'assets/images/icons/Wood Elves/Heralds_of_Ariel.png',
      'name': 'Heralds_of_Ariel',
      'nameCN': '艾瑞尔军锋',
      'description': null,
      'id': 'Heralds_of_Ariel',
      'contributors': [],
      'heroName': '暮光姐妹',
      'order': 3
    }, {
      'heroNickName': '戴查',
      'heroAvatarPath': 'assets/images/lords/wood-elves-drycha.png',
      'path': 'assets/images/icons/Wood Elves/Wargrove_of_Woe.png',
      'name': 'Wargrove_of_Woe',
      'nameCN': '灾厄战林',
      'description': null,
      'id': 'Wargrove_of_Woe',
      'contributors': [],
      'heroName': '戴查',
      'order': 4
    }],
    'id': 'Wood_Elves',
    'directory': 'Wood Elves',
    'order': 24
  }];

export const WARHAMMER_CLASSIFIERS_MAP: IWarhammerClassifierMap = WARHAMMER_CLASSIFIERS.reduce((acc, classifier) => {
  classifier.files.forEach(file => {
    acc[file.id] = {
      parentId: classifier.id,
      file: file
    };
  });
  return acc;
}, {} as IWarhammerClassifierMap);
