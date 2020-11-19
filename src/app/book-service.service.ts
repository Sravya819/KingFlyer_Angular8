import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookflightComponent } from './bookflight/bookflight.component';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  url='http://localhost:8080'
  constructor(private http:HttpClient) { }

  addBooking(booking : Book) : Observable <any> {
    return this.http.post(this.url.concat('/bookings/'), booking);
  }

}
