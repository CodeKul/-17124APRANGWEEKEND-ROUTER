import { ShortProfileComponent } from './second/short-profile.component';
import { ProfileComponent } from './second/profile.component';
import { SecondComponent } from './second/second.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { Routes, RouterModule } from '@angular/router';

const secondRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'shortProfile', component: ShortProfileComponent }
];

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'first', component: FirstComponent },
    { path: 'second/:id', component: SecondComponent, children: secondRoutes },
    { path: '**', redirectTo: '' }
];

export const AppRouterModule = RouterModule.forRoot(appRoutes);

