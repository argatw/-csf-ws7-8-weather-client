import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../models';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  cityName!: string
  weather!: Weather

  constructor(private activatedRoute: ActivatedRoute, private title: Title, 
    private wSvc: WeatherService) { }


  ngOnInit(): void {
    this.cityName = this.activatedRoute.snapshot.params['city']
    this.title.setTitle(`City: ${this.cityName}`)
    this.wSvc.getCityWeatherByName(this.cityName)
      .then(result => {
        console.info('weather:: ',result)
        this.weather = result
      })
      .catch(error => {
        console.error('error:: ',error)
      })
  }

}
