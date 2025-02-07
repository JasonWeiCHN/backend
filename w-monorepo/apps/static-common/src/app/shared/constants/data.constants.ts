import { IPageConfigMap, IPageDataMap } from '../interfaces/page.interface';
import { GAME_PAGE_DATA, GAME_PAGE_MAP } from './games/game.page.constants';
import { IWikiDataMap } from '../interfaces/wiki.interface';
import { GAME_WIKI_DATA_MAP } from './games/game.wiki.data.constants';

export const PAGE_DATA: IPageDataMap = GAME_PAGE_DATA;
export const PAGE_MAP: IPageConfigMap = GAME_PAGE_MAP;

export const WIKI_DATA_MAP: IWikiDataMap = GAME_WIKI_DATA_MAP;
