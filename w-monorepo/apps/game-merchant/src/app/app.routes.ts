import { Route } from '@angular/router';
import { GameListComponent } from './pages/game-list/game-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: GameListComponent,
  },
  {
    path: 'game',
    loadComponent: () =>
      import('./pages/game-list/game-list.component').then(
        (m) => m.GameListComponent
      ),
  },
  {
    path: 'game/add',
    loadComponent: () =>
      import('./pages/game-form/game-form.component').then(
        (m) => m.GameFormComponent
      ),
  },
  {
    path: 'game/edit/:id',
    loadComponent: () =>
      import('./pages/game-form/game-form.component').then(
        (m) => m.GameFormComponent
      ),
  },
];
