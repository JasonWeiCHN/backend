import { ITagMap } from '@w-monorepo/ui';
import { IPageConfigMap, IPageDataMap } from '../../interfaces/page.interface';
import { EPageMode } from '../../enums/page.enum';
import {
  CARTRIDGE_MAP,
  GOODS_MAP,
  NEWS_MAP,
  ON_SALE_MAP,
  PS4_TAGS,
  PS5_TAGS,
} from './game.data.constants';

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
];

export const GAME_PAGE_DATA: IPageDataMap = {
  'on-sale': ON_SALE_MAP,
  cartridge: CARTRIDGE_MAP,
  goods: GOODS_MAP,
  news: NEWS_MAP,
  pics: ON_SALE_MAP,
};

export const GAME_PAGE_MAP: IPageConfigMap = {
  'on-sale': {
    mode: EPageMode.GALLERY,
    navigationItems: COMMON_NAVIGATION_ITEMS,
    tagMap: GAME_TAG_MAP,
  },
  cartridge: {
    mode: EPageMode.GOODS_CARD,
    navigationItems: COMMON_NAVIGATION_ITEMS,
  },
  goods: {
    mode: EPageMode.GOODS_CARD,
    navigationItems: COMMON_NAVIGATION_ITEMS,
  },
  news: {
    mode: EPageMode.ARTICLE,
    navigationItems: COMMON_NAVIGATION_ITEMS,
  },
  pics: {
    mode: EPageMode.GALLERY,
  },
};
