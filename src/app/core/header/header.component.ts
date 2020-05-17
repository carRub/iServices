import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logueado = false;
  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    this.authservice.logueado.subscribe((val)=>{
      console.log("está logueado?",val);
      this.logueado = val;
    })
  }

  logout(){
    this.authservice.logout();
  }

}
