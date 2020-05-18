import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  filtrados = [];
  filtradosSubject = new Subject<[]>();

  constructor(private http: HttpClient,private router:Router ) { }

  /*getServices():Promise<any>{
    return this.http.get('http://localhost:3000/profesionistas').toPromise();
  }*/

  getServices(){
    return this.http.get<any>('http://localhost:3000/profesionistas');

  }

  addUser(user:User){
    console.log("Haciendo post");
    return this.http.post('http://localhost:3000/usuarios',user)
      .subscribe((data)=>{
        console.log("ya estoy haciendo la petición POST");
        console.log(data);
        this.router.navigateByUrl('/');
        
      },
      (err)=>console.log(err)
      )
  }

}
