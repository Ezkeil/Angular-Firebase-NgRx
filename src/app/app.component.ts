import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-firebase-ngrx';
  count = 0;
  person = {
    name: 'John',
    age: 23,
  };

  onIncrement(payload: number) {
    this.count += payload;
  }

  onUpdatePerson(payload: { name: string; age: number }) {
    this.person.name = payload.name;
  }
}
