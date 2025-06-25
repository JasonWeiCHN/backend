import { Route } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/product-list/product-list.component').then(
        (m) => m.ProductListComponent
      ),
  },
  {
    path: 'products/new',
    loadComponent: () =>
      import('./pages/product-form/product-form.component').then(
        (m) => m.ProductFormComponent
      ),
  },
  {
    path: 'products/edit/:id',
    loadComponent: () =>
      import('./pages/product-form/product-form.component').then(
        (m) => m.ProductFormComponent
      ),
  },
];
