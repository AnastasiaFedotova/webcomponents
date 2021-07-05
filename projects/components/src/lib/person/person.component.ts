import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Person from '../interfaces/persone';

@Component({
  selector: 'person-component',
  templateUrl: './person.component.html',
  styles: [
  ]
})
export class PersonComponent implements OnInit {
  @Input() person: Person | undefined;
  personForm: FormGroup;
  constructor() {
    this.personForm = new FormGroup({
      'firstname': new FormControl('', [Validators.required]),
      'lastname': new FormControl('', [Validators.required]),
      'age': new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    console.log(this.person);
  }

  updatePersonData() {
  }
}
