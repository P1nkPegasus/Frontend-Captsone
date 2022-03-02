import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Charity } from './charity';

@Injectable({
  providedIn: 'root'
})
export class CharityService {

  private baseUrl = "https://springboot-postgresql-charity.herokuapp.com/api/charities";

  constructor(private http: HttpClient) { }

  getCharityList(): Observable<Charity[]>{
    return this.httpClient.get<Charity[]>(`${this.baseUrl}`);
  }
}
