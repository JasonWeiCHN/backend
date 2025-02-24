import { IApp } from '@w-monorepo/interfaces';
import { GAMES } from '@w-monorepo/game';

export const APP_CONFIG: IApp = {
  project: GAMES[3],
  projects: GAMES,
  banner: {
    title: '宝藏游戏之家',
    subtitle: '好游戏汇聚此地',
    rightContent: '全面战争·战锤3',
  },
  navigationItems: [
    {
      id: 'weapons',
      path: 'weapons',
      label: '全武器',
    },
    {
      id: 'articles',
      path: 'articles',
      label: '文章资讯',
    },
    {
      id: 'warSchool',
      path: 'war-school',
      label: '实战讲堂',
    },
    // TODO 可以作为卖卡页面
    // {
    //   id: 'discount',
    //   path: 'discount',
    //   label: '折扣消息',
    // },
  ],
};
