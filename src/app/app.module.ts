import { GuardService } from './second/guard.service';
import { AppRouterModule } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SecondComponent } from './second/second.component';
import { ProfileComponent } from './second/profile.component';
import { ShortProfileComponent } from './second/short-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    WelcomeComponent,
    SecondComponent,
    ProfileComponent,
    ShortProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
