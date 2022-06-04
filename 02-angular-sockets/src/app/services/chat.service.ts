import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private webSocketService: WebsocketService) { }

  sendMessage(from: string, message: string): void {
    const payload = {
      from: from,
      body: message
    }

    this.webSocketService.emit('message', payload);
  }

  getMessages(): Observable<unknown> {
    return this.webSocketService.listen('message');
  }

}
