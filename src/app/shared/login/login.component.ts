import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) {

  }

  ngOnInit(): void {
  }

  submit(formulario:NgForm){
    console.log(formulario.value.email);
    console.log(formulario.value.password);
    this.authService.login(formulario.value.email,formulario.value.password)
      .subscribe(
        (data)=>console.log(data),
        (err)=>console.log(err)
      )
  }

}
