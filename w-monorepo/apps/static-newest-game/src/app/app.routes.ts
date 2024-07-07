import { Route } from '@angular/router';
import { FreeDemoComponent } from './pages/free-demo/free-demo.component';
import { NewestComponent } from './pages/newest/newest.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { NewComponent } from './pages/new/new.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: FreeDemoComponent,
  },
  {
    path: 'free-demo',
    component: FreeDemoComponent,
  },
  {
    path: 'newest',
    component: NewestComponent,
  },
  {
    path: 'discount',
    component: DiscountComponent,
  },
  {
    path: 'new',
    component: NewComponent,
  },
];
