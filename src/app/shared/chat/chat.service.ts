import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messagesHistory: {sender: number; receiver: number,  message: string} [] = [];

  constructor(private socket: Socket) {
    this.messagesHistory = [
      {sender: 2, receiver: 1, message: 'Hola'},
      {sender: 1, receiver: 2, message: 'Qué tal'},
      {sender: 2, receiver: 1, message: 'Quisiera más informes, por favor'},
      {sender: 1, receiver: 2, message: 'Claro, el precio por hora es de $100'},
      {sender: 2, receiver: 1, message: 'Gracias'},
      {sender: 1, receiver: 2, message: 'Por nada'},
    ];
   }

   // connecting to the chat
   public startChat(message) {
        this.socket.emit('startChat', message);
  }

  // confirmation
  public connectedToChat() {
    return Observable.create((observer) => {
      this.socket.on('startChat', (message) => {
        observer.next(message);
      });
    });
  }

  // senging a message
  public sendMessage(message, sender) {
    this.socket.emit('send', message, sender);
  }

  // getting a message
  public getMessages() {
    return Observable.create((observer) => {
      this.socket.on('refresh', (message) => {
        observer.next(message);
      });
    });
  }

  // refreshMessages() {
  //   this.messagesHistory.push
  // }

}
