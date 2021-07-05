import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from 'components';
import { CityModule } from 'components';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    CityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
