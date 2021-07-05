import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PopulationComponent } from '../population/population.component';
import { CityComponent } from './city.component';



@NgModule({
  declarations: [
    CityComponent,
    PopulationComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CityComponent
  ]
})
export class CityModule { }
