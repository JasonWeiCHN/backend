import { Route } from '@angular/router';
import { RoomListComponent } from './pages/room-list/room-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: RoomListComponent,
  },
  {
    path: 'room',
    loadComponent: () =>
      import('./pages/room-list/room-list.component').then(
        (m) => m.RoomListComponent
      ),
  },
  {
    path: 'room/new',
    loadComponent: () =>
      import('./pages/room-form/room-form.component').then(
        (m) => m.RoomFormComponent
      ),
  },
  {
    path: 'room/edit/:id',
    loadComponent: () =>
      import('./pages/room-form/room-form.component').then(
        (m) => m.RoomFormComponent
      ),
  },
];
