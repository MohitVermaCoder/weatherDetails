import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [WeatherComponent]
})
export class AppModule { }
