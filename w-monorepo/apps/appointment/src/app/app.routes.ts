import { Route } from '@angular/router';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppointmentListComponent,
  },
  {
    path: 'appointment',
    loadComponent: () =>
      import('./pages/appointment-list/appointment-list.component').then(
        (m) => m.AppointmentListComponent
      ),
  },
  {
    path: 'appointment/new',
    loadComponent: () =>
      import('./pages/appointment-form/appointment-form.component').then(
        (m) => m.AppointmentFormComponent
      ),
  },
  {
    path: 'appointment/edit/:id',
    loadComponent: () =>
      import('./pages/appointment-form/appointment-form.component').then(
        (m) => m.AppointmentFormComponent
      ),
  },
];
