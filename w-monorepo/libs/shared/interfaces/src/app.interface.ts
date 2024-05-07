import { IBanner, INavigationItem, ITag } from '@w-monorepo/ui';

export interface IApp {
  banner: IBanner;
  navigationItems: INavigationItem[];
  navTags?: ITag[];
}
