import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit, OnChanges {
  chatState = 'bot';
  chats = [
    {title: 'Mehdi', time: '11:20', icon: 'user', message: 'Hello, I have a Problem with this site'},
    {title: 'Bot', time: '12:30', icon: 'robot', message: 'hello, about your problem, you can follow link www.google.com'},
  ];
  viberChats = [
    {title: 'Mehdi', time: '10:55', icon: 'user', message: 'Hello, I have a Problem with this site'},
    {title: 'Viber', time: '11:34', icon: 'viber', message: 'hello, about your problem, you can follow link www.google.com'},
  ];
  @Input() chatUpdate = 0;
  @Input() chatMessage = '';
  @Output() closeChat = new EventEmitter();
  constructor() { }

  ngOnChanges(changes) {
    console.log(this.chatUpdate)
    if (changes.hasOwnProperty('chatUpdate') && this.chatUpdate) {
      console.log(this.chatUpdate, '55', this.chatMessage)
      this.sentMessage(this.chatMessage);
    }
  }

  ngOnInit() {
  }

  closeMessenger() {
    this.closeChat.emit(false);
  }



  
  sentMessage(msg) {
    const time = new Date();
    const currentTime = `${time.getHours()}/${time.getMinutes()}`;
    if (msg.trim()) {
      // console.log(`${time.getHours()}/${time.getMinutes()}`)
      this.chats.push({title: 'Mehdi', time: currentTime, icon: 'user', message: msg});
      this.chatMessage = '';
      setTimeout(() => {
        this.chats.push({title: 'Bot', time: currentTime, icon: 'robot', message: 'I will check and call you soon'});
      }, 1000);
      console.log(this.chats);
    }
  }
}
