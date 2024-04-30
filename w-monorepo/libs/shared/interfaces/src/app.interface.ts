// eslint-disable-next-line @nx/enforce-module-boundaries
import { INavigationItem, ITag } from '@w-monorepo/ui';

export interface IBanner {
  title: string;
  subtitle: string;
  rightContent: string;
}

export interface IApp {
  banner: IBanner;
  navigationItems: INavigationItem[];
  navTags?: ITag[];
}
