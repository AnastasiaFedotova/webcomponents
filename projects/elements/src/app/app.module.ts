import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ComponentsModule, ComponentsComponent, CityComponent } from 'components';

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: []
})
export class AppModule {

  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const element = createCustomElement(ComponentsComponent, { injector: this.injector })
    customElements.define("main-components", element);

    const city = createCustomElement(CityComponent, { injector: this.injector })
    customElements.define("city-components", city);
  }
}
