import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities = [
    {
      name: 'Минск',
      population: [
        {
          firstname: 'Винни',
          lastname: 'Джонс',
          age: 56
        },
        {
          firstname: 'Брэд',
          lastname: 'Питт',
          age: 22
        },
        {
          firstname: 'Бенсио',
          lastname: 'дель Торо',
          age: 76
        }
      ]
    },
    {
      name: 'Чикаго',
      population: [
        {
          firstname: 'Винни1',
          lastname: 'Джонс1',
          age: 56
        },
        {
          firstname: 'Брэд1',
          lastname: 'Питт1',
          age: 22
        },
        {
          firstname: 'Бенсио1',
          lastname: 'дель Торо1',
          age: 76
        }
      ]
    },
    {
      name: 'Токио',
      population: [
        {
          firstname: 'Винни2',
          lastname: 'Джонс2',
          age: 56
        },
        {
          firstname: 'Брэд2',
          lastname: 'Питт2',
          age: 22
        },
        {
          firstname: 'Бенсио2',
          lastname: 'дель Торо2',
          age: 76
        }
      ]
    }
  ]
  constructor() {
  }
}
