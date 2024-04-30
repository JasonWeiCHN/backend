import { IApp } from '@w-monorepo/interfaces';

export const APP_CONFIG: IApp = {
  banner: {
    title: '搞笑一箩筐',
    subtitle: '让人爆笑的那几秒中',
    rightContent: ''
  },
  navigationItems: [
    {
      id: 'uncontrollableMoment',
      path: 'uncontrollable-moment',
      label: '绷不住的瞬间'
    },
    {
      id: 'funnyCollection',
      path: 'funnyCollection',
      label: '无敌合集'
    }, {
      id: 'parodyAndPrank',
      path: 'parody-and-prank',
      label: '恶搞整活'
    }, {
      id: 'superJoke',
      path: 'super-joke',
      label: '超能段子'
    }]
};
