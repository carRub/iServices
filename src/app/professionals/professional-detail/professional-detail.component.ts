import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProfessionalService } from '../professional.service';
import { Subscription } from 'rxjs';
import { Professional } from '../Professional';

@Component({
  selector: 'app-professional-detail',
  templateUrl: './professional-detail.component.html',
  styleUrls: ['./professional-detail.component.scss']
})
export class ProfessionalDetailComponent implements OnInit {
  id: string;
  user: Professional;
  professionals: Professional [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private professionalsService: ProfessionalService) {
                this.professionals = [];
               }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });

    this.professionalsService.getProfessional(this.id).subscribe(
      (data: Professional) => {
        this.professionals.push(data);
        this.user = data;
    }
    );

  }

  test() {
    console.log(this.user);
  }

}
