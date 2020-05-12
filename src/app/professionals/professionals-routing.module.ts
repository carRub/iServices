import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalsComponent } from './professionals.component';
import { ProfessionalDetailComponent } from './professional-detail/professional-detail.component';

const routes: Routes = [{ path: '', component: ProfessionalsComponent },
                        { path: 'detail', component: ProfessionalDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalsRoutingModule { }
