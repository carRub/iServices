import { Injectable } from '@angular/core';
import{Client} from './Client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients:Client[];
  constructor(private http: HttpClient) { 
    this.loadClients();
  }

  loadClients(){
    this.http.get('http://localhost:3000/usuarios').subscribe(
      (data)=>console.log(data),
      (err)=>console.log(err)

    );
  }

}
