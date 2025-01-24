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
      id: 'onSale',
      label: '在售宠物',
      path: 'on-sale',
    },
    {
      id: 'food',
      label: '宠物粮仓',
      path: 'food',
    },
    {
      id: 'goods',
      label: '宠物用品',
      path: 'goods',
    },
    {
      id: 'service',
      label: '宠物服务',
      path: 'service',
    },
    {
      id: 'news',
      label: '宠物资讯',
      path: 'news',
    },
    {
      id: 'pics',
      label: '宠物美图',
      path: 'pics',
    },
  ],
  subNavigationItems: [
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
  ],
};
