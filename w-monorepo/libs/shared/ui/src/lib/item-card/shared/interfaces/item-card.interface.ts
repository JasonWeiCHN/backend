export interface IPrice {
  discountPercent: number;
  initial: string;
  final: string;
  xy?: string; // 闲鱼
  jd?: string; // 京东
  tb?: string; // 淘宝
  pdd?: string; // 拼多多
}

export interface IItemCard {
  id: string;
  tagIds: string[];
  typeId?: string;
  sourceUrl?: string;
  publisher?: string;
  views?: number | string;
  imageUrl: string;
  title: string;
  description: string;
  date: string | null;
  detail: string;
  referer?: string | null;
  price?: IPrice;
}
