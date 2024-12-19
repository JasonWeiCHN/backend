import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { OnSaleComponent } from './pages/on-sale/on-sale.component';
import { FoodComponent } from './pages/food/food.component';
import { GoodsComponent } from './pages/goods/goods.component';
import { ServiceComponent } from './pages/service/service.component';
import { PicsComponent } from './pages/pics/pics.component';
import { WikiComponent } from './pages/wiki/wiki.component';

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
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'on-sale',
    component: OnSaleComponent,
  },
  {
    path: 'food',
    component: FoodComponent,
  },
  {
    path: 'goods',
    component: GoodsComponent,
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
    path: 'wiki/:id',
    component: WikiComponent,
  },
];
