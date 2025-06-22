import { Route } from '@angular/router';
import { GameListComponent } from './pages/game-list/game-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: GameListComponent,
  },
  {
    path: 'games',
    component: GameListComponent,
  },
  {
    path: 'game/new',
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
  {
    path: 'game/view/:id',
    loadComponent: () =>
      import('./pages/game-details/game-details.component').then(
        (m) => m.GameDetailsComponent
      ),
  },
  {
    path: 'game/guides/:id',
    loadComponent: () =>
      import('./pages/game-guides/game-guides.component').then(
        (m) => m.GameGuidesComponent
      ),
  },
];
