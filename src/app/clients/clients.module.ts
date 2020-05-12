import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ClientsComponent, FavoritesComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    HttpClientModule
  ]
})
export class ClientsModule { }
