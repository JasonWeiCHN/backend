export interface IImageFile {
  id: string;
  name: string;
  nameCN?: string;
  path: string;
  heroName: string;
  heroNameEN?: string;
  heroAvatarPath: string;
  description?: string;
}

export interface IImageFileUpload extends IImageFile {
  warhammerClassifierId: string;
}

export interface IWarhammerClassifierBase {
  id: string;
  directory: string;
  nameCN: string;
}

export interface IWarhammerClassifier extends IWarhammerClassifierBase {
  files: IImageFile[];
}

export interface IClan {
  parentId: string;
  file: {
    id: string;
    name: string;
    nameCN: string;
    heroName: string;
    heroAvatarPath: string;
    heroNameEN?: string;
    path: string;
    description?: string;
    heroNames?: string[];
  };
}

export interface IWarhammerClassifierMap {
  [key: string]: IClan;
}
