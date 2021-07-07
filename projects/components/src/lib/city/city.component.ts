import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import City from './../interfaces/city';

@Component({
  selector: 'city-component',
  templateUrl: './city.component.html',
  styles: [
    './city.component.css'
  ]
})
export class CityComponent implements OnInit {
  @Input() cities: City[] | undefined;
  @Output() notifyCityId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.cities);
  }

  openPopulationList(id: number) {
    const city = this.cities?.find(elem => elem.id === id);

    this.notifyCityId.emit(id);
    console.log(city);
  }
}
