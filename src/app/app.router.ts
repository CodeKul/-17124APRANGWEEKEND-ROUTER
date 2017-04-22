import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'first', component: FirstComponent }
];

export const AppRouterModule = RouterModule.forRoot(appRoutes);

