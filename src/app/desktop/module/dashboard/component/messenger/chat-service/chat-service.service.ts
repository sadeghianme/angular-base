import { Injectable } from '@angular/core';
import {environment} from '../../../../../../../environments/environment';
import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient';
import {BehaviorSubject} from 'rxjs';

export class Message {
  constructor(public content: string, public sentBy: string, public time: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  readonly token = environment.dialogflow.angularBot;
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
