import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = {name:"",profesion:"",foto:"",apellido:""};

  constructor() { }

  ngOnInit(): void {
  }

  submit(formulario:NgForm){
    console.log("name:",formulario.value.name);
    console.log("profesion",formulario.value.profesion);
    console.log("image",formulario.value.foto);
    console.log("apellido",formulario.value.apellido);
    console.log("email",formulario.value.email);
    console.log("edad",formulario.value.edad);

    this.user.name = formulario.value.name;




    

  }

}
