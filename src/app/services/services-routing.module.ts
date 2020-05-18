import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { AuthGuardService } from '../core/auth/auth-guard.service';

const routes: Routes = [{ path: 'carpinteros', component: ServiceListComponent, canActivate: [AuthGuardService] },
{ path: 'enfermeros', component: ServiceListComponent, canActivate: [AuthGuardService]},
{ path: 'fontaneros', component: ServiceListComponent, canActivate: [AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
