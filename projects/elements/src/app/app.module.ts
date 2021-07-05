import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CityModule, CityComponent, PopulationModule, PopulationComponent, PersonModule, PersonComponent } from 'components';

@NgModule({
  imports: [
    BrowserModule,
    CityModule,
    PopulationModule,
    PersonModule
  ],
  providers: []
})
export class AppModule {

  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const city = createCustomElement(CityComponent, { injector: this.injector })
    customElements.define("city-component", city);

    const population = createCustomElement(PopulationComponent, { injector: this.injector })
    customElements.define("population-component", population);

    const person = createCustomElement(PersonComponent, { injector: this.injector })
    customElements.define("person-component", person);
  }
}
