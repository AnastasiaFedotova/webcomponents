import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//import { PersonComponent } from '../person/person.component';
import { PopulationComponent } from './population.component';

@NgModule({
  declarations: [
    PopulationComponent,
    //PersonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    PopulationComponent
  ]
})
export class PopulationModule { }
