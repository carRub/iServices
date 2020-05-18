import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      if(params.code){
          this.authService.googleLogin(params).subscribe((data)=>{
            if(!this.authService.isLoggedIn()){
              this.router.navigateByUrl('/shared/login');
            }
          })
      }

    })
  }

}
