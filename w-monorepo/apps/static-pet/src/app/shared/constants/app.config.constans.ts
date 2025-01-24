import { IApp } from '@w-monorepo/interfaces';
import { EPetType } from '../enums/pet.enum';

export const APP_CONFIG: IApp = {
  banner: {
    title: '宝藏宠物之家',
    subtitle: '找到你命中注定的它',
    rightContent: '',
  },
  navigationItems: [
    {
      id: EPetType.DOG,
      label: '狗',
      path: '',
    },
    {
      id: EPetType.CAT,
      label: '猫',
      path: '',
    },
    // {
    //   id: EPetType.FISH,
    //   label: '鱼',
    //   path: '',
    // },
    // {
    //   id: EPetType.BIRD,
    //   label: '鸟',
    //   path: '',
    // },
    // {
    //   id: EPetType.MOUSE,
    //   label: '豚鼠',
    //   path: '',
    // },
  ],
};
