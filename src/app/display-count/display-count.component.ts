import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

type Person = {
  name: string;
  age: number;
};

@Component({
  selector: 'app-display-count',
  templateUrl: './display-count.component.html',
  styleUrls: ['./display-count.component.less'],
})
export class DisplayCountComponent implements OnInit, OnChanges {
  @Input() count: number = 0;
  @Input() person!: Person;
  @Output() updatePerson = new EventEmitter<Person>();
  field = new FormControl('');
  test = '';
  test1 = '';
  names: string[] = ['Helen', 'John', 'Bucky'];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      console.log(changes[propName]);
    }
  }
  removeName(index: number) {
    this.names.splice(index, 1);
  }
  updateName(payload: string) {
    this.updatePerson.emit({ ...this.person, name: payload });
  }
  onSubmit() {
    if (this.field.value !== null) this.updateName(this.field.value);
  }
  onChange(event: any) {
    console.log(event.target.value);
  }
  onNgModelChange(value: string) {
    console.log(value);
  }
}
