import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceCardComponent } from './service-list/service-card/service-card.component';
import { ProfessionalsModule } from '../professionals/professionals.module';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ServicesComponent, ServiceDetailComponent, ServiceListComponent, ServiceCardComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ProfessionalsModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    ServiceListComponent, ServiceCardComponent
  ]
})
export class ServicesModule { }
