import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  text: string = '';
  messages: any[] = [];
  chatMessagesDiv: HTMLElement | null | undefined;

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
    this.chatMessagesDiv = document.getElementById('chat-messages');
    this.listen();
  }

  send() {
    console.log(this.text);
    this.chatService.sendMessage('Fran', this.text);
    this.text = '';
  }

  listen() {
    this.chatService.getMessages().subscribe(message => {
      console.log('Listen from message: ', message);
      this.messages.push(message);

      setTimeout(() => {
        if (this.chatMessagesDiv) {
          this.chatMessagesDiv.scrollTop = this.chatMessagesDiv?.scrollHeight;
        }
      }, 50);

    });
  }

}
