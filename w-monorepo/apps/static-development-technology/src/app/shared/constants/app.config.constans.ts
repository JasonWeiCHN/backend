import { IApp } from '@w-monorepo/interfaces';

export const APP_CONFIG: IApp = {
  banner: {
    title: '开发技术站',
    subtitle: '学点技术',
    rightContent: ''
  },
  navigationItems: [
    {
      id: 'front',
      path: 'front',
      label: '前端'
    },
    {
      id: 'backend',
      path: 'backend',
      label: '后台'
    }, {
      id: 'data',
      path: 'data',
      label: '数据库'
    }, {
      id: 'operation',
      path: 'operation',
      label: '运维'
    }]
};
