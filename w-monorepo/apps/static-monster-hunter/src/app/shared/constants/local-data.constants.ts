// 注意: 这是本地维护的数据

export interface IClanExtra {
  slogan: string;
  description: string;
}

export interface IClanMap {
  [key: string]: IClanExtra;
}

export const WEAPON_EXTRA_MAP: IClanMap = {
  Great_Sword: {
    slogan: '大剑无锋，大巧不工',
    description:
      '长度凌驾一人的身高，每次斩击都能发挥极高破坏力；厚重宽阔的剑身又能够提供城墙般安定的防御，不过因其重量的拖累对机动性会有很大影响，能够驾驭它的人必然经过了重重试炼。',
  },
  Long_Sword: {
    slogan: '太刀不仅是一种武器，更是一种信仰',
    description:
      '攻击范围与攻击频率结合，大开大合又不失灵活，初次使用破绽百出，熟练掌握后人刀合一，帅气与输出并存。',
  },
  Sword_and_Shield: {
    slogan: '最具平衡性的武器，易懂难精',
    description:
      '左手持剑（刀），右手挽盾，可以使出连捷攻击，出招硬直小加上操作简单，适合新手入门练习。',
  },
  Dual_Blades: {
    slogan: '最稳定输出的武器',
    description:
      '以连捷攻击取胜的武器，招式凌厉行动敏捷，独有的“鬼人化”状态还能进一步强化伤害，将进攻发挥到极致。',
  },
  Hammer: {
    slogan: '非常具有暴力美的武器',
    description:
      '大锤主要任务是锁定怪物头部导致怪物气绝为主，输出为次要，缺点是动作比较慢，而且打击距离很短。',
  },
  Hunting_Horn: {
    slogan: '非常多变的支援型武器',
    description: '狩猎笛的攻击动作分为三种音色：音色1(♩)、音色2(♪)和音色3(♫)。',
  },
  Lance: {
    slogan: '枪与盾的结合，防御时不动如山，攻击时快准狠',
    description:
      '左手持枪右手挽盾，强大的防御力与精准的攻击结合，熟练掌握后生存能力拔群，被称为“钢铁城墙”。',
  },
  Gunlance: {
    slogan: '“男人的浪漫”',
    description:
      '在长枪的基础上追加了炮击能力，利用怪物的吐息攻击原理的“龙击炮”，使这把武器成为了威力绝大的机械枪。不过由于火药令其斩味下降，使用“龙击炮”后要散热，实际使用起来还是比较复杂。',
  },
  Switch_Axe: {
    slogan: '以变形为核心理念设计的武器',
    description:
      '拥有斧头和大剑两种形态，斧形态攻击大开大合，剑形态攻击凌厉且可利用能量瓶释放能量伤害。',
  },
  Charge_Blade: {
    slogan: '以合体为核心理念设计的武器',
    description:
      '利用剑模式的攻击积攒能量充入盾牌内部的瓶子，充能后可变形为斧形态释放惊人杀伤力。',
  },
  Insect_Glaive: {
    slogan: '超群的缠斗能力',
    description:
      '左手持棍，右手承载猎虫，不需高地即可起跳攻击，猎虫从怪物体内吸取的能量还能强化自身（有时间限制）。强大的骑怪能力与连捷攻击可以将怪物完全压制。',
  },
  Light_Bowgun: {
    slogan: '灵活移动、快速射击',
    description: '快速的射击速度，搭配多种弹药类型。',
  },
  Heavy_Bowgun: {
    slogan: '重型远程攻击武器',
    description:
      '收放武器速度缓慢，移动速度缓慢，但威力极大，远超同等级的其他远程攻击武器（轻弩和弓）特点为可以使用强有力的“蹲射”，但由于蹲射时不能移动，所以蹲射时机的选择很重要。',
  },
  Bow: {
    slogan: '兼具策略和技巧的远程武器',
    description:
      '适合中距离及远距离的开阔战场，蓄气攻击可以弥补攻击力方面的不足，狩猎时的万能武器。不过要注意防御力较弱，与敌人确保距离非常重要。',
  },
};
