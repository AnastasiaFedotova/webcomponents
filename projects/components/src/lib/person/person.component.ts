import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Person from './../interfaces/persone';

@Component({
  selector: 'person-component',
  templateUrl: './person.component.html',
  styles: [
  ]
})
export class PersonComponent implements OnInit {
  @Input() preson: Person | undefined;
  personForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });
  constructor() { }

  ngOnInit(): void {
  }
}
