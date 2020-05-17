import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { partitionArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private route: ActivatedRoute,
    private router:Router) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      if(params.code){
          this.authService.googleLogin(params).subscribe((data)=>{
            if(this.authService.isLoggedIn()){
              this.router.navigateByUrl('/chat');
            }
          })
      }

    })
  }

  submit(formulario:NgForm){
    console.log(formulario.value.email);
    console.log(formulario.value.password);
    this.authService.login(formulario.value.email,formulario.value.password)
      .subscribe(
        (data)=>{console.log(data)
        this.router.navigateByUrl('/')},
        (err)=>console.log(err)
      )

      console.log("redirigir");
  }




}
