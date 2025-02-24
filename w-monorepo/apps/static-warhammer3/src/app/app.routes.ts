import { Route } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { ClansComponent } from './pages/clans/clans.component';
import { WarSchoolComponent } from './pages/war-school/war-school.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ModsComponent } from './pages/mods/mods.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { VoteComponent } from './pages/vote/vote.component';
import { HardToFightComponent } from './pages/vote/pages/hard-to-fight/hard-to-fight.component';
import { EasyToFightComponent } from './pages/vote/pages/easy-to-fight/easy-to-fight.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ClansComponent,
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
    path: 'clans',
    component: ClansComponent,
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
  {
    path: 'mods',
    component: ModsComponent,
  },
  {
    path: 'vote',
    component: VoteComponent,
  },
  // 专用路由
  {
    path: 'vote/hard-to-fight',
    component: HardToFightComponent,
  },
  {
    path: 'vote/easy-to-fight',
    component: EasyToFightComponent,
  },
];
