import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-count',
  templateUrl: './display-count.component.html',
  styleUrls: ['./display-count.component.less'],
})
export class DisplayCountComponent implements OnInit {
  @Input() count: number = 0;
  names: string[] = ['Helen', 'John', 'Bucky'];
  constructor() {}

  ngOnInit(): void {}

  removeName(index: number) {
    this.names.splice(index, 1);
  }
}