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
  currentUserId?  :number | null=1; 
  messages?:any[];
  constructor(private route:ActivatedRoute,private userService:UserService,private chatService:ChatService){}
  ngOnInit(): void {

    this.userService.retrieveUsers().subscribe((res)=>{
      console.log(res);
      this.currentReciever=res[0];
    })
    this.route.params.subscribe((params) => {
      const userId = params['userId'];
      console.log(userId);

      this.getMessages(userId)
    });

    //this.currentUserId = this.userService.getUserId()
  }

  

  getMessages(userId:any){
    this.chatService.getMessages(userId).subscribe((res)=>{
      console.log(res);
      this.messages=res;
    })
    console.log(this.messages)
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

  onContextMenu(event: MouseEvent, message: any) {
    event.preventDefault();
    if (message.senderId === 1) {
    message.isEvent=true;
    }
  }

  onAcceptEdit(message: any) {
    // Update the message content with edited content
    message.content = message.editedContent;
    message.editMode = false;
    console.log(message);
   this.chatService.editMessage(message.id,message.content).subscribe((res)=>{
    console.log(res);
   })
  }

  onDeclineEdit(message: any) {
    // Revert back to original content and close the inline editor
    message.editMode = false;
  }
  onEditMessage(message:any){
    if (message.senderId === 1) {
      message.editMode = true;
      message.editedContent = message.content;
      message.showContextMenu = true; // Add a property to control the context menu visibility
    }
  }
  onDeleteMessage(messageId: number) {
    this.chatService.deleteMessage(messageId).subscribe((res)=>{
      console.log(res);
    })
  }
}
