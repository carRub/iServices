import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobComponent } from './job.component';
import { JobListComponent } from './job-list/job-list.component';



@NgModule({
  declarations: [JobComponent, JobListComponent],
  imports: [
    CommonModule,
    JobRoutingModule
  ],
  exports: [
    JobListComponent
  ]
})
export class JobModule { }
