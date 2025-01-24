export interface IPetProperties {
  /** 品种 */
  type: string;
  /** 活力 */
  energy: string;
  /** 脱毛 */
  shedding: string;
  /** 可训练度 */
  training: string;
  /** 脾气 */
  temperament: string;
  /** 体重（成年） */
  weight: string;
  /** 身高（成年） */
  height: string;
  /** 寿命 */
  life: string;
}

export interface IPetDetails {
  overview: string;
  characteristics: string;
  appearance: string;
  photos: [string];
  temperament: string;
  care: string;
  history: string;
}

export interface IPetMap {
  [key: string]: {
    details: IPetDetails;
    properties: IPetProperties;
  };
}
