import { Route } from '@angular/router';
import { AccountingCardComponent } from './pages/accounting-card/accounting-card.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AccountingCardComponent,
  },
  {
    path: 'accounting-card', // 包房开台
    loadComponent: () =>
      import('./pages/accounting-card/accounting-card.component').then(
        (m) => m.AccountingCardComponent
      ),
  },
  {
    path: 'accounting-list', // 开台记录
    loadComponent: () =>
      import('./pages/accounting-list/accounting-list.component').then(
        (m) => m.AccountingListComponent
      ),
  },
  {
    path: 'accounting/new', // 填表开台
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
