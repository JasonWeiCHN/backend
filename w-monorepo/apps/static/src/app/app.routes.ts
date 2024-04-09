import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'article/:warhammerClassifierId/:heroId',
    component: ArticleComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  }
];
