interface IContributor {
  id: number;
  name: string;
  url: string;
}

export interface IImageFile {
  id: string;
  name: string;
  nameCN?: string | null;
  path: string;
  heroName: string;
  heroNameEN?: string;
  heroAvatarPath: string;
  description?: string | null;
  order?: number;
  contributors?: IContributor[];
}

export interface IClanUpload extends IImageFile {
  warhammerClassifierId: string;
}

export interface IWarhammerClassifierBase {
  id: string;
  directory: string;
  nameCN: string;
  order?: number;
}

export interface IWarhammerClassifier extends IWarhammerClassifierBase {
  files: IImageFile[];
}

export interface IClan {
  parentId: string;
  file: IImageFile;
}

export interface IWarhammerClassifierMap {
  [key: string]: IClan;
}
