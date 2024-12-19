import { IArticleMap } from '@w-monorepo/interfaces';
import { EPetType, EPetWiKiNavigation } from '../enums/pet.enum';
import { INavigationItem, ITag, ITagMap } from '@w-monorepo/ui';

const DOG_CLASSIFICATION: ITag[] = [
  { id: 'all', name: '不限' },
  {
    id: 'teddyDog',
    name: '泰迪犬',
    description:
      '泰迪熊狗，也被称为 Zuchon 或 Shichon，是一种设计师犬种，通常是“西施犬”与“比熊犬”的杂交，或者是西施犬与马耳他犬杂交的后代。它们体型娇小，毛茸茸的，脸型圆润可爱，外观上像极了泰迪熊。',
  },
  { id: 'husky', name: '哈士奇' },
  { id: 'pomeranian', name: '博美犬' },
  { id: 'chihuahua', name: '吉娃娃' },
  { id: 'oldEnglishSheepdog', name: '古代牧羊犬' },
  { id: 'samoyed', name: '萨摩耶' },
  { id: 'chowChow', name: '松狮犬' },
  { id: 'goldenRetriever', name: '金毛' },
  { id: 'bichonFrise', name: '比熊犬' },
  { id: 'englishBulldog', name: '英国斗牛犬' },
  { id: 'alaskanMalamute', name: '阿拉斯加犬' },
  { id: 'tibetanMastiff', name: '藏獒' },
  { id: 'labradorRetriever', name: '拉布拉多' },
  { id: 'yorkshireTerrier', name: '约克夏' },
  { id: 'borderCollie', name: '边境牧羊犬' },
  { id: 'pug', name: '巴哥犬' },
  { id: 'greatPyrenees', name: '大白熊犬' },
  { id: 'schnauzer', name: '雪纳瑞' },
  { id: 'japaneseSpitz', name: '银狐犬' },
  { id: 'germanShepherd', name: '德国牧羊犬' },
  { id: 'scottishCollie', name: '苏格兰牧羊犬' },
  { id: 'rottweiler', name: '罗威纳犬' },
  { id: 'shetlandSheepdog', name: '喜乐蒂' },
  { id: 'westHighlandWhiteTerrier', name: '西高地' },
  { id: 'corgi', name: '柯基犬' },
  { id: 'cockerSpaniel', name: '可卡犬' },
  { id: 'doberman', name: '杜宾犬' },
  { id: 'caucasianShepherd', name: '高加索犬' },
  { id: 'saintBernard', name: '圣伯纳犬' },
  { id: 'dachshund', name: '腊肠犬' },
  { id: 'pekingese', name: '京巴狗' },
  { id: 'maltese', name: '马尔济斯' },
  { id: 'sharPei', name: '沙皮狗' },
  { id: 'bullTerrier', name: '牛头梗' },
  { id: 'papillon', name: '蝴蝶犬' },
  { id: 'beagle', name: '比格犬' },
  { id: 'berneseMountainDog', name: '伯恩山犬' },
  { id: 'dalmatian', name: '斑点狗' },
  { id: 'otherPetDogs', name: '其他宠物狗' },
  { id: 'poodle', name: '贵宾犬' },
  { id: 'akita', name: '秋田犬' },
  { id: 'teacupDog', name: '茶杯犬' },
  { id: 'pitbull', name: '比特犬' },
  { id: 'belgianMalinois', name: '马犬' },
  { id: 'shibaInu', name: '柴犬' },
  { id: 'wolfdog', name: '狼狗' },
  { id: 'greyhound', name: '格力犬' },
  { id: 'kunmingWolfdog', name: '昆明犬' },
  { id: 'greatDane', name: '大丹犬' },
  { id: 'caneCorso', name: '卡斯罗犬' },
  { id: 'afghanHound', name: '阿富汗猎犬' },
  { id: 'belgianShepherd', name: '比利时牧羊犬' },
  { id: 'dogoArgentino', name: '杜高犬' },
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

export const PET_CLASSIFICATION: ITagMap = {
  [EPetType.DOG]: DOG_CLASSIFICATION,
  [EPetType.CAT]: [],
  [EPetType.FISH]: [],
  [EPetType.BIRD]: [],
  [EPetType.MOUSE]: [],
};

export const ON_SALE_MAP: IArticleMap = {
  [EPetType.DOG]: [
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
  [EPetType.CAT]: [
    {
      date: '',
      description: '狸花猫',
      detail: '',
      id: '',
      imageUrl: 'assets/images/cats/cat1.jpg',
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
      imageUrl: 'assets/images/cats/cat2.jpg',
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
  [EPetType.FISH]: [],
  [EPetType.BIRD]: [],
  [EPetType.MOUSE]: [],
};

export const FOOD_MAP: IArticleMap = {
  [EPetType.DOG]: [
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
  [EPetType.CAT]: [
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
  [EPetType.FISH]: [
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
  [EPetType.BIRD]: [
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
  [EPetType.MOUSE]: [
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
  [EPetType.DOG]: [
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
  [EPetType.CAT]: [],
  [EPetType.FISH]: [],
  [EPetType.BIRD]: [],
  [EPetType.MOUSE]: [],
};

export const NEWS_MAP: IArticleMap = {
  [EPetType.DOG]: [
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
  [EPetType.CAT]: [],
  [EPetType.FISH]: [],
  [EPetType.BIRD]: [],
  [EPetType.MOUSE]: [],
};
