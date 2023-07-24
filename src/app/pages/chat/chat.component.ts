import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  Users: any[] = [];
  currentReciever: any;
  messageContent: string = "";
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.retrieveUsers().subscribe((res) => {
      console.log(res);
      this.Users = res;
    })

  }



}
