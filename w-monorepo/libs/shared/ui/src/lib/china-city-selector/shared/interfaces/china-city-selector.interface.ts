export interface ICity {
  code: string;
  name: string;
}

export interface IProvince extends ICity {
  children: ICity[];
}
