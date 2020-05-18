import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalsComponent } from './professionals.component';
import { ProfessionalDetailComponent } from './professional-detail/professional-detail.component';
import { ProfessionalService } from './professional.service';
import { ProfessionalMainComponent } from './professional-main/professional-main.component';
import { AuthGuardService } from '../core/auth/auth-guard.service';

const routes: Routes = [{ path: '', component: ProfessionalsComponent, canActivate: [AuthGuardService] },
                        { path: 'detail/:id', component: ProfessionalDetailComponent, canActivate: [AuthGuardService]} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalsRoutingModule { }
