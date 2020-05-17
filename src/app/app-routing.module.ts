import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './shared/login/login.component';


const routes: Routes = [{path:'google/redirect',loadChildren:()=>import('./shared/shared.module').then(m=>m.SharedModule),canActivate:[AuthGuardService]},
                        { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule),canActivate:[AuthGuardService]},
                        { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule),canActivate:[AuthGuardService] },
                        { path: 'professionals', loadChildren: () => import('./professionals/professionals.module').then(m => m.ProfessionalsModule),canActivate:[AuthGuardService] },
                        { path: 'score', loadChildren: () => import('./professionals/score/score.module').then(m => m.ScoreModule),canActivate:[AuthGuardService] },
                        { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule),canActivate:[AuthGuardService] },
                        { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),canActivate:[AuthGuardService] },
                        { path: 'chat', loadChildren: () => import('./shared/chat/chat.module').then(m => m.ChatModule),canActivate:[AuthGuardService] },
                        { path: '', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),canActivate:[AuthGuardService]},
                        { path: 'agenda', loadChildren: () => import('./professionals/agenda/agenda.module').then(m => m.AgendaModule),canActivate:[AuthGuardService] },
                        { path: 'job', loadChildren: () => import('./professionals/job/job.module').then(m => m.JobModule),canActivate:[AuthGuardService] }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
