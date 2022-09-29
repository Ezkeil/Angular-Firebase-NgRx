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
  @Input() count: number = 0;
  @Output() increment = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  increaseCount(payload: number) {
    this.increment.emit(payload);
  }
}
