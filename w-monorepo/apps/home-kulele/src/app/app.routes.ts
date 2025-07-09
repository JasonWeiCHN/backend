import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    component: AppComponent,
  },
  {
    path: 'merchant-auth',
    loadComponent: () =>
      import('./pages/merchant-auth/merchant-auth.component').then(
        (m) => m.MerchantAuthComponent
      ),
  },
];
