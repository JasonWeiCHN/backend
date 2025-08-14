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
    path: 'member/details/:id',
    loadComponent: () =>
      import('./pages/member-details/member-details.component').then(
        (m) => m.MemberDetailsComponent
      ),
  },
  {
    path: 'member/edit/:id',
    loadComponent: () =>
      import('./pages/member-form/member-form.component').then(
        (m) => m.MemberFormComponent
      ),
  },
  {
    path: 'member/recharge/:id',
    loadComponent: () =>
      import('./pages/member-recharge/member-recharge.component').then(
        (m) => m.MemberRechargeComponent
      ),
  },
  {
    path: 'member/consumption/:id',
    loadComponent: () =>
      import('./pages/member-consumption/member-consumption.component').then(
        (m) => m.MemberConsumptionComponent
      ),
  },
];
