import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService:ClientsService,private authService:AuthService) { 
    
  }

  ngOnInit(): void {
  }

}
