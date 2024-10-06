import { IApp } from '@w-monorepo/interfaces';
import { GAMES } from '@w-monorepo/game';

export const APP_CONFIG: IApp = {
  project: GAMES[2],
  projects: GAMES,
  banner: {
    title: '宝藏游戏之家',
    subtitle: '好游戏汇聚此地',
    rightContent: '全面战争·战锤3',
  },
  navigationItems: [
    {
      id: 'articles',
      path: 'articles',
      label: '文章',
    },
    {
      id: 'videos',
      path: 'videos',
      label: '视频',
    },
    {
      id: 'englishWords',
      path: 'english-words',
      label: '英语单词',
    },
    {
      id: 'hotkeys',
      path: 'hotkeys',
      label: '快捷键',
    },
  ],
};
