import {
  // AfterViewChecked,
  // AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
// import { MsgService } from 'src/services/msg/msg-service.service';
import { DisplayCountComponent } from './display-count/display-count.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  // providers: [MsgService],
})
export class AppComponent {
  @ViewChild(DisplayCountComponent) viewChild!: DisplayCountComponent;
  title = 'angular-firebase-ngrx';
  count = 0;
  person = {
    name: 'John',
    age: 23,
  };
  private inputValue = '';
  ngAfterViewInit(): void {}
  ngAfterViewChecked(): void {
    if (this.inputValue !== this.viewChild.test1)
      this.inputValue = this.viewChild.test1;
  }
  value = 10;
  onIncrement(payload: number) {
    this.value += payload;
  }
  onUpdatePerson(payload: { name: string; age: number }) {
    this.person.name = payload.name;
  }
  // messages: string[] = [];
  // field = new FormControl('');
  // constructor(private msgService: MsgService) {
  //   msgService.message$.subscribe((message) => this.messages.push(message));
  // }
  // onSubmit() {
  //   if (this.field.value !== null) {
  //     this.msgService.addMessage(this.field.value);
  //     this.field.reset();
  //   }
  // }
}
