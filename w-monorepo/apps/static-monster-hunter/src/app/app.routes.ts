import { Route } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';
import { WarSchoolComponent } from './pages/war-school/war-school.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { DiscountComponent } from './pages/discount/discount.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: WeaponsComponent,
  },
  {
    path: 'article/:warhammerClassifierId/:heroId',
    component: ArticleComponent,
  },
  {
    path: 'article/:id',
    component: ArticleComponent,
  },
  {
    path: 'weapons',
    component: WeaponsComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'discount',
    component: DiscountComponent,
  },
  {
    path: 'war-school',
    component: WarSchoolComponent,
  },
];
