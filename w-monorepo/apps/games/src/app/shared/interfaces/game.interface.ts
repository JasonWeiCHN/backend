export interface IGameGuide {
  title: string;
  description?: string;
  author?: string;
  sourceUrl: string;
}

export interface IGenre {
  id: string;
  name: string;
  description?: string;
}

export interface IGame {
  id?: number;
  name: string;
  image: string;
  tags?: string[]; // 如 ['双人', '亲子', 'PS5']
  searchKeywords?: string; // 如 "双影奇境 SYQJ"
  path?: string; // 页面路径
  releaseDate?: string; // ISO 日期字符串
  description?: string;
  genres?: IGenre[]; // 游戏类型
  guides?: IGameGuide[];
  video?: string; // 视频地址
}

export interface IAddGameRequest {
  name: string;
  image: string;
  tags: string[];
  searchKeywords?: string;
  path?: string;
  releaseDate?: string;
  description?: string;
  video?: string;
  genres: string[]; // genre id list
  guides?: {
    title: string;
    description?: string;
    author?: string;
    sourceUrl: string;
  }[];
}
