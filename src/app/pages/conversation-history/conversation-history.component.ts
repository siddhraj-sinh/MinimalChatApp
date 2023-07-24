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
    // // Show the context menu (edit option) only for current user's messages
    // if (message.senderId === 1) {
    //   message.editMode = true;
    //   message.editedContent = message.content;
    // }
    // Show the context menu (edit and delete options) only for current user's messages
  if (message.senderId === 1) {
    message.editMode = true;
    message.editedContent = message.content;
    message.showContextMenu = true; // Add a property to control the context menu visibility
  }
  }

  onAcceptEdit(message: any) {
    // Update the message content with edited content
    message.content = message.editedContent;
    message.editMode = false;
    // Make a PUT request to update the message content on the backend API
    // this.messageService.updateMessageContent(message.id, message.editedContent).subscribe(
    //   (data) => {
    //     // Handle success response if required
    //   },
    //   (error) => {
    //     // Handle error response if required
    //   }
    // );
  }

  onDeclineEdit(message: any) {
    // Revert back to original content and close the inline editor
    message.editMode = false;
  }
  onEditMessage(message:any){}
  onDeleteMessage(messageId: number) {}
}
