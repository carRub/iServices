import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(formulario:NgForm){
    console.log("name:",formulario.value.name);
    console.log("profesion",formulario.value.profesion);
    console.log("image",formulario.value.image);
    console.log("apellido",formulario.value.apellido);
    console.log("email",formulario.value.email);
    console.log("edad",formulario.value.edad);

    

  }

}
