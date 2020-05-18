import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './chat.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  messagesHistory: {sender: string, message: string} [] = [];
  messagesSubscription: Subscription;
  chatSubscription: Subscription;
  msg = '';
  myId: string;
  receiverId:  string;

  professionalId: string;
  userId: string;

  constructor(private chatService: ChatService, private route: ActivatedRoute) {
    this.messagesHistory = [
      {sender: '5ea75bf3f3e19c29d2c01218', message: 'Hola'},
      {sender: '5ebce58c628b803f1bf7a52f', message: 'Qué tal'},
      {sender: '5ea75bf3f3e19c29d2c01218', message: 'Quisiera más informes, por favor'},
      {sender: '5ebce58c628b803f1bf7a52f', message: 'Claro, el precio por hora es de $100'},
      {sender: '5ea75bf3f3e19c29d2c01218', message: 'Gracias'},
      {sender: '5ebce58c628b803f1bf7a52f', message: 'Por nada'},
    ];
   }
  ngOnDestroy(): void {
    
    this.messagesSubscription.unsubscribe();
  }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.professionalId = params.pid;
      this.userId = params.uid;
    });

    this.myId = this.userId;
    this.receiverId = this.professionalId;

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
    .subscribe((msg: {message: string, sender: string}) => {
      // save messages somewhere
      console.log("message ", msg);
      // const message = {message: msg, sender};
      this.messagesHistory.push(msg);
      console.log(msg);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.msg, this.myId);
    this.msg = '';

  }

  simulateReceiver() {
    const tmp = this.myId;
    this.myId = this.professionalId;
    this.professionalId = tmp;
  }

}
