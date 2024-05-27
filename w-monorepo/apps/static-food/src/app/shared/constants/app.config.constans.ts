import { IApp } from '@w-monorepo/interfaces';

export const APP_CONFIG: IApp = {
  fileServer: 'http://localhost:8000/', // 'http://localhost:8000/' 'http://111.230.29.99:5001/food/'
  banner: {
    title: '世界美食',
    subtitle: '让你流着口说获得视觉享受',
    rightContent: ''
  },
  navigationItems: [
    {
      id: 'china',
      path: 'clans',
      label: '中华美食'
    },
    {
      id: 'southeastAsia',
      path: 'southeast-asia',
      label: '东南亚'
    }, {
      id: 'arabic',
      path: 'arabic',
      label: '阿拉伯'
    }, {
      id: 'europe',
      path: 'europe',
      label: '欧洲'
    }, {
      id: 'america',
      path: 'america',
      label: '美洲'
    }
  ]
};
