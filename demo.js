let citiesData = [
  {
    id: 1,
    name: 'Минск',
    population: [
      {
        id: 11,
        firstname: 'Винни',
        lastname: 'Джонс',
        age: 56
      },
      {
        id: 12,
        firstname: 'Брэд',
        lastname: 'Питт',
        age: 22
      },
      {
        id: 13,
        firstname: 'Бенсио',
        lastname: 'дель Торо',
        age: 76
      }
    ]
  },
  {
    id: 2,
    name: 'Чикаго',
    population: [
      {
        id: 21,
        firstname: 'Винни1',
        lastname: 'Джонс1',
        age: 56
      },
      {
        id: 22,
        firstname: 'Брэд1',
        lastname: 'Питт1',
        age: 22
      },
      {
        id: 23,
        firstname: 'Бенсио1',
        lastname: 'дель Торо1',
        age: 76
      }
    ]
  },
  {
    id: 3,
    name: 'Токио',
    population: [
      {
        id: 31,
        firstname: 'Винни2',
        lastname: 'Джонс2',
        age: 56
      },
      {
        id: 32,
        firstname: 'Брэд2',
        lastname: 'Питт2',
        age: 22
      },
      {
        id: 33,
        firstname: 'Бенсио2',
        lastname: 'дель Торо2',
        age: 76
      }
    ]
  }
];

class City {
  constructor() {
    this.contentPopulationList = undefined;
    this.contentPersonForm = undefined;
    this.cityComponent = document.querySelector('city-component');
    this.populationComponent = document.querySelector('population-component');
    this.personComponent = document.querySelector('person-component');

    this.initial();
  }

  initial() {
    this.cityComponent.cities = citiesData;
    this.populationComponent.population = citiesData[0].population;
    this.personComponent.person = citiesData[0].population[0];

    this.populationComponent.style.visibility = 'hidden';
    this.personComponent.style.visibility = 'hidden';

    this.cityComponent.addEventListener('notifyCityId', (event) => this.openPopulationList(event.detail));
    this.populationComponent.addEventListener('notifyPopulationId', (event) => this.openPersonData(event.detail));
    this.personComponent.addEventListener('notifyPersonId', (event) => this.updatePerson(event.detail));
  }

  openPopulationList(id) {
    this.contentPopulationList = citiesData.find(city => city.id === id)?.population;
    this.populationComponent.population = this.contentPopulationList;

    this.populationComponent.style.visibility = 'initial';
  }

  openPersonData(id) {
    this.contentPersonForm = this.contentPopulationList?.find(person => person.id === id);
    this.personComponent.person = this.contentPersonForm;

    this.personComponent.style.visibility = 'initial';
  }

  closePersonData() {
    this.personComponent.style.visibility = 'hidden';

    this.personComponent.querySelector('form').reset();
  }

  updatePerson(newPerson) {
    if (this.contentPersonForm) {
      this.contentPopulationList.find(elem => {
        if (elem.id === newPerson.id) {
          elem.firstname = newPerson.firstname;
          elem.lastname = newPerson.lastname;
          elem.age = newPerson.age;
        }
      });

      this.personComponent.querySelector('input[name=firstname]').setAttribute('placeholder', newPerson.firstname);
      this.personComponent.querySelector('input[name=lastname]').setAttribute('placeholder', newPerson.lastname);
      this.personComponent.querySelector('input[name=age]').setAttribute('placeholder', newPerson.age);

      const label = this.populationComponent.querySelector('input[type="radio"]:checked + .population__link');
      label.innerHTML = `${newPerson.firstname} ${newPerson.lastname}`;
    }
    this.closePersonData();
  }
}

new City();
