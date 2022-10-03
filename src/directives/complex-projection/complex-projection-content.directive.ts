import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appComplexProjectionContent]',
})
export class ComplexProjectionContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
