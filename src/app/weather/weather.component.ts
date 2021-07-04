import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: FormGroup; 
  flag:boolean;
  temperature:string;
  wind: string;
  humidity: string;

  //defining an array of objects ...
  weatherArray: WeatherDetails[] = [
    {

      name: 'Patna',
      temperature: '30F',
      wind: '4kmph',
      humidity: '9%'
    },
    {
      name: 'Delhi',
      temperature: '31F',
      wind: '5kmph',
      humidity: '10%'
    },
    {

      name: 'Bangalore',
      temperature: '32F',
      wind: '6kmph',
      humidity: '11%'
    },
    {
      name: 'Kolkata',
      temperature: '33F',
      wind: '7kmph',
      humidity: '12%'
    },
    {

      name: 'Chennai',
      temperature: '34F',
      wind: '8kmph',
      humidity: '13%'
    },
    {
      name: 'Mumbai',
      temperature: '35F',
      wind: '9kmph',
      humidity: '14%'
    }
  ];



  constructor() { }

  ngOnInit() {

    this.weather=new FormGroup({
      city: new FormControl()
    })

  }

  getWeatherDetails(cityObj:any):void{
    console.log(cityObj);
    for( let obj of this.weatherArray){

      if(obj.name===cityObj.city){
          this.temperature=obj.temperature;
          this.wind=obj.wind;
          this.humidity=obj.humidity;
          this.flag=true;
          break;
      } else{
        this.flag=false;
      }

    }

  }

}


export interface WeatherDetails {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}