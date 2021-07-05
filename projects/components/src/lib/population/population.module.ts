import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PopulationComponent } from './population.component';

@NgModule({
  declarations: [
    PopulationComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    PopulationComponent
  ]
})
export class PopulationModule { }
