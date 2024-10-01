import { Route } from '@angular/router';
import { VideosComponent } from './pages/videos/videos.component';
import { ArticlesComponent } from './pages/articles/articles.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: VideosComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
];
