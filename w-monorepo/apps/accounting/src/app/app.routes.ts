import { Route } from '@angular/router';
import { AccountingListComponent } from './pages/accounting-list/accounting-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AccountingListComponent,
  },
  {
    path: 'accounting',
    loadComponent: () =>
      import('./pages/accounting-list/accounting-list.component').then(
        (m) => m.AccountingListComponent
      ),
  },
  {
    path: 'accounting/new',
    loadComponent: () =>
      import('./pages/accounting-form/accounting-form.component').then(
        (m) => m.AccountingFormComponent
      ),
  },
  {
    path: 'accounting/edit/:id',
    loadComponent: () =>
      import('./pages/accounting-form/accounting-form.component').then(
        (m) => m.AccountingFormComponent
      ),
  },
];
