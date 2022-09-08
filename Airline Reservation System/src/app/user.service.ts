import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {
   }

   baseUrl: string = "http://localhost:8000/user/get/";

   login(username: string, password: string ): Observable<User> {
     return this.httpClient.get<User>(this.baseUrl+username+"/"+password).pipe(map (resp => resp));
   }
 
 
}
