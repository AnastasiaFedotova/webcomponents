import { Component, Input, OnInit } from '@angular/core';
import Person from '../interfaces/persone';

@Component({
  selector: 'person-component',
  templateUrl: './person.component.html',
  styles: [
  ]
})
export class PersonComponent implements OnInit {
  @Input() person: Person | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.person);
  }
}
