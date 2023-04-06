import { Route } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { UserComponent } from './pages/user/user.component';
import { AddImageComponent } from './pages/image/pages/add-image/add-image.component';
import { TaskComponent } from './pages/task/task.component';
import { ProductComponent } from './pages/product/product.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'image',
        component: AddImageComponent,
      },
      {
        path: 'task',
        component: TaskComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
    ],
  },
];
