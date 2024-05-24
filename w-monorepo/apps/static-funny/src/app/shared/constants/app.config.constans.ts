import { IApp } from '@w-monorepo/interfaces';

export const APP_CONFIG: IApp = {
  fileServer: 'http://111.230.29.99:5001/funny/', // 'http://localhost:8000/'
  banner: {
    title: '搞笑一箩筐',
    subtitle: '我要的只是快乐',
    rightContent: ''
  },
  navigationItems: [],
  navTags: [
    {
      id: 'cute',
      name: '可爱'
    },
    {
      id: 'sweet',
      name: '高甜'
    },
    {
      id: 'sexy',
      name: '性感'
    },
    {
      id: 'classical',
      name: '古典'
    },
    {
      id: 'life',
      name: '生活'
    },
    {
      id: 'dance',
      name: '舞蹈'
    },
    {
      id: 'sakura-girl',
      name: '樱花妹'
    },
    {
      id: 'korean',
      name: '韩系'
    }
  ]
};
