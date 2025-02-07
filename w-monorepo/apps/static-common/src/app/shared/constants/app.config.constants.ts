import { IApp } from '@w-monorepo/interfaces';
import { GAME_APP_CONFIG } from './games/game.app.config.constants';
import { IWikiConfig } from '../interfaces/wiki.interface';
import { GAME_WIKI_CONFIG } from './games/game.wiki.config.constants';

export const WIKI_CONFIG: IWikiConfig = GAME_WIKI_CONFIG;
export const APP_CONFIG: IApp = GAME_APP_CONFIG;
