import { Component, ContentChild, OnInit } from '@angular/core';
import { ComplexProjectionContentDirective } from 'src/directives/complex-projection/complex-projection-content.directive';

@Component({
  selector: 'app-complex-projection',
  templateUrl: './complex-projection.template.html',
  styleUrls: ['./complex-projection.component.less'],
})
export class ComplexProjectionComponent implements OnInit {
  expanded = true;
  contentId = 'abc';
  @ContentChild(ComplexProjectionContentDirective)
  content!: ComplexProjectionContentDirective;
  constructor() {}

  ngOnInit(): void {}
}
