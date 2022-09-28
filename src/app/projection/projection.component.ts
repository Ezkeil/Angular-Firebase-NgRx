import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.less'],
})
export class ProjectionComponent implements OnInit {
  content = 'Default content';
  constructor() {}

  ngOnInit(): void {}
}
