import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalsComponent } from './professionals.component';
import { ProfessionalDetailComponent } from './professional-detail/professional-detail.component';
import { ProfessionalService } from './professional.service';
import { ProfessionalMainComponent } from './professional-main/professional-main.component';

const routes: Routes = [{ path: '', component: ProfessionalsComponent },
                        { path: 'detail/:id', component: ProfessionalDetailComponent} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalsRoutingModule { }
