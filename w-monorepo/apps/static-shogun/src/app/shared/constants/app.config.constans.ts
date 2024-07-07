import { IApp } from '@w-monorepo/interfaces';
import { GAMES } from '@w-monorepo/game';

export const APP_CONFIG: IApp = {
  project: GAMES[1],
  projects: GAMES,
  banner: {
    title: '宝藏游戏之家',
    subtitle: '好游戏汇聚此地',
    rightContent: '全面战争·战锤3'
  },
  navigationItems: [
    {
      id: 'clans',
      path: 'clans',
      label: '全派系'
    },
    {
      id: 'articles',
      path: 'articles',
      label: '最新资讯'
    }, {
      id: 'warSchool',
      path: 'war-school',
      label: '战争讲堂'
    }, {
      id: 'mods',
      path: 'mods',
      label: 'Mod推荐'
    }]
};
