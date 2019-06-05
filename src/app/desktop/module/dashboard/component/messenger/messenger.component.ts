import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ChatServiceService, Message} from './chat-service/chat-service.service';
import {Observable} from 'rxjs';
import { scan } from 'rxjs/operators';

declare const $: any;
@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit, OnChanges {
  chatState = 'bot';
  viberChats = [
    {title: 'Mehdi', time: '10:55', icon: 'user', message: 'Hello, I have a Problem with this site'},
    {title: 'Viber', time: '11:34', icon: 'viber', message: 'hello, about your problem, you can follow link www.google.com'},
  ];
  messages: Observable<Message[]>;
  fromValue: string;
  @Input() message = '';
  @Input() update = 0;
  @Output() closeChat = new EventEmitter();
  constructor(
    private chat: ChatServiceService
  ) { }

  ngOnChanges(changes) {
    if (changes.hasOwnProperty('update') && this.update) {
      this.chat.convers(this.message);
    }
  }

  ngOnInit() {
    this.messages = this.chat.converstation.asObservable()
      .pipe(
        scan((acc, val) => acc.concat(val))
      );
  }

  sendMessage() {
    if (this.fromValue.trim()) {
      this.chat.convers(this.fromValue);
      this.fromValue = '';
    }
  }

  closeMessenger() {
    this.closeChat.emit(false);
  }
}
