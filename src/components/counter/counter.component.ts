import { ViewEncapsulation } from '@angular/core'; //Scoping CSS
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less'],
  // encapsulation: ViewEncapsulation.None,
})
export class CounterComponent implements OnInit, OnChanges {
  @Input() value!: number;
  @Output() valueChange = new EventEmitter<number>();
  toggle = false;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  increaseCount(payload: number) {
    this.value += payload;
    this.valueChange.emit(this.value);
  }
  toggleText() {
    this.toggle = !this.toggle;
  }
}
