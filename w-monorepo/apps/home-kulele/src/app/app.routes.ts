import { Route } from '@angular/router';
import { MerchantAuthComponent } from './pages/merchant-auth/merchant-auth.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MerchantAuthComponent,
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'merchant-auth',
    loadComponent: () =>
      import('./pages/merchant-auth/merchant-auth.component').then(
        (m) => m.MerchantAuthComponent
      ),
  },
];
