export interface IImageFile {
  id: string;
  name: string;
  nameCN?: string;
  path: string;
  heroName?: string;
  description?: string;
}

export interface IWarhammerClassifier {
  id: string;
  directory: string;
  nameCN: string;
  files: IImageFile[];
}

export interface IClan {
  parentId: string;
  file: {
    id: string;
    name: string;
    nameCN: string;
    path: string;
    description?: string;
    heroNames?: string[];
  };
}

export interface IWarhammerClassifierMap {
  [key: string]: IClan;
}
