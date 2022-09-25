import { Directive, OnDestroy, OnInit } from '@angular/core';
let nextId = 1;

@Directive({
  selector: '[addSpy]',
})
export class AddSpyDirective implements OnInit, OnDestroy {
  // Modifying a variable of outer scope so the it memorizes the data
  private id = nextId++;
  constructor() {}
  ngOnInit(): void {
    console.log(`Spy ${this.id} on OnInit`);
  }
  ngOnDestroy(): void {
    console.log(`Spy ${this.id} on OnDestroy`);
  }
}
