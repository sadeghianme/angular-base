import { Injectable } from '@angular/core';
import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient';
import {BehaviorSubject} from 'rxjs';

declare const flowDailog: any;

export class Message {
  constructor(public content: string, public sentBy: string, public time: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  token = 'e3698bd8ffe3442096579b27b54f6339'; // flowDailog;
  readonly client = new ApiAiClient({accessToken: this.token});
  converstation = new BehaviorSubject<Message[]>([]);
  constructor() { }

  update(msg: Message) {
    console.log(msg)
    this.converstation.next([msg]);
  }

  convers(msg: string) {
    const time = new Date();
    const currentTime = `${time.getHours()}:${time.getMinutes()}`;
    const userMessage = new Message(msg, 'user', currentTime);
    this.update(userMessage);
    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'bot', null);
        this.update(botMessage);
      });
  }
}
