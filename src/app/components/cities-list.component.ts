import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Weather } from '../models';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  cities: Weather[] = []
  cityForm!: FormGroup

  constructor(private wSvc:WeatherService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.cityForm = this.createForm()
    
    this.wSvc.getCities()
      .then(result => {
        console.info('cities:: ',result)
        this.cities = result
      })
      .catch(error => {
        console.error('error:: ', error)
      })
  }

  private createForm(): FormGroup {
    // this.lineItemsArray = this.createLineItems(order?.lineItems || [])
    return this.fb.group({
      city: this.fb.control<string>(''),
    })
  }

  processForm() {
    const city = this.cityForm.value as Weather
    console.info("ProcessForm() register:: ",city)
    this.wSvc.addCity(city)
      .then(result => {
        console.info("result:: ",result)
        alert("Your registration code is:: "+result.message)
      })
      .catch(error => {
        console.error("error:: ",error)
      })
  }

  // processForm() {
  //   console.info(">>>submitCity() initialised")
  //   console.info("orderForm:: ", this.cityForm.value)
  //   const weather: Weather = this.cityForm.value as Weather
    
  //   this.cityForm = this.createCity()
  //   // this.onNewOrder.next(order)
  // }

}
