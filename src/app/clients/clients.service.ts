import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients = null;
  constructor(private http: HttpClient) { 
    this.loadClients();
  }

  loadClients(){
    this.http.get('http://localhost:3000/usuarios').subscribe(
      (data)=>{
        console.log(data);
        console.log(typeof data);
        this.clients = data;
        console.log("CLIENTS",this.clients);
      },
      (err)=>console.log(err)

    );
  }

}
