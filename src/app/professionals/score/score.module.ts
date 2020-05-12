import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { ScoreComponent } from './score.component';
import { ScoreListComponent } from './score-list/score-list.component';
import { ScoreMainComponent } from './score-list/score-main/score-main.component';


@NgModule({
  declarations: [ScoreComponent, ScoreListComponent, ScoreMainComponent],
  imports: [
    CommonModule,
    ScoreRoutingModule
  ],
  exports: [
    ScoreListComponent
  ]
})
export class ScoreModule { }
