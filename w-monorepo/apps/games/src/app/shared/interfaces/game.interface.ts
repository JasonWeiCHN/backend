import { ITag } from '@w-monorepo/ui';
import { IGenre } from './genre.interface';

export interface IGameGuide {
  title: string;
  description?: string;
  author?: string;
  sourceUrl: string;
}

export interface IGame {
  id?: number;
  name: string;
  image: string;
  tags?: ITag[]; // 如 ['双人', '亲子', 'PS5']
  searchKeywords?: string; // 如 "双影奇境 SYQJ"
  path?: string; // 页面路径
  releaseDate?: string; // ISO 日期字符串
  description?: string;
  genres?: IGenre[]; // 游戏类型
  guides?: IGameGuide[];
  videos?: string[];
  imagesForDetail?: string[];
}

export interface IAddGameRequest {
  name: string;
  image: string;
  tags: string[]; // tag id list
  searchKeywords?: string;
  path?: string;
  releaseDate?: string;
  description?: string;
  videos?: string[];
  imagesForDetail?: string[];
  genres: string[]; // genre id list
  guides: IGameGuide[]; // ✅ 强制要求为数组，便于总是传空数组 []
}
