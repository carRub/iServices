import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { User } from '../../services/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:User;

  constructor(private serService: ServiceService) { }

  ngOnInit(): void {
  }

  submit(formulario:NgForm){

    console.log("name:",formulario.value.nombre);
    console.log("apellidos",formulario.value.apellidos);
    console.log("tipo",formulario.value.profesionista);
    console.log("direccion",formulario.value.direccion);
    console.log("email",formulario.value.email);
    console.log("edad",formulario.value.edad);
    console.log("password",formulario.value.password);
    console.log("celular",formulario.value.celular);
    console.log("estado",formulario.value.estado);

    this.user = new User(formulario.value.nombre,formulario.value.apellidos,formulario.value.direccion,
      formulario.value.email,formulario.value.edad,formulario.value.password,formulario.value.celular,
      formulario.value.estado,formulario.value.profesionista == "Profesionista" ? true : false)

    console.log("User",this.user);

    this.serService.addUser(this.user);



  }

}
