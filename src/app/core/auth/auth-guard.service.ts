import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authSerive:AuthService,private router:Router) { }

  canActivate():boolean{
    if(!this.authSerive.isLoggedIn()){
      this.router.navigateByUrl('/');
      return false;
    }else{
      return true;
    }
  }

}

