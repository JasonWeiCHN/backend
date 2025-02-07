import { IApp } from '@w-monorepo/interfaces';

export const GAME_APP_CONFIG: IApp = {
  banner: {
    title: '卡带社',
    subtitle: '各种卡带',
    rightContent: '',
  },
  navigationItems: [
    {
      id: 'cartridge',
      label: '游戏卡带',
      path: 'page/cartridge',
    },
  ],
};
