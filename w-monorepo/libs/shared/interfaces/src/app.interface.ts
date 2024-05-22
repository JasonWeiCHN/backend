import { IBanner, INavigationItem, ISwitcherProject, ITag } from '@w-monorepo/ui';

export interface IApp {
  fileServer?: string;
  banner: IBanner;
  navigationItems: INavigationItem[];
  navTags?: ITag[];
  projects?: ISwitcherProject[];
  project?: ISwitcherProject;
}
