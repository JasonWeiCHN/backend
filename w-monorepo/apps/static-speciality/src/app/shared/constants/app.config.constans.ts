import { IApp } from '@w-monorepo/interfaces';

export const APP_CONFIG: IApp = {
  fileServer: 'http://localhost:8000/', // 'http://localhost:8000/' 'http://111.230.29.99:5001/speciality/'
  banner: {
    title: '特产名录',
    subtitle: '好东西汇聚于此',
    rightContent: ''
  },
  navigationItems: [
    {
      id: 'food',
      path: 'food',
      label: '美食'
    },
    {
      id: 'tea',
      path: 'tea',
      label: '茶'
    },
    {
      id: 'wine',
      path: 'wine',
      label: '酒'
    },
    {
      id: 'fruit',
      path: 'fruit',
      label: '水果'
    },
    {
      id: 'gemstone',
      path: 'gemstone',
      label: '宝石'
    },
    {
      id: 'medicine',
      path: 'medicine',
      label: '名药'
    },
    {
      id: 'flower',
      path: 'flower',
      label: '花'
    }
  ]
};
