import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoreComponent } from './score.component';
import { ScoreListComponent } from './score-list/score-list.component';

const routes: Routes = [{ path: '', component: ScoreListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreRoutingModule { }
