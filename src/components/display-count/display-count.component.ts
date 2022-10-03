import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProjectionComponent } from '../projection/projection.component';

type Person = {
  name: string;
  age: number;
};

@Component({
  selector: 'app-display-count',
  templateUrl: './display-count.component.html',
  styleUrls: ['./display-count.component.less'],
})
export class DisplayCountComponent
  implements OnInit, OnChanges, AfterContentInit, AfterContentChecked
{
  @Input() count: number = 0;
  @Input()
  // Intercepting the input to transform the data as you please
  get person(): Person {
    return this._person;
  }
  set person(props: Person) {
    this._person = (props && { ...props, name: props.name.toUpperCase() }) || {
      name: '',
      age: 0,
    };
  }
  private _person!: Person;
  @Output() personChange = new EventEmitter<Person>();
  @ContentChild(ProjectionComponent) contentChild!: ProjectionComponent;
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
  ngAfterContentInit(): void {
    console.log(this.contentChild);
  }
  ngAfterContentChecked(): void {
    this.contentChild.content = 'Content from parent!';
  }
  removeName(index: number) {
    this.names.splice(index, 1);
  }
  updateName(payload: string) {
    this.personChange.emit({ ...this.person, name: payload });
  }
  onSubmit() {
    console.log(this.test1);
    if (this.field.value !== null) this.updateName(this.test1);
  }
  onChange(event: any) {
    console.log(event.target.value);
  }
  onNgModelChange(value: string) {
    console.log(value);
  }
}
