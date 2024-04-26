import { Route } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RaceComponent } from './pages/race/race.component';
import { ClansComponent } from './pages/clans/clans.component';
import { ItemCardComponent } from './pages/item-card/item-card.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'race',
        component: RaceComponent
      },
      {
        path: 'clans',
        component: ClansComponent
      },
      {
        path: 'item-cards',
        component: ItemCardComponent
      }
    ]
  }
];
