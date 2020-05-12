import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ0ZXN0IjoiYWFzZmRlYWZ2cWVydnFmIiwiZXhwIjozMDE2MjM5MDIyfQ.nrvlcR1FvMf3A6ppWhMdTl292ULboQR5mHs-LElDr1E";

  constructor(private http:HttpClient) { 

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
        if(data.token){
          console.log("Guardando Token",data.token);
          this.saveToken(data.token);
          console.log("Se ha guardado el token")
        }
        return data;
      })
    )
  }

}
