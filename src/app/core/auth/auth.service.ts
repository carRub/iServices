import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = "";

  constructor(private http:HttpClient) { 
      if(localStorage.token){
        this.token = localStorage.token;
      }
  }

  private saveToken(token:string){
    localStorage.setItem('token',token);
    this.token = token;
  }

  public isLoggedIn():boolean{
    const tokenData = this.getTokenData();
    console.log(tokenData);

    if(tokenData){
      let resp = tokenData.exp > Date.now() / 1000;
      return resp;
    }else{
      return false;
    }

  }

  public getTokenData(){
    let payload;
    if(this.token){
      payload = this.token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    }else{
      return null;
    }
  }

  public login(email:string,password:string): Observable<any>{
    return this.http.post(environment.url + '/auth',{email,password}).
    pipe(
      map((data:any)=>{
        console.log("DATA",data);
        if(data.data.token){
          
          this.saveToken(data.data.token);
          
          console.log("Guardando Token",data.data.token);

          console.log("Se ha guardado el token");
        }

        console.log("token guardado",this.token)
        return data;
      })
    )
  }

  addUser(user){

  }

}
