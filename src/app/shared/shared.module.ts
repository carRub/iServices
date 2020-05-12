import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
// import { ChatComponent } from './chat/chat.component';
import { ChatModule } from './chat/chat.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [SharedComponent, LoginComponent, RegisterComponent, ProfileComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ChatModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
