export interface ITag {
  id: string;
  name: string;
  description?: string;
  detail?: string;
}

export interface ITagMap {
  [key: string]: ITag[];
}
