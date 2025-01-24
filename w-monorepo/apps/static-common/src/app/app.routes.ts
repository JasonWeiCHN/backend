import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { PicsComponent } from './pages/pics/pics.component';
import { WikiComponent } from './pages/wiki/wiki.component';
import { PageComponent } from './pages/page/page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
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
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'pics',
    component: PicsComponent,
  },
  {
    path: 'wiki/:type/:id',
    component: WikiComponent,
  },
  // {
  //   path: 'news',
  //   component: NewsComponent,
  // },
  // {
  //   path: 'on-sale',
  //   redirectTo: 'on-sale/dog',
  // },
  // {
  //   path: 'on-sale/:type',
  //   component: PageComponent,
  // },
  // {
  //   path: 'food',
  //   component: FoodComponent,
  // },
  // {
  //   path: 'goods',
  //   component: GoodsComponent,
  // },
];
