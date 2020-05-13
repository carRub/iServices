import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponent } from './shared.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [{ path: '', component: LandingComponent },
{path:'login', component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
