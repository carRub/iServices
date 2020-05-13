import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  messagesHistory: {sender: number, message: string} [] = [];
  messagesSubscription: Subscription;
  chatSubscription: Subscription;
  msg = '';
  myId = 1;
  senderId = 1;

  constructor(private chatService: ChatService) {
    this.messagesHistory = [
      {sender: 2, message: 'Hola'},
      {sender: 1, message: 'Qué tal'},
      {sender: 2, message: 'Quisiera más informes, por favor'},
      {sender: 1, message: 'Claro, el precio por hora es de $100'},
      {sender: 2, message: 'Gracias'},
      {sender: 1, message: 'Por nada'},
    ];
   }
  ngOnDestroy(): void {
    
    this.messagesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    // get messages from the backend and store them in messagesHistory;

    this.chatService.startChat('connecting');

    // this.chatSubscription = this.chatService.connectedToChat()
    // .subscribe((msg: string) => {
    //   console.log(msg);
    //   if (this.myId === 1) {
    //     this.myId = 2;
    //   } else {
    //     this.myId = 1;
    //   }
    // });

    // this.myId ++;
    // console.log(this.myId);

    this.messagesSubscription = this.chatService.getMessages()
    .subscribe((msg: {message: string, sender: number}) => {
      // save messages somewhere
      console.log("message ", msg);
      // const message = {message: msg, sender};
      this.messagesHistory.push(msg);
      console.log(msg);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.msg, this.senderId);
    if (this.senderId === 1) {
          this.senderId = 2;
        } else {
          this.senderId = 1;
        }
  }

}
