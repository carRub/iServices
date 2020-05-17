import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  profesionType = "";
  servicesList = [];
  especificServiceList = [];
  inputValue = "";

  constructor(private serService: ServiceService,private router: Router,private http: HttpClient) {

   }

  ngOnInit(): void {
    if(this.router.url.includes("carpinteros")){
      this.profesionType = "Carpintero";
    }
    else if(this.router.url.includes("enfermeros")){
      this.profesionType = "Enfermero";
    }
    else if(this.router.url.includes("fontaneros")){
      this.profesionType = "Fontanero";
    }

    /*this.serService.getServices().then(
      (servicios)=>{
        console.log(servicios);
        this.servicesList = servicios;
        console.log("servicos en componente",this.servicesList);
      }
    )*/

    this.serService.getServices().subscribe(
      (data:any)=>{
          this.servicesList = data;
          console.log("servicios dentro de componente",this.servicesList);
          console.log("type:",this.profesionType);
        console.log("filtrando");
          this.especificServiceList = this.servicesList.filter((s)=>{
            //console.log("entré");
            //console.log(s.profesion == this.profesionType);
            return s.profesion == this.profesionType;
          })

          console.log("especificos",this.especificServiceList);

      }
    )

    

  
  }

  buscar(){
      console.log("Buscando");
      this.especificServiceList = this.servicesList.filter((s)=>{
        //console.log("entré");
        //console.log(s.profesion == this.profesionType);
        return s.profesion == this.profesionType;
      })
      this.especificServiceList = 
      this.especificServiceList.filter(p => p.nombre.toUpperCase().includes(this.inputValue.toUpperCase()))

  }

}