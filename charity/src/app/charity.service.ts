import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Charities } from './charities';
// TODO: Replace

@Injectable({
  providedIn: 'root'
})
export class CharityService {



  // private baseUrl = "https://springboot-postgresql-charity.herokuapp.com/api/charities";
  constructor(private http: HttpClient) { }

  // apiObservable(){
  //   return this.http
  //   .get(`https://springboot-postgresql-charity.herokuapp.com/api/charities`)
  // }


  // getCharityList(): Observable<Charities[]>{
  //   return this.http.get<Charities[]>(`${this.baseUrl}`);
  // }
}
