import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CityComponent } from './city.component';



@NgModule({
  declarations: [
    CityComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CityComponent
  ]
})
export class CityModule { }
