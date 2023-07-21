import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url = "https://localhost:7152/api";

  signup(user:any):Observable<any>{
    return this.http.post(this.url+'/register',user);
  }

  login(user:any):Observable<any>{

    return this.http.post(this.url+'/login',user)
  }
}
