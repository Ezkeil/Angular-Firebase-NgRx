import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import { DisplayCountComponent } from './display-count/display-count.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
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

  onIncrement(payload: number) {
    this.count += payload;
  }

  onUpdatePerson(payload: { name: string; age: number }) {
    this.person.name = payload.name;
  }
}
