import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PersonComponent } from './person.component';

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    PersonComponent
  ]
})
export class PersonModule { }
