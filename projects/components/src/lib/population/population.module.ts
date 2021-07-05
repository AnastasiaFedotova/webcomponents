import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PopulationComponent } from './population.component';



@NgModule({
  declarations: [
    PopulationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    PopulationComponent
  ]
})
export class PopulationModule { }
