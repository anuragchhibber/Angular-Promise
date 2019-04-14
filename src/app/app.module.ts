import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    AuthenticationModule,
    DashboardModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
