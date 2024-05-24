import { Route } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { ClansComponent } from './pages/clans/clans.component';
import { WarSchoolComponent } from './pages/war-school/war-school.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ModsComponent } from './pages/mods/mods.component';
import { DiscountComponent } from './pages/discount/discount.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ClansComponent
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
    path: 'discount',
    component: DiscountComponent
  },
  {
    path: 'war-school',
    component: WarSchoolComponent
  },
  {
    path: 'mods',
    component: ModsComponent
  }
];
