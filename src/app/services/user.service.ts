import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url = "https://localhost:7152/api";
  private tokenKey = 'auth_token';

  signup(user:any):Observable<any>{
    return this.http.post(this.url+'/register',user);
  }

  login(user:any):Observable<any>{

    return this.http.post(this.url+'/login',user)
  }

   // Save the token to local storage
   saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Retrieve the token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Remove the token from local storage
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  //retrieve users

  retrieveUsers():Observable<any[]>{
       // Create headers and add the token
       const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      });
  return this.http.get<any[]>(this.url+'/users',{headers:headers})
  }
}
