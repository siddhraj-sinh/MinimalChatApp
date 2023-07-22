import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient,private user:UserService) { }
  url = "https://localhost:7152/api/messages"

  sendMessage(message:any):Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.user.getToken()}`
    });
   return this.http.post(this.url,message,{headers: headers})
  }

  // getMessages():Observable<any[]>{
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${this.user.getToken()}`
  //   });


  // }
}
