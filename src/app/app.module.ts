import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Addtional modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components module
import { ComponentsModule } from 'src/components/components.module';
// Directives
import { AddSpyDirective } from '../directives/app-spy/add-spy.directive';
import { ComplexProjectionContentDirective } from '../directives/complex-projection/complex-projection-content.directive';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AddSpyDirective,
    ComplexProjectionContentDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
