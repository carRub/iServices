import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfessionalService } from '../professional.service';
import { Professional } from '../Professional';
import { AuthService } from 'src/app/core/auth/auth.service';



@Component({
  selector: 'app-professional-detail',
  templateUrl: './professional-detail.component.html',
  styleUrls: ['./professional-detail.component.scss']
})
export class ProfessionalDetailComponent implements OnInit {
  profId: string;
  userId: string
  user: Professional;
  professionals: Professional [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private professionalsService: ProfessionalService,
              private authService: AuthService) {
                this.professionals = [];
               }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.profId = params.id;
    });

    this.professionalsService.getProfessional(this.profId).subscribe(
      (data: Professional) => {
        this.professionals.push(data);
        this.user = data;
    }
    );

    this.userId = this.authService.getCurrentUser();

  }

  test() {
    console.log(this.user);
    console.log(this.userId);
  }

}
