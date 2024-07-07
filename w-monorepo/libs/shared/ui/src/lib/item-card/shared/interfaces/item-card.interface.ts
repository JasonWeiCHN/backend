export interface IPrice {
  discountPercent: number;
  initial: string;
  final: string;
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
