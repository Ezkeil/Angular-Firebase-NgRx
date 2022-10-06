import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Directives
import { AddSpyDirective } from './app-spy/add-spy.directive';
import { ComplexProjectionContentDirective } from './complex-projection/complex-projection-content.directive';

@NgModule({
  declarations: [AddSpyDirective, ComplexProjectionContentDirective],
  imports: [CommonModule],
  exports: [AddSpyDirective, ComplexProjectionContentDirective],
})
export class DirectivesModule {}
