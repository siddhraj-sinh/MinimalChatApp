import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-conversation-history',
  templateUrl: './conversation-history.component.html',
  styleUrls: ['./conversation-history.component.css']
})
export class ConversationHistoryComponent implements OnInit{
  currentReciever:any;
  messageContent:string = "";
  constructor(private route:ActivatedRoute,private userService:UserService,private chatService:ChatService){}
  ngOnInit(): void {

    this.userService.retrieveUsers().subscribe((res)=>{
      console.log(res);
      this.currentReciever=res[0];
    })
    this.route.params.subscribe((params) => {
      const userId = params['userId'];
      console.log(userId);
    });

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
