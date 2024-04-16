import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { ClansComponent } from './pages/clans/clans.component';
import { WarSchoolComponent } from './pages/war-school/war-school.component';
import { ArticlesComponent } from './pages/articles/articles.component';

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
  },
  {
    path: 'clans',
    component: ClansComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'war-school',
    component: WarSchoolComponent
  }
];
