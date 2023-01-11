import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Weather } from "../models";


@Injectable()
export class WeatherService {

    constructor(private http: HttpClient) {}

    getCityWeatherByName(city: string): Promise<Weather> {
        return firstValueFrom(
          this.http.get<Weather>(`weather/${city}`)
        )
      }

    getCities() {
        return firstValueFrom(
            this.http.get<Weather[]>('/weather')
            )
    }

    addCity(city: string) {

        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')

        

        return firstValueFrom(this.http.post<any>('weather/addcity', city, { headers }))
    }

    removeCity(cities: Weather) {
        const city = cities.city
        // const email = favorites.email
        const params = new HttpParams()
            .set("city", city)
        return firstValueFrom(this.http.delete(`/delete`, {params: params}))
      }




}