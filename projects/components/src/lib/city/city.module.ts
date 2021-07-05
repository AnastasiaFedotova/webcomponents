import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CityComponent } from './city.component';



@NgModule({
  declarations: [
    CityComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    CityComponent
  ]
})
export class CityModule { }
