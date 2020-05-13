import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceCardComponent } from './service-list/service-card/service-card.component';


@NgModule({
  declarations: [ServicesComponent, ServiceDetailComponent, ServiceListComponent, ServiceCardComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  exports:[
    ServiceListComponent, ServiceCardComponent
  ]
})
export class ServicesModule { }
