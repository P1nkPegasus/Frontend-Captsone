import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharityService {

  private baseUrl = "https://springboot-postgresql-charity.herokuapp.com/api/charities";
  constructor(private http: HttpClient) { }
}
