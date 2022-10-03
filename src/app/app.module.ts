import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Addtional modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { CounterComponent } from '../components/counter/counter.component';
import { DisplayCountComponent } from '../components/display-count/display-count.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectionComponent } from '../components/projection/projection.component';
import { ComplexProjectionComponent } from '../components/complex-projection/complex-projection.component';
// Directives
import { AddSpyDirective } from '../directives/app-spy/add-spy.directive';
import { ComplexProjectionContentDirective } from '../directives/complex-projection/complex-projection-content.directive';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DisplayCountComponent,
    ProjectionComponent,
    ComplexProjectionComponent,
    AddSpyDirective,
    ComplexProjectionContentDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
