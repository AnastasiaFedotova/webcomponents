import { Component, Input, OnInit } from '@angular/core';
import Person from './../interfaces/persone';

@Component({
  selector: 'population-component',
  templateUrl: './population.component.html',
  styles: [
  ]
})
export class PopulationComponent implements OnInit {
  @Input() population: Person[] | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.population)
  }

  openPersonData() {

  }
}
