import { IGood } from '../good/good.interface';
import { IPlatform } from '../platform/platform.interface';

export interface IPrice {
  id: string;
  good: IGood; // 商品ID
  platform: IPlatform; // 平台ID
  date: string; // 日期（将使用字符串格式）
  price: number; // 商品价格
  sourceUrl: string; // 信息来源 URL
}

export interface IAddPrice {
  goodId: string;
  platformId: string;
  date: string;
  price: number;
  sourceUrl: string;
}
