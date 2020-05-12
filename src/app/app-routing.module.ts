import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
                        { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
                        { path: 'professionals', loadChildren: () => import('./professionals/professionals.module').then(m => m.ProfessionalsModule) },
                        { path: 'score', loadChildren: () => import('./professionals/score/score.module').then(m => m.ScoreModule) },
                        { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
                        { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
                        { path: 'chat', loadChildren: () => import('./shared/chat/chat.module').then(m => m.ChatModule) },
                        { path: '', redirectTo: '', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
