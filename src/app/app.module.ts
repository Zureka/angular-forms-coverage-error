import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilderTypeSafe } from 'angular-typesafe-reactive-forms-helper';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [ReactiveFormsModule, BrowserModule],
  providers: [FormBuilderTypeSafe],
  bootstrap: [AppComponent],
})
export class AppModule {}
