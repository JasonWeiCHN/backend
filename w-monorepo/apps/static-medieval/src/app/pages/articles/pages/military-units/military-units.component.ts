import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IMilitaryUnit {
  id: string;
  title: string;
  titleCn: string;
  descEn: string;
  descCn: string;
}

@Component({
  selector: 'app-military-units',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './military-units.component.html',
  styleUrl: './military-units.component.scss',
})
export class MilitaryUnitsComponent {
  protected data: IMilitaryUnit[] = [
    {
      id: 'AbyssinianGuard',
      title: 'Abyssinian Guard',
      titleCn: '阿比西尼亚卫队',
      descEn:
        'Abyssinians have been guarding Egyptian rulers for centuries. They are used on the battlefield as disciplined axemen, able to carve a path through enemies. Their lack of armour is a weakness, but their superb discipline is some compensation. They are best used to attack peasants, militia and spearmen.',
      descCn:
        '阿比西尼亚人守卫埃及统治者已有数个世纪。他们在战场上作为训练有素的斧兵，能够开辟一条通往敌人的道路。他们缺乏盔甲是一个弱点，但出色的纪律性稍微弥补了这一点。他们最适合用于攻击农民、民兵和长矛兵。',
    },
    {
      id: 'AlanMercenaryCavalry',
      title: 'Alan Mercenary Cavalry',
      titleCn: '阿兰雇佣骑兵',
      descEn:
        'The Alans are excellent steppe horsemen - almost as if they are born in the saddle! The Byzantines see them as the best light cavalry mercenaries available. They can be used to skirmish, ambush and act as a swift covering force for the flanks of heavier cavalry.',
      descCn:
        '阿兰人是优秀的草原骑士，几乎就像他们是天生的骑兵！拜占庭人认为他们是最好的轻骑兵雇佣军。他们可以用来进行骚扰、伏击，并作为重骑兵侧翼的快速掩护力量。',
    },
    {
      id: 'AlmohadUrbanMilitia',
      title: 'Almohad Urban Militia',
      titleCn: '阿尔摩哈德城市民兵',
      descEn:
        'As Islamic Spain comes under pressure, its cities look to their own defence, and create urban militias. These men have plenty of opportunities for battle and are much more competent and aggressive than the usual run of militiamen. Well armed and trained, they are almost a standing civic army, rather than a last ditch defence.',
      descCn:
        '随着伊斯兰西班牙面临压力，其城市开始着手自卫，组建了城市民兵。这些人有大量的战斗机会，远比普通的民兵更为精干和具有攻击性。他们武装精良、训练有素，几乎可以算是常备的市民军队，而非最后的防线。',
    },
    {
      id: 'Almughavars',
      title: 'Almughavars',
      titleCn: '阿尔穆加瓦尔轻步兵',
      descEn:
        'These lightly armoured Catalan mercenaries ply their trade all round the Mediterranean. They are shock troops armed with javelins that give them a fearsome missile attack to open gaps for a subsequent charge with their spears. Few others can match their professional determination and ferocity.',
      descCn:
        '这些轻装的加泰罗尼亚雇佣兵在整个地中海地区开展业务。他们是装备标枪的冲击部队，用其可怕的投射攻击打开缺口，随后用长矛发起冲锋。很少有人能与他们的职业决心和凶猛匹敌。',
    },
    {
      id: 'Arbalester',
      title: 'Arbalester',
      titleCn: '弩兵',
      descEn:
        'The arbalest is a heavy crossbow that can fire a bolt which will go through most armoured targets. It has a very slow rate of fire, and needs a small windlass to pull span the weapon. Properly protected by other troops, arbalesters can be deadly.',
      descCn:
        '强弩是一种重型弩，可以发射穿透大多数装甲目标的箭矢。它的射速非常慢，需要使用小绞盘来张弩。若有其他部队的适当保护，弩兵可以变得极其致命。',
    },
    {
      id: 'Archers',
      title: 'Archers',
      titleCn: '弓箭手',
      descEn:
        'Archery is a survival skill: it helps put food on the table, assuming that the archer isn’t hanged as a poacher! Using the same skill in battle can bring down an armoured man, although short bows are not quite as efficient as true war bows.',
      descCn:
        '射箭是一项生存技能：它帮助人们猎取食物，前提是弓箭手不会因为偷猎而被绞死！在战斗中使用同样的技能可以击倒穿着盔甲的人，尽管短弓的效率不如真正的战争弓。',
    },
    {
      id: 'ArmenianHeavyCavalry',
      title: 'Armenian Heavy Cavalry',
      titleCn: '亚美尼亚重骑兵',
      descEn:
        'Even in Roman times Armenian cavalrymen were often given a position of honour in an army. The Byzantines and others still know that they are disciplined, aggressive and capable. Armed with lances, their initial charge is powerful, and they are steady and reliable when compared to feudal cavalry.',
      descCn:
        '早在罗马时代，亚美尼亚骑兵经常在军队中获得荣誉职位。拜占庭人和其他人仍然知道他们纪律严明，富有攻击性且能力出众。他们配备长矛，初次冲锋力量强大，且相比封建骑兵更加稳定可靠。',
    },
    {
      id: 'ArmHorse',
      title: 'Armored Horse',
      titleCn: '装甲马',
      descEn: 'Another Horse',
      descCn: '装甲马',
    },
    {
      id: 'Arquebusier',
      title: 'Arquebusier',
      titleCn: '火绳枪兵',
      descEn:
        'The arquebus or matchlock is a relatively sophisticated firearm. It is easy to use, can be aimed with some accuracy and rarely explodes, so as not to kill its user! Arquebusiers can fire volleys at an enemy, damaging morale as well as frail flesh, but they cannot fire at all in wet weather.',
      descCn:
        '火绳枪是一种相对复杂的火器。它易于使用，瞄准精度较高，且很少发生爆炸，不会伤及使用者！火绳枪兵可以对敌人进行齐射，既能打击士气，也能伤害脆弱的肉体，但在潮湿天气下完全无法射击。',
    },
  ];
}
