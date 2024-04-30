import { IApp } from '@w-monorepo/interfaces';

export const APP_CONFIG: IApp = {
  banner: {
    title: '天下骑行',
    subtitle: '骑行资源聚合站',
    rightContent: ''
  },
  navigationItems: [
    {
      id: 'riders',
      path: 'riders',
      label: '正在骑行的人'
    },
    {
      id: 'preparation',
      path: 'preparation',
      label: '骑行准备'
    }, {
      id: 'experience',
      path: 'experience',
      label: '经验分享'
    }, {
      id: 'holyLand',
      path: 'holy-land',
      label: '打卡圣地'
    }]
};
