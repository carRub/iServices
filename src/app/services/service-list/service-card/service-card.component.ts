import { Component, OnInit,Input } from '@angular/core';
import { Servicio } from '../../Service';


@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() service: Servicio;
  constructor() { }

  ngOnInit(): void {
  }

}
