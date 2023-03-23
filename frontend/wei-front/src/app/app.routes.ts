import { Route } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {UserComponent} from "./pages/user/user.component";

export const appRoutes: Route[] = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'user',
                component: UserComponent,
            }
        ]
    },
];
