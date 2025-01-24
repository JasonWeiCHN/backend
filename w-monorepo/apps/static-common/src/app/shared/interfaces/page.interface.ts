import { INavigationItem, ITagMap } from '@w-monorepo/ui';
import { EPageMode } from '../enums/page.enum';
import { IArticleMap } from '@w-monorepo/interfaces';

export interface IPageConfig {
  mode: EPageMode;
  navigationItems?: INavigationItem[];
  tagMap?: ITagMap;
}

export interface IPageConfigMap {
  [key: string]: IPageConfig;
}

export interface IPageDataMap {
  [key: string]: IArticleMap;
}
