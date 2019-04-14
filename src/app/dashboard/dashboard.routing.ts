import { Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashComponent } from './dash/dash.component';

export const routes: Routes = [
   { path: 'dash', component: DashComponent }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);