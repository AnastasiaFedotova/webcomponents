import { Component, Input, OnInit } from '@angular/core';
import City from './../interfaces/city';

@Component({
  selector: 'city-component',
  templateUrl: './city.component.html',
  styles: [
  ]
})
export class CityComponent implements OnInit {
  @Input() cities: City[] | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cities);
  }

  openPopulationList(id: number) {
    const city = this.cities?.find(elem => elem.id === id);
    console.log(city);
  }

  openPersonData() {}
}
