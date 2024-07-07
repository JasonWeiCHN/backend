import { IApp } from '@w-monorepo/interfaces';

export const APP_CONFIG: IApp = {
  fileServer: 'http://111.230.29.99:5001/newest-game/', // 'http://localhost:8000/' 'http://111.230.29.99:5001/newest-game/'
  banner: {
    title: '最新游戏资讯',
    subtitle: '打折·免费·新游',
    rightContent: '',
  },
  navigationItems: [
    {
      id: 'freeDemo',
      path: 'free-demo',
      label: '试玩空间',
    },
    {
      id: 'newest',
      path: 'newest',
      label: '首发新游',
    },
    {
      id: 'discount',
      path: 'discount',
      label: '打折消息',
    },
    {
      id: 'new',
      path: 'new',
      label: '新游资讯',
    },
  ],
};
