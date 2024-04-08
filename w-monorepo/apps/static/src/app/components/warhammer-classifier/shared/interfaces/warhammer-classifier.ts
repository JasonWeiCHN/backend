export interface IImageFile {
  name: string;
  nameCN?: string;
  path: string;
  heroName?: string;
  description?: string;
}

export interface IWarhammerClassifier {
  directory: string;
  nameCN: string;
  files: IImageFile[];
}
