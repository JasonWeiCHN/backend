import { IPageConfigMap } from '../interfaces/page.interface';
import { EPetTag } from '../enums/pet.enum';
import { EPageMode } from '../enums/page.enum';
import { PET_TAG_MAP } from './pets.constants';

const COMMON_NAVIGATION_ITEMS = [
  {
    id: EPetTag.DOG,
    label: '狗',
    path: '',
  },
  {
    id: EPetTag.CAT,
    label: '猫',
    path: '',
  },
];

export const PAGE_MAP: IPageConfigMap = {
  'on-sale': {
    mode: EPageMode.GALLERY,
    navigationItems: COMMON_NAVIGATION_ITEMS,
    tagMap: PET_TAG_MAP,
  },
  food: {
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
};
