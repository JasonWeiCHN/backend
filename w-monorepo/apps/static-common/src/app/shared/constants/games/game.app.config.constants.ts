import { IApp } from '@w-monorepo/interfaces';

export const GAME_APP_CONFIG: IApp = {
  banner: {
    title: '宝藏宠物之家',
    subtitle: '找到你命中注定的它',
    rightContent: '',
  },
  navigationItems: [
    {
      id: 'onSale',
      label: '在售宠物',
      path: 'page/on-sale',
    },
    {
      id: 'cartridge',
      label: '游戏卡带',
      path: 'page/cartridge',
    },
    {
      id: 'goods',
      label: '宠物用品',
      path: 'page/goods',
    },
    {
      id: 'service',
      label: '宠物服务',
      path: 'service',
    },
    {
      id: 'news',
      label: '宠物资讯',
      path: 'page/news',
    },
    {
      id: 'pics',
      label: '宠物美图',
      path: 'page/pics',
    },
  ],
};
