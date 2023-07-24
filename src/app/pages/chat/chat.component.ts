import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  Users:any[]=[];
  currentReciever:any;
  messageContent:string = "";
   constructor(private userService:UserService,private chatService:ChatService,private router:Router){}
  ngOnInit(): void {
    this.userService.retrieveUsers().subscribe((res)=>{
      console.log(res);
      this.Users=res;
      this.currentReciever=res[0];
    })

  }

  onUserClick(user:any) {
   this.currentReciever=user;

 // Navigating to the ConversationHistoryComponent with named outlet
 //this.router.navigate([{ outlets: { conversation: ['chat', 'user', this.currentReciever.userId] } }]);

  }

  sendMessage(){
    console.log(this.messageContent);
     let body={
      receiverId:this.currentReciever.userId,
      content:this.messageContent
     }
    this.chatService.sendMessage(body).subscribe((res)=>{
      this.messageContent="";
    })
  }
}
