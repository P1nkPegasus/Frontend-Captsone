import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Charity } from './charity';
// TODO: Replace

@Injectable({
  providedIn: 'root'
})
export class CharityService {


  private baseUrl = "https://springboot-postgresql-charity.herokuapp.com/api/charities";
  constructor(private http: HttpClient) { }

  getCharityList(): Observable<Charity[]>{
    return this.http.get<Charity[]>(`${this.baseUrl}`);
  }
}
