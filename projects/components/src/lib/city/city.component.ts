import { Component, Input, OnInit } from '@angular/core';
import Person from '../interfaces/persone';
import City from './../interfaces/city';

@Component({
  selector: 'city-components',
  templateUrl: './city.component.html',
  styles: [
  ]
})
export class CityComponent implements OnInit {
  @Input() cities: City[] | undefined;
  population: Person[] | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cities)
  }

  openPopulationList(id: number) {
    debugger
    const city = this.cities?.find(elem => elem.id === id);

    this.population = city?.population;
  }
}
