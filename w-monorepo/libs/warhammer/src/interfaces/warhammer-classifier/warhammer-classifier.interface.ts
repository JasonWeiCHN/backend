interface IContributor {
  id: number;
  name: string;
  url: string;
}

export interface IWarhammerImageFile {
  id: string;
  name: string;
  nameCN?: string | null;
  path: string;
  heroName: string;
  heroNameEN?: string;
  heroNickName?: string;
  heroAvatarPath: string;
  description?: string | null;
  order?: number;
  contributors?: IContributor[];
}

export interface IClanUpload extends IWarhammerImageFile {
  warhammerClassifierId: string;
}

export interface IWarhammerClassifierBase {
  id: string;
  directory: string;
  nameCN: string;
  order?: number;
}

export interface IWarhammerClassifier extends IWarhammerClassifierBase {
  files: IWarhammerImageFile[];
}

export interface IClan {
  parentId: string;
  file: IWarhammerImageFile;
}

export interface IWarhammerClassifierMap {
  [key: string]: IClan;
}
