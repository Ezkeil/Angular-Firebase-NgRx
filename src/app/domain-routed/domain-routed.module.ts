import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainRoutingModule } from './domain-routing.module';
import { DomainRoutedComponent } from './domain-routed.component';

@NgModule({
  declarations: [DomainRoutedComponent],
  imports: [CommonModule, DomainRoutingModule],
})
export class DomainModule {}
