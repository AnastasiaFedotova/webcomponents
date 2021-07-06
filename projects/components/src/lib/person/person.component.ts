import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() notifyPersonId = new EventEmitter<Person>();
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
    if (this.person) {
      const updatedPerson: Person = {
        id: this.person.id,
        firstname: this.personForm.controls.firstname.value,
        lastname: this.personForm.controls.lastname.value,
        age: this.personForm.controls.age.value
      }
      this.notifyPersonId.emit(updatedPerson)
    }
  }
}
