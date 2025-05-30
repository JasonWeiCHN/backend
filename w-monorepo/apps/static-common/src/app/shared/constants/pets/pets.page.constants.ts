import { IPetMap } from '../../interfaces/pet.interface';
import { IArticleMap } from '@w-monorepo/interfaces';
import { EPetTag, EPetWiKiNavigation } from '../../enums/pet.enum';
import { INavigationItem, ITag, ITagMap } from '@w-monorepo/ui';
import { IPageConfigMap, IPageDataMap } from '../../interfaces/page.interface';
import { EPageMode } from '../../enums/page.enum';

const DOG_TAGS: ITag[] = [
  { id: 'all', name: '不限' },
  {
    id: 'teddyDog',
    name: '泰迪犬',
    description:
      '泰迪熊狗，也被称为 Zuchon 或 Shichon，是一种设计师犬种，通常是“西施犬”与“比熊犬”的杂交，或者是西施犬与马耳他犬杂交的后代。它们体型娇小，毛茸茸的，脸型圆润可爱，外观上像极了泰迪熊。',
  },
  {
    id: 'husky',
    name: '哈士奇',
    description:
      '哈士奇是西伯利亚雪橇犬，是一种强壮、坚韧的工作犬。这个品种是Spitz家族的一员。它能够在长距离的崎岖地形地牵引重物。几个世纪以来，西伯利亚的楚科奇人（Chukchi），一直使用这种狗来拉雪橇、放牧驯鹿和执行看门狗功能。哈士奇是适合西伯利亚恶劣条件的完美工作犬：耐寒，能够融入小群体，并且非常乐意连续工作数小时。',
  },
  {
    id: 'pomeranian',
    name: '博美犬',
    description:
      '博美犬是Spitz品种。它已被国际犬类联合会认定为德国狐狸犬品种之一。德国Spitz犬有五种尺寸，博美犬是其中最小的，也称为矮Spitz犬。',
  },
  {
    id: 'chihuahua',
    name: '吉娃娃',
    description:
      '吉娃娃是世界上最小的狗品种；它以墨西哥奇瓦瓦州命名。吉娃娃是一种优雅、警觉、行动敏捷的小型犬，表情俏皮、紧凑，具有梗犬般的气质。它是一种意志坚强、非常忠诚的犬种。它变得非常依恋它的主人，甚至到了嫉妒的地步。',
  },
  {
    id: 'oldEnglishSheepdog',
    name: '古代牧羊犬',
    description:
      '古代英国牧羊犬也被命名为短尾犬，是一种大型、比例方正、敏捷的狗，有着大量毛茸茸的外套。它的身体结实、平衡且肌肉发达。',
  },
  {
    id: 'samoyed',
    name: '萨摩耶',
    description:
      '萨摩耶犬是一种强壮、肌肉发达、充满活力且活跃的狗。这个品种是一只优秀的家庭犬;它喜欢人，尤其是孩子。它善良、温柔、调皮。萨摩耶犬的美丽和它的微笑从耳朵延伸到耳朵，当它出来时会引起人们的注意。这个品种的主人应该是愿意在美容和活动中付出时间的人。',
  },
  {
    id: 'chowChow',
    name: '松狮犬',
    description:
      '松狮松狮是 spitz 家族的一员，它原产于中国已有数千年的历史。松狮犬最显着的两个特征是它蓝黑色的舌头和几乎笔直的后腿，这使得它走路相当生硬。',
  },
  {
    id: 'goldenRetriever',
    name: '金毛',
    description:
      '金毛猎犬是一只美丽、强壮、结实、平衡良好、比例匀称的狗，有羽毛、中等长度、奶油色至金色的皮毛。它是忠诚的、甜蜜的、渴望取悦的。这只狗对孩子很温柔;它享受着孩子们提供的无尽的关注。',
  },
  {
    id: 'bichonFrise',
    name: '比熊犬',
    description:
      '比熊犬是一只小巧、结实而迷人的狗。它们有一层松散卷曲的双层外套，由一层有纹理的外套组成，内衬着柔软、细腻、丝滑的底毛，几乎是低过敏性的。',
  },
  {
    id: 'englishBulldog',
    name: '英国斗牛犬',
    description:
      '斗牛犬是英国的国家象征。这种犬种体型中等，密集而有力，身体低矮，肩膀宽阔，巨大的短脸头，光滑的皮毛。尽管它很早就繁殖为诱饵公牛，但英国斗牛犬温柔善良，是全家人的绝佳伴侣。一只理想的宠物，因为他喜欢和家人在一起。他喜欢孩子，并因为他温柔、有时固执的天性而成为他们的优秀伴侣。',
  },
  {
    id: 'alaskanMalamute',
    name: '阿拉斯加犬',
    description:
      '阿拉斯加雪橇犬是最古老的北极犬。这个犬种非常大、强壮且非常漂亮。这是一只强壮、肌肉发达的狗，胸部深，头宽，表情自豪。它以家庭为导向，喜欢与人相处。',
  },
  {
    id: 'tibetanMastiff',
    name: '藏獒',
    description:
      '藏獒是一种强壮、肌肉发达的狗，骨骼结构坚固。它非常大，有一个宽而大的头和一层沉重、密集的中等长度的被毛。它是出色的牲畜守护者;它愿意与捕食者和入侵者进行激烈的战斗，也是一只出色的家庭护卫犬。',
  },
  {
    id: 'labradorRetriever',
    name: '拉布拉多',
    description:
      '拉布拉多猎犬是美国最受欢迎的品种之一。它是一只结实、肌肉发达的狗，略长于高大，有一件短、硬、易于护理、防水的双层外套，没有任何波浪，有纯黑色、黄色或巧克力色。',
  },
  {
    id: 'yorkshireTerrier',
    name: '约克夏',
    description:
      '约克夏是一种长毛玩具狗，它的蓝色和棕褐色外套在脸上和从头骨底部到尾巴末端分开，均匀而笔直地垂在身体的每一侧。头上的毛发非常多，以至于几乎总是需要将其聚集成一条带子，以防止进入狗的食物碗并给动物最大的能见度。一些业主选择修剪头顶的头发。这只小狗是世界上最小的狗之一。',
  },
  {
    id: 'borderCollie',
    name: '边境牧羊犬',
    description:
      '边境牧羊犬是一种平衡良好的中型犬，外表运动。身体略长于肩高处。它非常敏捷，并且拥有匀称的瘦肌肉。这种犬种非常聪明和勤奋，对训练反应迅速而热切。',
  },
  {
    id: 'pug',
    name: '巴哥犬',
    description:
      '哈巴狗是“小空间里的很多狗”。它是一只粗短而肌肉发达的狗，胸部宽阔，笔直，前腿非常强壮，后腿肌肉发达。它的名字 Pug 来自拉丁语，意思是“紧握的拳头”。',
  },
  {
    id: 'greatPyrenees',
    name: '大白熊犬',
    description:
      '大比利牛斯犬是一种非常大的动物，拥有结实的肌肉身体，它给人一种优雅和无与伦比的美丽的独特印象，以及出色的整体尺寸和威严。它有一层耐候性外套，可以承受极寒。',
  },
  {
    id: 'schnauzer',
    name: '雪纳瑞',
    description:
      '标准雪纳瑞属于雪纳瑞家族的中间，巨型雪纳瑞更大，而微型雪纳瑞更小。标准雪纳瑞是一种中等大小、粗犷、健壮的狗，有浓密的眉毛、胡须和胡须。它们有一个长而矩形的头部，有结实的口吻和明显的停止。脚很小，像猫，脚趾呈拱形。这个品种有粗糙、结实的外毛和浓密柔软的底毛。外套有盐和胡椒或纯黑色。',
  },
  { id: 'japaneseSpitz', name: '银狐犬' },
  {
    id: 'germanShepherd',
    name: '德国牧羊犬',
    description:
      '德国牧羊犬是一种“天生的狗”。它最初被命名为阿尔萨斯狼犬，但它并没有真正与狼一起繁殖，甚至在阿拉斯加也没有。德国牧羊犬于 1880 年代作为牧民在德国发展起来。德国牧羊犬是一种强壮、敏捷的狗——拥有犬类界最敏锐的鼻子之一。作为一种无与伦比的工作犬，德国牧羊犬是最初的“毒犬”，可以轻松适应保护和警察工作。德国牧羊犬非常易受训练，可以很好地作为警察、向导、搜索、救援犬。',
  },
  { id: 'scottishCollie', name: '苏格兰牧羊犬' },
  {
    id: 'rottweiler',
    name: '罗威纳犬',
    description:
      '罗威纳犬是一种健壮、强大的犬种，具有很强的力量、耐力和敏捷性。罗威纳犬是一只工作犬，当有工作要做时，无论是放牧、服从比赛、跟踪、搜救还是取回报纸，他都是最快乐的。',
  },
  {
    id: 'shetlandSheepdog',
    name: '喜乐蒂',
    description:
      '喜乐蒂类似于粗暴的牧羊犬。它强壮、灵活且重量轻。这是一只漂亮的狗，有一个长长的楔形头。它是一个快速的跑步者和良好的跳跃者，敏捷而迅速。小狗很迷人，从很小的时候就表现出取悦的欲望。它是一只出色的伴侣犬，性情讨人喜欢。',
  },
  {
    id: 'westHighlandWhiteTerrier',
    name: '西高地',
    description:
      '西高地长相优雅，有着美丽、闪亮的白色外套和明亮的纽扣眼睛。耳朵小而尖且直立，使动物看起来机敏、随时准备一切。它有深邃的胸部和肌肉发达的四肢。',
  },
  {
    id: 'corgi',
    name: '柯基犬',
    description:
      '威尔士柯基犬有两种，Cardigan 和 Pembroke，每种都以其起源地威尔士的县命名。这两个品种之间的差异包括骨骼结构、体长和大小。开衫是这两个品种中较大的一个，有大而圆的耳朵和 12 英寸长的狐狸、流动的尾巴，与身体成一直线。虽然 Cardigan 的颜色比 Pembroke 多，但白色不应该在其外套中占主导地位。该品种的肩高约 12 英寸（30 厘米），重约 30 磅（14 公斤）。开衫结实、机动、警觉、活跃、聪明、稳定，既不害羞也不咄咄逼人。',
  },
  {
    id: 'cockerSpaniel',
    name: '可卡犬',
    description:
      '英国可卡犬是一种机敏、体型紧凑的中型犬。英国可卡犬是枪犬组中最小的。它在困难的地形中捕猎得很好。如今，英国可卡犬因其善良的性格而更经常成为伴侣犬。',
  },
  {
    id: 'doberman',
    name: '杜宾犬',
    description:
      '杜宾犬结构紧凑，肌肉发达，非常强大。他外表优雅，高傲的马车，体现出伟大的高贵和气质。他们骄傲、机敏、运动能力强，耐力强、速度快。',
  },
  {
    id: 'caucasianMountain',
    name: '高加索犬',
    description:
      '高加索山犬是一种非常大、肌肉发达、力量强大的犬。它自信、意志坚强、勇敢，比大多数其他品种更具侵略性。它是一只忠诚无畏的狗，能够守卫和保护大片领土。',
  },
  {
    id: 'saintBernard',
    name: '圣伯纳犬',
    description:
      '圣伯纳犬是一种非常大、强壮、肌肉发达、有力的狗。只要体重与身高成正比，狗越高越珍贵。该品种已被用作临终关怀医院附近白雪皑皑的山口的雪崩和救援犬。这位了不起的人类仆人拯救了 2,000 多人。',
  },
  {
    id: 'dachshund',
    name: '腊肠犬',
    description:
      '腊肠犬分为三个品种：短毛、钢丝毛和长毛。这些品种中的每一个都有三种尺寸。这只运动型和忠诚的腊肠犬是一只细长、精力充沛、肌肉发达的短腿犬。他/她自豪地举着自己，表情聪明。',
  },
  {
    id: 'pekingese',
    name: '京巴狗',
    description:
      '北京狗以其直接、独立、个性和表达方式表明了它的中国血统。它有一件奢华、长而直的外套，有大量的羽毛，有各种颜色。',
  },
  {
    id: 'maltese',
    name: '马尔济斯',
    description:
      '马耳他犬是一只骨骼细腻但结实、耐寒的小伴侣犬，在中心部分线的每一侧，奢华柔滑的白色外套笔直地挂在地面上。它是比熊犬家族的一员，是欧洲最古老的品种之一。',
  },
  { id: 'sharPei', name: '沙皮狗' },
  {
    id: 'bullTerrier',
    name: '牛头梗',
    description:
      '迷你斗牛梗是斗牛梗的复制品。除了身高外，它具有相同的品种标准。它体格健壮，对称，有着独特的长脸，蕴含着敏锐、坚定和聪明的表情。',
  },
  {
    id: 'papillon',
    name: '蝴蝶犬',
    description:
      'Papillon 也被称为大陆玩具猎犬。它们有一层长而有光泽的外套，白色的，除了肝脏之外，还有任何颜色的斑块。蝴蝶的耳朵要么直立，要么下垂。年限下垂的 Papillon 被称为 Phalene Papillon。',
  },
  {
    id: 'beagle',
    name: '比格犬',
    description:
      '比格犬拥有迷人、乐观的个性、令人钦佩的勇气和耐力。它是一只出色的家庭宠物，非常适合孩子们，渴望嬉戏和玩耍。比格犬是气味猎犬，主要用于追踪野兔、兔子和其他猎物。',
  },
  {
    id: 'berneseMountainDog',
    name: '伯恩山犬',
    description:
      '伯尔尼山犬是一种引人注目、结实的大型犬。坚固而有力的构造，这是品种般的也是温和的。他们总是三色的。他们有一张宽大的脸，有一双松软的大耳朵。',
  },
  {
    id: 'dalmatian',
    name: '斑点狗',
    description:
      '作为迪士尼著名的熟悉的黑白斑点狗，斑点狗是一种对称的、肌肉发达的中型犬，具有超强的耐力。斑点狗具有指针的精简、干净的线条，可能与此有关。它有一层短而硬、致密的纯白色外套，上面随机溅有黑色或肝脏色的斑点。',
  },
  {
    id: 'poodle',
    name: '贵宾犬',
    description:
      '玩具贵宾犬是一种优雅、活泼的小型犬，有大量但修剪整齐且剪裁精美的卷毛。一只好的贵宾犬有一个方形的轮廓，长度与马肩高大致相同。这非常有趣和聪明。它与生俱来的表演技巧使贵宾犬成为了一名出色的马戏团表演者。',
  },
  {
    id: 'akita',
    name: '秋田犬',
    description:
      '秋田犬是日本斯皮茨型品种中最大的。这是一只强壮、结实、肌肉发达、匀称且外观独特的狗，头部扁平、沉重，口吻结实而短。',
  },
  { id: 'teacupDog', name: '茶杯犬' },
  { id: 'pitbull', name: '比特犬' },
  {
    id: 'belgianMalinois',
    name: '马犬',
    description:
      '比利时玛利诺犬或比利时牧羊犬是一种非常聪明、活泼的品种，在活跃的家庭环境中表现出色，但无论是在服从、放牧、敏捷还是追踪方面，它都是一只出色的工作犬。比利时玛利诺犬是一只严肃的狗，主人必须认真对待。',
  },
  {
    id: 'shibaInu',
    name: '柴犬',
    description:
      '柴犬是一种小型、紧凑、敏捷的毛茸茸的狗，看起来像一只微型秋田犬。它外向的性格、方便的体型和善良的天性使其成为日本最常见的宠物。这不是一只适合胆小的人的狗，因为它是小身体里的大动物。',
  },
  {
    id: 'wolfdog',
    name: '狼狗',
    description:
      '捷克斯洛伐克狼犬是一个具有独特狼外观的最新品种，是在 1950 年代通过培育德国牧羊犬和喀尔巴阡灰狼创造的！在身体、形状和动作上，这个品种的外观非常像狼，外观上几乎没有德国牧羊犬的形象。',
  },
  {
    id: 'greyhound',
    name: '格力犬',
    description:
      '意大利灰狗，有时被称为“IG”。这个品种是最小的猎犬。它们是优雅的微型细粘合品种，长长的头部逐渐变薄，形成尖尖的口吻。',
  },
  { id: 'kunmingWolfdog', name: '昆明犬' },
  {
    id: 'greatDane',
    name: '大丹犬',
    description:
      '大丹犬是一只将高贵与健壮、力量与优雅相结合的巨型犬。它外表富丽堂皇，具有尊严、力量和优雅。这个品种是最高的犬种，体型巨大，肌肉发达。大丹犬被称为友好的巨人，它不应该表现出无端的侵略性。',
  },
  {
    id: 'caneCorso',
    name: '卡斯罗犬',
    description:
      'Cane Corso Italiano 是一种中大型强大的犬;它体格健壮但优雅，非常独特，表达了力量、敏捷和耐力。它的名字来源于拉丁语 “Cohors”，意思是 “守护者”、“保护者”。',
  },
  {
    id: 'afghanHound',
    name: '阿富汗猎犬',
    description:
      '阿富汗猎犬是最古老的品种之一，已有 4000 多年的历史。它是一只古老的、贵族的、美丽的狗。阿富汗猎犬最初用于在阿富汗山区狩猎。',
  },
  {
    id: 'belgianShepherd',
    name: '比利时牧羊犬',
    description:
      '比利时牧羊犬品种包括“比利时 Tervueren”、“比利时玛利诺犬”、“比利时 Groenandael”和“Laekenois”。这些品种中的每一个都有不同的皮毛类型，但它们具有相似的祖先和特征，例如智力和敏捷性。许多国家和品种俱乐部都承认这四种马都是一个比利时品种的品种，而在美国，它们通常被认为是单独的品种。',
  },
  {
    id: 'dogoArgentino',
    name: '杜高犬',
    description:
      '阿根廷杜高犬是一种群居狩猎犬，为追求野猪和美洲狮等大型猎物而饲养，拥有运动员级别的力量、智慧和快速反应能力。',
  },
];

const CAT_TAGS: ITag[] = [
  { id: 'all', name: '不限' },
  {
    id: 'ragdoll',
    name: '布偶猫',
    description:
      '布偶猫是一种具有独特色点皮毛和蓝眼睛的猫。它的形态大而重，有半长而柔滑的柔软外套。美国饲养员安·贝克 （Ann Baker） 在 1960 年代开发了布偶猫。他们以其温顺、平静的气质和深情的天性而闻名。Ragdoll 这个名字来源于原始种群中的个体在被捡起时变得软弱和放松的倾向。该品种在英国和美国都特别受欢迎。',
  },
  {
    id: 'siamese',
    name: '暹罗猫',
    description: '',
  },
  {
    id: 'fold',
    name: '折耳猫',
    description: '',
  },
  {
    id: 'garfield',
    name: '加菲猫',
    description: '',
  },
  {
    id: 'blueCat',
    name: '蓝猫',
    description: '',
  },
  {
    id: 'britishShorthair',
    name: '英国短毛猫',
    description: '',
  },
  {
    id: 'americanShorthair',
    name: '美国短毛猫',
    description: '',
  },
  {
    id: 'bengal',
    name: '豹猫',
    description: '',
  },
  {
    id: 'persian',
    name: '波斯猫',
    description: '',
  },
  {
    id: 'maineCoon',
    name: '缅因猫',
    description: '',
  },
  {
    id: 'chineseRuralCat',
    name: '中华田园猫',
    description: '',
  },
  {
    id: 'sphynx',
    name: '无毛猫',
    description: '',
  },
  {
    id: 'munchkin',
    name: '曼基康猫',
    description: '',
  },
  {
    id: 'burmese',
    name: '缅甸猫',
    description: '',
  },
  {
    id: 'chinchilla',
    name: '金吉拉猫',
    description: '',
  },
];

export const PET_NAVIGATION_ITEMS: INavigationItem[] = [
  {
    id: EPetWiKiNavigation.OVERVIEW,
    label: '概述',
    path: '',
  },
  {
    id: EPetWiKiNavigation.CHARACTERISTICS,
    label: '特点',
    path: '',
  },
  {
    id: EPetWiKiNavigation.APPEARANCE,
    label: '外形',
    path: '',
  },
  {
    id: EPetWiKiNavigation.PHOTOS,
    label: '美照',
    path: '',
  },
  {
    id: EPetWiKiNavigation.TEMPERAMENT,
    label: '个性',
    path: '',
  },
  {
    id: EPetWiKiNavigation.CARE,
    label: '照顾',
    path: '',
  },
  {
    id: EPetWiKiNavigation.HISTORY,
    label: '起源',
    path: '',
  },
];

export const PET_TAG_MAP: ITagMap = {
  [EPetTag.DOG]: DOG_TAGS,
  [EPetTag.CAT]: CAT_TAGS,
  [EPetTag.FISH]: [],
  [EPetTag.BIRD]: [],
  [EPetTag.MOUSE]: [],
};

export const ON_SALE_MAP: IArticleMap = {
  [EPetTag.DOG]: [
    // 游戏盘数据采集 - END
    {
      date: '',
      description: '英国牧羊犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/old_english_sheepdog.webp',
      tagIds: [],
      title: '英国牧羊犬',
      typeId: 'oldEnglishSheepdog',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '吉娃娃',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/chihuahua.webp',
      tagIds: [],
      title: '吉娃娃',
      typeId: 'chihuahua',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '博美',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/pomeranian.webp',
      tagIds: [],
      title: '博美',
      typeId: 'pomeranian',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '哈士奇',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/husky.webp',
      tagIds: [],
      title: '哈士奇',
      typeId: 'husky',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '泰迪犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog16.jpeg',
      tagIds: [],
      title: '泰迪熊',
      typeId: 'teddyDog',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog1.jpg',
      tagIds: [],
      title: '小乖',
      typeId: 'teddyDog',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog2.jpg',
      tagIds: [],
      title: '小乖',
      typeId: 'teddyDog',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog3.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog4.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog5.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog6.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog7.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog8.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog9.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog10.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog11.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog12.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog13.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog14.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '伯恩山犬',
      detail: '',
      id: '',
      imageUrl: 'assets/images/dogs/dog15.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
  ],
  [EPetTag.CAT]: [
    {
      date: '',
      description: '狸花猫',
      detail: '',
      id: '',
      imageUrl: 'assets/images/cats/cat1.jpg',
      tagIds: [],
      title: '小乖',
      typeId: 'ragdoll',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '狸花猫',
      detail: '',
      id: '',
      imageUrl: 'assets/images/cats/cat2.jpg',
      tagIds: [],
      title: '小乖',
      typeId: 'siamese',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '狸花猫',
      detail: '',
      id: '',
      imageUrl: 'assets/images/cats/cat3.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '狸花猫',
      detail: '',
      id: '',
      imageUrl: 'assets/images/cats/cat4.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '狸花猫',
      detail: '',
      id: '',
      imageUrl: 'assets/images/cats/cat5.jpg',
      tagIds: [],
      title: '小乖',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '2000',
        final: '2000',
      },
    },
    {
      date: '',
      description: '纯白拿破仑',
      detail: '旺喵宠物·犬舍猫舍基地·宠物售卖',
      id: '',
      imageUrl: 'assets/images/cats/cat6.png',
      tagIds: [],
      title: '卡咪',
      typeId: '',
      price: {
        discountPercent: 100,
        initial: '6828',
        final: '6828',
      },
    },
  ],
  [EPetTag.FISH]: [],
  [EPetTag.BIRD]: [],
  [EPetTag.MOUSE]: [],
};

export const FOOD_MAP: IArticleMap = {
  [EPetTag.DOG]: [
    {
      sourceUrl: 'https://item.jd.com/100109638062.html',
      date: 'undefined',
      description: '心粮时刻全价鸭肉梨狗粮拉布拉多边牧中大型犬通用犬粮20kg',
      detail: '888888',
      id: '',
      imageUrl:
        'https://img12.360buyimg.com/n7/jfs/t1/179674/23/46619/122417/66a0618eF3bfe89c0/0a19541ba34cd3d9.jpg',
      tagIds: ['news', 'dog_food'],
      title: '心粮 鲜鸭雪梨',
      price: {
        discountPercent: 100,
        initial: '289.00',
        final: '289.00',
      },
    },
    {
      sourceUrl: 'https://item.jd.com/10128132934741.html',
      date: 'undefined',
      description:
        '狗粮40斤装成犬大型犬专用金毛拉布拉多边牧通用全价大包装冻干粮',
      detail: '888888',
      id: '',
      imageUrl:
        'https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/2206799193129/O1CN01gycYCr1Yz8HVUC1Gc_!!0-item_pic.jpg_580x580q90.jpg',
      tagIds: ['news', 'dog_food'],
      title: '果喜蜜 通用狗粮',
      price: {
        discountPercent: 100,
        initial: '94.50',
        final: '94.50',
      },
    },
    {
      sourceUrl: 'https://item.jd.com/100016348492.html',
      date: 'undefined',
      description: '10斤装泰迪金毛比熊40博美20小型中大型成犬幼犬通用型5kg',
      detail: '888888',
      id: '',
      imageUrl:
        'https://img12.360buyimg.com/n7/jfs/t1/55839/21/20893/282935/62ce9277E698e0550/b3d732d198f486c1.jpg',
      tagIds: ['news', 'dog_food'],
      title: '台派 狗粮',
      price: {
        discountPercent: 100,
        initial: '43.80',
        final: '43.80',
      },
    },
    {
      sourceUrl: 'https://item.jd.com/100051923758.html',
      date: 'undefined',
      description: '幼犬粮泰迪金毛比熊博美柯基通用型大型小型犬专用 2kg',
      detail: '888888',
      id: '',
      imageUrl:
        'https://img13.360buyimg.com/n7/jfs/t1/244207/2/19753/86831/66f3dd63Fbc5ac985/ca5286acfa3c0d7c.jpg',
      tagIds: ['news', 'dog_food'],
      title: '凯锐思 狗粮',
      price: {
        discountPercent: 100,
        initial: '27.90',
        final: '27.90',
      },
    },
    {
      sourceUrl:
        'https://item.taobao.com/item.htm?abbucket=11&id=800236445037&ns=1&pisk=fNRIKODCGkqQA2DEhz3NfidlIO5WA3G4Az_JoUFUy6Cd2dTDVMuoK6J1VhK1vWunKTIWx6BkLgSFV_TkcVoqgj8H-_X-0ml28G34Gs28paEPX1QPKcuabj8H-_4Q2qJtguGNRVV8egKR6OQ5o_Edy9316w75wWB89REOjGIRw9IpWPQ5PyERy73_WabRyWQR2NFOraqdw_KJWj2QlaMCxegwky1GD4J2JGNXSC_peJYCf-yD1d6hDIS_w7d1JFSt7_PjUipcYtSvXfPCNFQWYG-xM51OhKYPPHGQ96J9IBfe_macd3s1HCW_vJQfOM6v9O4LwFXJCC1e902D7Fsdh1JZIDWPOH9cm9Hij3T1Y3dCBkiN4K8w9Otxb5tlFKYPPHGQ9nIyOSSXS7e75tV55ius582k7gcXasrZE2WdSw6Z5VZpE9QG51us5-3hpNbwBVg_n75..&priceTId=2147805117339009754343976e490e&skuId=5453390125217&spm=a21n57.1.hoverItem.3&utparam=%7B%22aplus_abtest%22%3A%226b88a9ca0b7144d2047bee4a5d14ec73%22%7D&xxc=taobaoSearch',
      date: 'undefined',
      description: '全价冻干鲜肉夹心成幼犬鸭肉梨中小型犬粮',
      detail: '888888',
      id: '',
      imageUrl:
        'https://img.alicdn.com/img/i4/3964196285/O1CN01VC07iL1wIaAQmBCXD_!!3964196285-0-alimamacc.jpg_580x580q90.jpg',
      tagIds: ['news', 'dog_food'],
      title: '耐吉斯 狗粮',
      price: {
        discountPercent: 100,
        initial: '114.00',
        final: '114.00',
      },
    },
    {
      date: 'undefined',
      description:
        '11-in-1 Multivitamin Bites 11合1多功能咀嚼軟粒 - 牛肉味(犬用)',
      detail: '888888',
      id: '',
      imageUrl:
        'https://img.alicdn.com/imgextra/i3/2247374807/O1CN01mWiTfz1lNeq889ouF_!!2247374807.jpg',
      tagIds: ['news', 'dog_food'],
      title: 'Zesty Paws',
      price: {
        discountPercent: 100,
        initial: '368.00',
        final: '368.00',
      },
    },
    {
      date: 'undefined',
      description: '馋嘴泰迪冻干狗粮 贵宾成犬专用狗粮 犬主粮 5kg包邮',
      detail: '888888',
      id: '',
      imageUrl:
        'https://espetsso-media.s3-accelerate.amazonaws.com/img/p/1/3/5/8/3/13583-home_default.jpg',
      tagIds: ['news', 'dog_food'],
      title: '威尔逊 狗粮',
      price: {
        discountPercent: 100,
        initial: '106.80',
        final: '106.80',
      },
    },
    {
      date: 'undefined',
      description:
        '11-in-1 Multivitamin Bites 11合1多功能咀嚼軟粒 - 牛肉味(犬用)',
      detail: '888888',
      id: '',
      imageUrl:
        'https://espetsso-media.s3-accelerate.amazonaws.com/img/p/1/3/5/8/3/13583-home_default.jpg',
      tagIds: ['news', 'dog_food'],
      title: 'Zesty Paws',
      price: {
        discountPercent: 100,
        initial: '368.00',
        final: '368.00',
      },
    },
    {
      date: 'undefined',
      description:
        '11-in-1 Multivitamin Bites 11合1多功能咀嚼軟粒 - 牛肉味(犬用)',
      detail: '888888',
      id: '',
      imageUrl:
        'https://espetsso-media.s3-accelerate.amazonaws.com/img/p/1/3/5/8/3/13583-home_default.jpg',
      tagIds: ['news', 'dog_food'],
      title: 'Zesty Paws',
      price: {
        discountPercent: 100,
        initial: '368.00',
        final: '368.00',
      },
    },
    {
      date: 'undefined',
      description:
        '11-in-1 Multivitamin Bites 11合1多功能咀嚼軟粒 - 牛肉味(犬用)',
      detail: '888888',
      id: '',
      imageUrl:
        'https://espetsso-media.s3-accelerate.amazonaws.com/img/p/1/3/5/8/3/13583-home_default.jpg',
      tagIds: ['news', 'dog_food'],
      title: 'Zesty Paws',
      price: {
        discountPercent: 100,
        initial: '368.00',
        final: '368.00',
      },
    },
    {
      date: 'undefined',
      description:
        '11-in-1 Multivitamin Bites 11合1多功能咀嚼軟粒 - 牛肉味(犬用)',
      detail: '888888',
      id: '',
      imageUrl:
        'https://espetsso-media.s3-accelerate.amazonaws.com/img/p/1/3/5/8/3/13583-home_default.jpg',
      tagIds: ['news', 'dog_food'],
      title: 'Zesty Paws',
      price: {
        discountPercent: 100,
        initial: '368.00',
        final: '368.00',
      },
    },
    {
      date: 'undefined',
      description:
        '11-in-1 Multivitamin Bites 11合1多功能咀嚼軟粒 - 牛肉味(犬用)',
      detail: '888888',
      id: '',
      imageUrl:
        'https://espetsso-media.s3-accelerate.amazonaws.com/img/p/1/3/5/8/3/13583-home_default.jpg',
      tagIds: ['news', 'dog_food'],
      title: 'Zesty Paws',
      price: {
        discountPercent: 100,
        initial: '368.00',
        final: '368.00',
      },
    },
    {
      date: 'undefined',
      description:
        '11-in-1 Multivitamin Bites 11合1多功能咀嚼軟粒 - 牛肉味(犬用)',
      detail: '888888',
      id: '',
      imageUrl:
        'https://espetsso-media.s3-accelerate.amazonaws.com/img/p/1/3/5/8/3/13583-home_default.jpg',
      tagIds: ['news', 'dog_food'],
      title: 'Zesty Paws',
      price: {
        discountPercent: 100,
        initial: '368.00',
        final: '368.00',
      },
    },
    {
      date: 'undefined',
      description:
        '11-in-1 Multivitamin Bites 11合1多功能咀嚼軟粒 - 牛肉味(犬用)',
      detail: '888888',
      id: '',
      imageUrl:
        'https://espetsso-media.s3-accelerate.amazonaws.com/img/p/1/3/5/8/3/13583-home_default.jpg',
      tagIds: ['news', 'dog_food'],
      title: 'Zesty Paws',
      price: {
        discountPercent: 100,
        initial: '368.00',
        final: '368.00',
      },
    },
    {
      date: 'undefined',
      description:
        '11-in-1 Multivitamin Bites 11合1多功能咀嚼軟粒 - 牛肉味(犬用)',
      detail: '888888',
      id: '',
      imageUrl:
        'https://espetsso-media.s3-accelerate.amazonaws.com/img/p/1/3/5/8/3/13583-home_default.jpg',
      tagIds: ['news', 'dog_food'],
      title: 'Zesty Paws',
      price: {
        discountPercent: 100,
        initial: '368.00',
        final: '368.00',
      },
    },
    {
      date: 'undefined',
      description:
        '11-in-1 Multivitamin Bites 11合1多功能咀嚼軟粒 - 牛肉味(犬用)',
      detail: '888888',
      id: '',
      imageUrl:
        'https://espetsso-media.s3-accelerate.amazonaws.com/img/p/1/3/5/8/3/13583-home_default.jpg',
      tagIds: ['news', 'dog_food'],
      title: 'Zesty Paws',
      price: {
        discountPercent: 100,
        initial: '368.00',
        final: '368.00',
      },
    },
  ],
  [EPetTag.CAT]: [
    {
      date: 'undefined',
      description: '冻干生骨肉双拼猫粮-大鹅红枣配方10kg 高蛋白低脂肪成幼猫',
      detail: '888888',
      id: '',
      imageUrl:
        'https://img13.360buyimg.com/n7/jfs/t1/187835/37/54790/242516/67516243Fa9aabfb4/26ec3a63dbbc5660.png',
      tagIds: ['news', 'cat_food'],
      title: '京东京造 猫粮',
      price: {
        discountPercent: 100,
        initial: '399.00',
        final: '399.00',
      },
    },
    {
      date: 'undefined',
      description: '2.5kg5斤 成猫 幼猫 全阶段美味营养全价猫粮',
      detail: '888888',
      id: '',
      imageUrl:
        'https://img11.360buyimg.com/n7/jfs/t1/237492/23/28159/96984/67233760F380b695a/7f0dba0d94a1c4a6.jpg',
      tagIds: ['news', 'cat_food'],
      title: '弗兰士 猫粮',
      price: {
        discountPercent: 100,
        initial: '25.90',
        final: '25.90',
      },
    },
    {
      date: 'undefined',
      description:
        '宠物零食满籽多春鱼冻干猫零食小鱼干营养补钙拌粮猫狗通用 B级多春鱼冻干[50g/袋]',
      detail: '888888',
      id: '',
      imageUrl:
        'https://img12.360buyimg.com/n1/jfs/t1/242582/31/24146/95767/673b0e94F77db73d6/d5848da8fd2be688.jpg',
      tagIds: ['news', 'cat_food'],
      title: '冠本 多春鱼冻干',
      price: {
        discountPercent: 100,
        initial: '9.90',
        final: '9.90',
      },
    },
  ],
  [EPetTag.FISH]: [
    {
      date: 'undefined',
      description:
        '金龙鱼红龙增色增艳高蛋白观赏鱼热带鱼大型鱼通用鱼粮 至尊红龙520g*1罐（营养均衡龙鱼御用粮）',
      detail: '888888',
      id: '',
      imageUrl:
        'https://img11.360buyimg.com/n7/jfs/t1/161007/26/40366/177850/66163ef8F267e0603/99f20eb7997c0eb3.jpg',
      tagIds: ['news', 'dog_food'],
      title: '贝意品 龙鱼饲料',
      price: {
        discountPercent: 100,
        initial: '179.10',
        final: '179.10',
      },
    },
    {
      date: 'undefined',
      description: '小型鱼专用饲料 150g 鱼食热带鱼斗鱼灯科鱼饲料孔雀鱼饲料鱼粮',
      detail: '888888',
      id: '',
      imageUrl:
        'https://img10.360buyimg.com/n7/jfs/t1/211482/30/49311/173396/673eb26aFd97536e5/ae113509dfb9f6d1.jpg',
      tagIds: ['news', 'dog_food'],
      title: '鱼多趣 小鱼饲料',
      price: {
        discountPercent: 100,
        initial: '11.80',
        final: '11.80',
      },
    },
  ],
  [EPetTag.BIRD]: [
    {
      date: 'undefined',
      description: '虎皮玄风鸟食谷子【1200ml】画眉鸽子牡丹文鸟饲料',
      detail: '888888',
      id: '',
      imageUrl:
        'https://img14.360buyimg.com/n7/jfs/t1/205377/27/47904/265916/672f3aecFbd805263/6582d1afc8598e72.jpg',
      tagIds: ['news', 'dog_food'],
      title: '茨格曼 鹦鹉饲料',
      price: {
        discountPercent: 100,
        initial: '20.50',
        final: '20.50',
      },
    },
  ],
  [EPetTag.MOUSE]: [
    {
      date: 'undefined',
      description:
        '果蔬仓鼠粮680g 仓鼠粮食营养主粮金丝熊 三线 银狐紫仓布丁食物',
      detail: '888888',
      id: '',
      imageUrl:
        'https://img10.360buyimg.com/n7/jfs/t1/246381/20/16910/177556/66bc6849Fb9e9f731/0174f252290a65d7.jpg',
      tagIds: ['news', 'dog_food'],
      title: '喜帅 仓鼠粮',
      price: {
        discountPercent: 100,
        initial: '24.80',
        final: '24.80',
      },
    },
  ],
};

export const GOODS_MAP: IArticleMap = {
  [EPetTag.DOG]: [
    {
      date: 'undefined',
      description:
        '狗狗玩具自动遛狗球耐咬自嗨逗狗狗神器比熊小型犬宠物小狗突突球',
      detail: '888888',
      id: '',
      imageUrl:
        'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2215726356056/O1CN01CIR8Wh1ubhaAXuvEZ_!!4611686018427385432-0-item_pic.jpg_580x580q90.jpg',
      tagIds: ['news', 'dog_food'],
      title: '遛狗球',
      price: {
        discountPercent: 100,
        initial: '5.80',
        final: '5.80',
      },
    },
    {
      date: 'undefined',
      description:
        '狗玩具宠物小狗磨牙玩具耐咬大型犬金毛大狗咬不烂的狗狗解闷神器',
      detail: '888888',
      id: '',
      imageUrl:
        'https://img.alicdn.com/img/i1/4222265350/O1CN01SA4LZ01pOLuej8192_!!0-saturn_solar.jpg_580x580q90.jpg',
      tagIds: ['news', 'dog_food'],
      title: '牛棒骨',
      price: {
        discountPercent: 100,
        initial: '9.80',
        final: '9.80',
      },
    },
  ],
  [EPetTag.CAT]: [],
  [EPetTag.FISH]: [],
  [EPetTag.BIRD]: [],
  [EPetTag.MOUSE]: [],
};

export const NEWS_MAP: IArticleMap = {
  [EPetTag.DOG]: [
    {
      sourceUrl: 'assets/htmls/14 Best Dogs for First-Time Owners.html',
      referer:
        'https://www.thesprucepets.com/best-dogs-for-first-time-owners-4153979',
      date: '',
      description: '',
      detail: '',
      id: '',
      imageUrl:
        'https://www.thesprucepets.com/thmb/eKsHcHrK3OvXxQxtUEu0EDCUmlQ=/315x208/filters:no_upscale():strip_icc():format(webp)/best-dogs-for-first-time-owners-4153979-hero-bb82043e86394be28afcd8582d0da2d6.JPG',
      tagIds: [],
      title: '初次养狗的14个最佳选择',
    },
    {
      referer: 'https://www.thesprucepets.com/can-dogs-see-in-the-dark-5199751',
      date: '',
      description: '',
      detail: '',
      id: '',
      imageUrl:
        'https://www.thesprucepets.com/thmb/Inh1g8-mXSO2sfN4duZNqPliJr4=/315x236/filters:no_upscale():strip_icc():format(webp)/golden-retriever-in-woods-523106764-28aefbe2775b4126be7672437c28086b.jpg',
      tagIds: [],
      title: '狗在黑暗中能看见东西吗？',
    },
  ],
  [EPetTag.CAT]: [],
  [EPetTag.FISH]: [],
  [EPetTag.BIRD]: [],
  [EPetTag.MOUSE]: [],
};

export const DOGS_MAP: IPetMap = {
  teddyDog: {
    details: {
      overview:
        '<p>泰迪狗小巧、毛茸茸、迷人，让人一见钟情。</p><p>这些玩具小狗快乐、顽皮、可爱。</p><p>他们喜欢用可爱的行动，给主人留下美好回忆，让他们的人类家庭幸福。</p><p>泰迪狗热衷于各类家庭活动，非常喜欢游戏、拥抱和训练。</p><p>泰迪熊狗，也被称为 Zuchon 或 Shichon，是一种设计师犬种。</p><p>通常是“西施犬”与“比熊犬”的杂交，或者是西施犬与马耳他犬杂交的后代。</p><p>它们体型娇小，毛茸茸的，脸型圆润可爱，外观上很像泰迪熊。</p>',
      characteristics:
        '<p>泰迪狗非常友善——它们对孩子、其他宠物和陌生人都很友善。</p><p>泰迪狗不会偏爱，他是一种魅力十足的狗，对每个人都一视同仁，是儿童和成人最美妙的伴侣宠物。</p><p>可爱又温暖，是一种优秀的治疗犬。</p><p>他的适应性很强，城市还是农村，或者郊区，泰迪狗都能很快适应环境。</p><p>泰迪狗适合所有家庭、单身人士或年老的主人。</p><p>性格和蔼可亲，能与猫等其他宠物和谐相处。</p><p>幼犬容意训练，他们喜欢学习技巧，热爱表演，参与娱乐活动。</p>',
      appearance:
        '<p>美丽的泰迪熊眼睛，圆圆的脸，还有毛茸茸的外套。</p><p>可爱是泰迪狗外表的代名词。</p><p>体型娇小，看起来很友好，没有攻击性，愿意交朋友。</p><p>泰迪狗是两种或多种不同犬种的混合品种，所以他们具有父母一些特征。</p><p>泰迪狗是宠物狗品种，继承了亲本品种的小体型。</p><p>虽然每只狗的体型可能略有不同，对于成年泰迪狗平均高度通常为 22 - 31 cm，体重为 2.72 - 6.5 kg。</p><p>全身覆盖着柔软蓬松的皮毛，圆圆的脸蛋，圆圆的眼睛闪闪发光。</p><p>娇小的鼻子，可爱的垂耳，还有一条蓬松的短尾巴卷在背上。</p><p>从外表上看，他们就像一只泰迪熊。</p><p>泰迪狗防过敏的毛皮柔软蓬松，有多种华丽的颜色，最常见的是棕色、白色、黑色、灰色和黄色。</p>',
      photos: [''],
      temperament:
        '<p>作为两种不同狗的混种，泰迪幼犬继承了父母所提供的优秀品质。</p><p>友善、深情、冷静。</p><p>与其他毛皮宝宝交朋友以及拥抱主人是他们最喜欢的活动之一。</p><p>喜欢玩捉迷藏游戏、解决谜题、追逐咀嚼玩具。</p><p>还喜欢自由漫步、游泳和抓取。</p><p>因为他们是注重家庭的狗，所以非常喜欢拥抱和宠爱。</p><p>对于孩子来说，泰迪狗是最好的毛茸朋友。</p><p>他们有耐心、温柔，可以和小孩子一起玩耍，活泼（或者调皮），可以让大一点的孩子开心。</p><p>训练泰迪狗也是一种有趣且有益的经历。</p><p>这些小狗喜欢学习课程来获得关注，热衷于给主人留下深刻的印象。</p><p>他们喜欢尝试新的技巧，自豪地炫耀他们所学到的东西。</p><p>当游戏时间结束时，泰迪狗会甜蜜、深情地等待拥抱。</p>',
      care: '<p>清洁护理： 泰迪熊的美容费用不高。</p><p>他们只需要每月洗澡一次，每周梳理一次，就可以保持皮毛干净、无缠结、有光泽。</p><p>建议检查和清洁他们的耳朵和眼睛，定期刷牙，根据需要修剪指甲。</p><p>运动关怀： 泰迪狗是一种顽皮、喜欢拥抱的小狗。</p><p>他们喜欢参加所有家庭活动，无论是户外运动游戏还是在家放松游戏。</p><p>泰迪狗喜欢在房子里闲逛，就像他们喜欢在空旷的场地上追球一样。</p><p>每天几次快走和一些室内活跃的玩耍时间就足以让泰迪熊保持快乐和健康。</p><p>健康： 泰迪狗是一种健康的品种，不像其他小型犬种那样容易出现许多健康问题。</p><p>有时，他们可能会出现牙齿问题、眼睛问题或耳朵感染等疾病。</p><p>建议保持泰迪狗的均衡饮食和优质狗粮，并提供适当的锻炼方案。</p><p>过度运动、过度喂养、粗暴玩耍和处理不当可能会导致严重的健康问题，应该避免。</p><p>寿命： 泰迪狗的寿命在12至18年之间。</p><p>泰迪狗在温暖有爱的环境，得到营养丰富的饮食和日常锻炼活动后，其预期寿命可以超过18岁。</p><p>训练： 泰迪狗是非常聪明的狗。</p><p>当他们得到适当的激励时，可很容易地接受培训。</p><p>为了让泰迪狗保持专注和渴望学习，最好保持训练课程简短且易于互动，使用积极的强化方法。</p><p>训练泰迪幼犬时，欢呼赞美和美味零食效果最佳。</p><p>一旦他们对所教的内容产生兴趣，他们就会变成听话、随和的学生。</p><p>泰迪幼犬的社交和牵引训练应该逐渐进行，最好每天几分钟。</p><p>尽管他们性格外向、善于交际、友善，但最好尽早让他们熟悉新的环境，应对各种事件。</p>',
      history:
        '<p>泰迪狗是在 2000 年前后的美国，特意将西施犬和卷毛比熊犬杂交而成的。</p><p>泰迪狗饲养员希望将这两个品种混合在一起，以便培育出体型与西施犬一样大小的可爱幼犬。</p><p>他们拥有了西施犬和比熊犬的适应性。</p><p>饲养员发现 Shichon（又名泰迪熊）越来越受欢迎，因为它们的皮毛过敏较低，对所有类型的家庭都很友好。</p><p>尽管泰迪狗的明确起源尚不清楚，但我们可以回顾一下西施犬、马耳他犬和卷毛比雄犬品种的历史，以更好地了解这个设计杂交品种。</p><p>西施犬是泰迪狗的亲本品种之一，据说是最古老的犬种之一，也是皇帝的最爱。</p><p>中国对西施犬品种的文化记录可以追溯到六世纪，它们是为了生活在宫殿中并取悦皇帝而饲养的。</p><p>马耳他犬是犬类贵族中的一员。</p><p>几个世纪以来，作为皇室和贵族的狗，马耳他狗一直在绘画、陶瓷和文学中出现。</p><p>马耳他幼犬是最有礼貌的小型宠物之一，它们听话、精力充沛，也很快乐、顽皮。</p><p>几个世纪以前，卷毛比雄犬在法国和西班牙非常受欢迎，出现在两国的皇室肖像中。</p><p>在 16 世纪，旅行的水手将卷毛比雄犬从特内里费岛（Tenerife）带到了欧洲。</p><p>比熊犬一出现，就以其深情甜美的天性和惹人喜爱的漂亮外表迅速俘获了宫女们的芳心，很快成为宫廷宠儿。</p><p>泰迪狗是送给世界各地爱狗人士的礼物。</p>',
    },
    properties: {
      type: '泰迪狗',
      energy: '中等',
      shedding: '低',
      training: '高',
      temperament: '热情、独立、聪明、爱心',
      weight: '2.72-6.5',
      height: '22-31',
      life: '12-18',
    },
  },
  husky: {
    details: {
      overview:
        '<p>西伯利亚雪橇犬是一种体型中等、耐力强的厚毛紧凑型雪橇犬，被驯养为组队在广阔的冰冻土地上以中等速度拉动轻负载雪橇的工作犬。</p><p>哈士奇友好、挑剔且有尊严。</p><p>哈士奇的杏仁形眼睛可以是棕色或蓝色，表现出敏锐但和蔼可亲甚至调皮的表情。</p><p>哈士奇脚步敏捷，以其看似轻松但有力量的步态闻名。</p><p>它们的体重不超过 30 千克，比它们魁梧的表亲阿拉斯加雪橇犬更小、更轻。</p><p>它们喜欢家庭生活，并与其他狗相处融洽。</p><p>哈士奇与生俱来的友好使他们成为无动于衷的看门狗。</p><p>它们精力充沛，无法抗拒地追逐小动物，因此安全的跑步空间是必须的。</p><p>哈士奇有一个独特的优点：天然干净，几乎没有狗的气味。</p>',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '哈士奇 / 西伯利亚雪橇犬',
      energy: '高',
      shedding: '高',
      training: '高',
      temperament: '温柔、顽皮、开朗',
      weight: '15.88-27.22',
      height: '50.8-58.42',
      life: '12-15',
    },
  },
  pomeranian: {
    details: {
      overview:
        '<p>小型博美犬长期以来一直受到皇室和平民的喜爱，被称为理想的伴侣。</p><p>华丽的皮毛、微笑、狡猾的脸和活泼的个性使波姆犬成为世界上最受欢迎的玩具品种之一。</p><p>博美犬结合了娇小的身体（不超过七磅）和威严的大狗风范。</p><p>丰富的双层被毛，其褶边延伸至胸部和肩膀，有近两打颜色以及各种图案和斑纹，但最常见的是橙色或红色。</p><p>博美犬警觉且聪明，很容易训练，对于有足够大的孩子知道玩具狗和玩具之间的区别的家庭来说，它们是优秀的看门狗和活泼的宠物。</p><p>博美犬很活跃，但可以通过室内玩耍和短距离散步来锻炼，所以他们在城市和郊区都很满意。</p><p>他们将轻松掌握技巧和游戏，尽管他们最喜欢的活动是为他们特殊的人带来欢笑和陪伴。</p>',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '博美',
      energy: '中等',
      shedding: '低',
      training: '高',
      temperament: '好奇、活泼、大胆',
      weight: '1.36-3.18',
      height: '17.78-22',
      life: '9-13',
    },
  },
  chihuahua: {
    details: {
      overview:
        '<p>吉娃娃是一只个性鲜明的小狗。</p><p>作为墨西哥的国家象征，这些警觉而有趣的“钱包狗”是美洲最古老的品种之一，其血统可以追溯到前哥伦布时代的古老王国。</p><p>吉娃娃是一只平衡、优雅的狗，举止像梗犬，体重不超过 6 磅。</p><p>圆形的“苹果”头是一个品种的标志。</p><p>直立的耳朵和饱满、明亮的眼睛极具表现力。</p><p>外套有多种颜色和图案，可长可短。</p><p>除了外套外，这些品种是相同的。</p><p>吉娃娃拥有忠诚、魅力和大狗的态度。</p><p>即使是小狗也需要训练，没有它，这个聪明的家伙会像小拿破仑一样统治你的家庭。</p><p>吉娃娃紧凑而自信，是理想的城市宠物。</p><p>它们太小了，不适合带孩子粗暴地生活，在寒冷的天气里必须特别小心，但吉娃娃是适应性强的，只要它们在自己喜欢的膝盖上得到很多美好的时光。</p>',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '吉娃娃',
      energy: '高等',
      shedding: '低',
      training: '高',
      temperament: '迷人、优雅、时髦',
      weight: '0.91-2.72',
      height: '12.7-30.48',
      life: '15-20',
    },
  },
  oldEnglishSheepdog: {
    details: {
      overview:
        '<p>古英国牧羊犬是典型的毛茸茸的狗，以其丰满的皮毛和巅峰的发型、独特的熊般的步态以及圆润、讨人喜欢的天性而闻名。</p><p>古英国牧羊犬是一只大而敏捷的狗，喜欢探索和嬉戏。</p><p>在古英国牧羊犬丰富的双层外套下，是一只肌肉发达、紧凑的牧羊犬，骨骼丰富，臀部很大，肩高 21 或 22 英寸。</p><p>他们的眼睛（如果你能看到他们时）是深棕色或蓝色，或者两者各有一。</p><p>古英国牧羊犬品种标准称，头骨“宽敞且相当方正，为脑力提供了充足的空间”。</p><p>古英国牧羊犬以熊一样的姿态移动，但以其敏捷而闻名。</p><p>这些强壮、身体健全的工人需要定期锻炼。</p><p>同样著名的是他们的许多优良家犬品质：警惕、勇气、善良和智慧。</p><p>古英国牧羊犬非常适合儿童，是耐心、保护性的玩伴。</p><p>它们是明智的看门狗，以响亮的吠叫而闻名。</p>',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '古代英国牧羊犬',
      energy: '中等',
      shedding: '较高',
      training: '高',
      temperament: '聪明、温和、适应性强',
      weight: '27.22-38.56',
      height: '50.8-60.96',
      life: '10-12',
    },
  },
  samoyed: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  chowChow: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  goldenRetriever: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  bichonFrise: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  englishBulldog: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  alaskanMalamute: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  tibetanMastiff: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  labradorRetriever: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  yorkshireTerrier: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  borderCollie: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  pug: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  greatPyrenees: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  schnauzer: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  japaneseSpitz: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  germanShepherd: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  scottishCollie: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  rottweiler: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  shetlandSheepdog: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  westHighlandWhiteTerrier: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  corgi: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  cockerSpaniel: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  doberman: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  caucasianMountain: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  saintBernard: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  dachshund: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  pekingese: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  maltese: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  sharPei: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  bullTerrier: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  papillon: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  beagle: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  berneseMountainDog: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  dalmatian: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  poodle: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  akita: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  teacupDog: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  pitbull: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  belgianMalinois: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  shibaInu: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  wolfdog: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  greyhound: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  kunmingWolfdog: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  greatDane: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  caneCorso: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  afghanHound: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  belgianShepherd: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
  dogoArgentino: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
};

export const CATS_MAP: IPetMap = {
  ragdoll: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '布偶猫',
      energy: '低',
      shedding: '中',
      training: '中',
      temperament: '友好、随和、可爱、善于交际',
      weight: '4.5-9',
      height: '101.6',
      life: '12-17',
    },
  },
  siamese: {
    details: {
      overview: '',
      characteristics: '',
      appearance: '',
      photos: [''],
      temperament: '',
      care: '',
      history: '',
    },
    properties: {
      type: '',
      energy: '',
      shedding: '',
      training: '',
      temperament: '',
      weight: '',
      height: '',
      life: '',
    },
  },
};

const COMMON_NAVIGATION_ITEMS = [
  {
    id: EPetTag.DOG,
    label: '狗',
    path: '',
  },
  {
    id: EPetTag.CAT,
    label: '猫',
    path: '',
  },
];

export const PET_PAGE_DATA: IPageDataMap = {
  'on-sale': ON_SALE_MAP,
  food: FOOD_MAP,
  goods: GOODS_MAP,
  news: NEWS_MAP,
  pics: ON_SALE_MAP,
};

export const PET_PAGE_MAP: IPageConfigMap = {
  'on-sale': {
    mode: EPageMode.GALLERY,
    navigationItems: COMMON_NAVIGATION_ITEMS,
    tagMap: PET_TAG_MAP,
  },
  food: {
    mode: EPageMode.GOODS_CARD,
    navigationItems: COMMON_NAVIGATION_ITEMS,
  },
  goods: {
    mode: EPageMode.GOODS_CARD,
    navigationItems: COMMON_NAVIGATION_ITEMS,
  },
  news: {
    mode: EPageMode.ARTICLE,
    navigationItems: COMMON_NAVIGATION_ITEMS,
  },
  pics: {
    mode: EPageMode.GALLERY,
  },
};
