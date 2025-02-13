import { Route } from '@angular/router';
import { WikiComponent } from './pages/wiki/wiki.component';
import { PageComponent } from './pages/page/page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'page/cartridge/recommend',
    pathMatch: 'full', // 添加 pathMatch，确保路径完全匹配
  },
  {
    path: 'page/:type',
    component: PageComponent,
  },
  {
    path: 'page/:type/:nav',
    component: PageComponent,
  },
  {
    path: 'page/:type/:nav/:tag',
    component: PageComponent,
  },
  {
    path: 'wiki/:id',
    component: WikiComponent,
  },
];
