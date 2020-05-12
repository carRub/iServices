import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './clients.component';
import { AuthGuardService } from '../core/auth/auth-guard.service';

const routes: Routes = [{ path: '', component: ClientsComponent,canActivate:[AuthGuardService] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
