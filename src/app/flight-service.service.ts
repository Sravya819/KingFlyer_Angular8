import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  url='http://localhost:8080'
  constructor(private http:HttpClient) { }

  getAllFlights() : Observable <any> {
    return this.http.get(this.url.concat('/flights'));
  }

}
