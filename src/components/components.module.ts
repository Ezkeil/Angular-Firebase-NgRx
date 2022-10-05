import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Addtional modules
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Components list
import { CounterComponent } from './counter/counter.component';
import { ComplexProjectionComponent } from './complex-projection/complex-projection.component';
import { DisplayCountComponent } from './display-count/display-count.component';
import { ProjectionComponent } from './projection/projection.component';

@NgModule({
  declarations: [
    CounterComponent,
    ComplexProjectionComponent,
    DisplayCountComponent,
    ProjectionComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CounterComponent,
    ComplexProjectionComponent,
    DisplayCountComponent,
    ProjectionComponent,
  ],
})
export class ComponentsModule {}
