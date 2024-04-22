export interface IItemCard {
  id: string;
  typeId?: string;
  sourceUrl?: string;
  publisher?: string;
  views?: number | string;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  detail: string;
}
