import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class MsgService {
  private message = new Subject<string>();

  message$ = this.message.asObservable();

  addMessage(text: string) {
    this.message.next(text);
  }
}
