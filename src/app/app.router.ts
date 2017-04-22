import { FirstComponent } from './first/first.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes : Routes = [
    {path:'first', component: FirstComponent}
];

export const AppRouterModule = RouterModule.forRoot(appRoutes);

