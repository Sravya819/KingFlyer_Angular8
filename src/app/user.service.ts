import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://localhost:8080'
  constructor(private http:HttpClient) { }

  addUser(user:User):Observable<any>{
    return this.http.post(this.url.concat('/users/'),user);
  }

}
