import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  Users:any[]=[];
  currentUser:any;
   constructor(private user:UserService){}
  ngOnInit(): void {
    this.user.retrieveUsers().subscribe((res)=>{
      console.log(res);
      this.Users=res;
      this.currentUser=res[0];
    })

  }

  onUserClick(user:any) {
   this.currentUser=user;
  }
}
