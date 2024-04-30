import { IApp } from '@w-monorepo/interfaces';

export const APP_CONFIG: IApp = {
  banner: {
    title: '世界菜谱',
    subtitle: '美食吃不完',
    rightContent: ''
  },
  navigationItems: [
    {
      id: 'homeCooking',
      path: 'home-cooking',
      label: '家常菜'
    },
    {
      id: 'chef',
      path: 'chef',
      label: '大厨'
    }, {
      id: 'simpleDishes',
      path: 'simple-dishes',
      label: '简单菜'
    }]
};
