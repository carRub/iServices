import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceListComponent } from './service-list/service-list.component';

const routes: Routes = [{ path: 'carpinteros', component: ServiceListComponent },
{ path: 'enfermeros', component: ServiceListComponent},
{ path: 'fontaneros', component: ServiceListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
