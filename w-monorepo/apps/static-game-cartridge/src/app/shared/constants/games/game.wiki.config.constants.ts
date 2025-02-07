import { IWikiConfig } from '../../interfaces/wiki.interface';

export const GAME_WIKI_CONFIG: IWikiConfig = {
  chart: [
    {
      id: 'name',
      label: '名称',
    },
    {
      id: 'release',
      label: '发售日期',
    },
    {
      id: 'manufacturer',
      label: '制造商',
    },
  ],
  content: [
    {
      id: 'overview',
      title: '概述',
    },
    {
      id: 'description',
      title: '说明',
    },
  ],
};
