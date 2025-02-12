import { ITagMap } from '@w-monorepo/ui';
import { IPageConfigMap, IPageDataMap } from '../../interfaces/page.interface';
import { EPageMode } from '../../enums/page.enum';
import { CARTRIDGE_MAP, PS4_TAGS, PS5_TAGS } from './game.data.constants';

const GAME_TAG_MAP: ITagMap = {
  ps5: PS5_TAGS,
  ps4: PS4_TAGS,
  switch: [],
};

const COMMON_NAVIGATION_ITEMS = [
  {
    id: 'ps5',
    label: 'PS5',
    path: '',
  },
  {
    id: 'ps4',
    label: 'PS4',
    path: '',
  },
  {
    id: 'switch',
    label: 'Switch',
    path: '',
  },
  {
    id: 'old',
    label: '二手',
    path: '',
  },
];

export const GAME_PAGE_DATA: IPageDataMap = {
  cartridge: CARTRIDGE_MAP,
};

export const GAME_PAGE_MAP: IPageConfigMap = {
  cartridge: {
    mode: EPageMode.GOODS_CARD,
    navigationItems: COMMON_NAVIGATION_ITEMS,
  },
};
