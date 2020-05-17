import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from 'src/environments/environment';
import { Professional } from './Professional';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  newUser = {};
  // let professional = {}
  constructor(private http: HttpClient) { }

  public getProfessional(id) {
    return this.http.get<Professional>(environment.url + `/profesionistas/${id}`);
  }
}
