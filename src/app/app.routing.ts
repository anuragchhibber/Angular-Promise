import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LandingComponent } from './landing/landing.component';


export  const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'login', loadChildren: './authentication/authentication.module#AuthenticationModule'},
    { path: 'dash', loadChildren: './dashboard/dashboard.module#DashboardModule'}
   
  ];

  export  const routing: ModuleWithProviders = RouterModule.forRoot(routes);