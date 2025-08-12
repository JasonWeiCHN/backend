import { Route } from '@angular/router';
import { MemberListComponent } from './pages/member-list/member-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MemberListComponent,
  },
  {
    path: 'member',
    loadComponent: () =>
      import('./pages/member-list/member-list.component').then(
        (m) => m.MemberListComponent
      ),
  },
  {
    path: 'member/new',
    loadComponent: () =>
      import('./pages/member-form/member-form.component').then(
        (m) => m.MemberFormComponent
      ),
  },
  {
    path: 'member/edit/:id',
    loadComponent: () =>
      import('./pages/member-form/member-form.component').then(
        (m) => m.MemberFormComponent
      ),
  },
];
