import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PersonComponent } from './person.component';

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    PersonComponent
  ]
})
export class PersonModule { }
