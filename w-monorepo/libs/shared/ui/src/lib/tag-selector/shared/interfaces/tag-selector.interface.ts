import { EColor } from '@w-monorepo/enums';

export interface ITag {
  id: string;
  name: string;
  path?: string;
  description?: string;
  detail?: string;
  color?: EColor;
}

export interface ITagMap {
  [key: string]: ITag[];
}
