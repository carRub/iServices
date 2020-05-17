import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = "";
  logueado = new BehaviorSubject<boolean>(false);


  constructor(private http:HttpClient, private router:Router) { 
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
      this.logueado.next(true);
      return resp;
    }else{
      this.logueado.next(false);
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
        if(data.token){
          
          this.saveToken(data.token);
          this.isLoggedIn();
          console.log("Guardando Token",data.token);

          console.log("Se ha guardado el token");
        }

        console.log("token guardado",this.token)
        return data;
      })
    )
  }

  public logout(){
    this.token = "";
    window.localStorage.removeItem('token');
    this.router.navigateByUrl('/');
    this.logueado.next(false);

  }
  public googleLogin(params){
    console.log("Login with google");
    return this.http.get(environment.url+'auth/google/redirect',{params})
    .pipe(
      map((data:any)=>{
        console.log("DATA",data);
        if(data.token){
          
          this.saveToken(data.token);
          
          console.log("Guardando Token",data.token);

          console.log("Se ha guardado el token");
        }

        console.log("token guardado",this.token)
        return data;
      })
    )
  }

}
