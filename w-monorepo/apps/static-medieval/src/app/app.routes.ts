import { Route } from '@angular/router';
import { VideosComponent } from './pages/videos/videos.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { EnglishWordsComponent } from './pages/english-words/english-words.component';
import { HotkeysComponent } from './pages/hotkeys/hotkeys.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ArticlesComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'english-words',
    component: EnglishWordsComponent,
  },
  {
    path: 'hotkeys',
    component: HotkeysComponent,
  },
];
