import { IApp } from '@w-monorepo/interfaces';

export const APP_CONFIG: IApp = {
  banner: {
    title: '近视防控研究站',
    subtitle: '预防近视，各种方法',
    rightContent: '',
  },
  navigationItems: [
    {
      id: 'knowledge',
      path: 'knowledge',
      label: '知识讲堂',
    },
    {
      id: 'experience',
      path: 'experience',
      label: '经验分享',
    },
    {
      id: 'equipment',
      path: 'equipment',
      label: '防控设备',
    },
  ],
};
