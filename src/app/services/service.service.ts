import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  filtrados = []
  filtradosSubject = new Subject<[]>();

  constructor(private http: HttpClient) { 

  }

  /*getServices():Promise<any>{
    return this.http.get('http://localhost:3000/profesionistas').toPromise();
  }*/

  getServices(){
    return this.http.get<any>('http://localhost:3000/profesionistas');

  }

  filtrandoProfesionistas(inputValue: string){
    
  }

  


}
