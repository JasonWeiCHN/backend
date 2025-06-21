import { Route } from '@angular/router';
import { ExpenseListComponent } from './pages/expense-list/expense-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ExpenseListComponent,
  },
  {
    path: 'expense',
    loadComponent: () =>
      import('./pages/expense-list/expense-list.component').then(
        (m) => m.ExpenseListComponent
      ),
  },
  {
    path: 'expense/new',
    loadComponent: () =>
      import('./pages/expense-form/expense-form.component').then(
        (m) => m.ExpenseFormComponent
      ),
  },
  {
    path: 'expense/edit/:id',
    loadComponent: () =>
      import('./pages/expense-form/expense-form.component').then(
        (m) => m.ExpenseFormComponent
      ),
  },
];
