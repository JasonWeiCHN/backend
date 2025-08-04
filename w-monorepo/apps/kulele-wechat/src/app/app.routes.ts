import { Route } from '@angular/router';
import { ConfigFormComponent } from './pages/config-form/config-form.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ConfigFormComponent,
  },
  {
    path: 'config',
    loadComponent: () =>
      import('./pages/config-form/config-form.component').then(
        (m) => m.ConfigFormComponent
      ),
  },
  {
    path: 'games',
    loadComponent: () =>
      import('./pages/games-form/games-form.component').then(
        (m) => m.GamesFormComponent
      ),
  },
];
