import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Weather } from "../models";


@Injectable()
export class WeatherService {

    constructor(private http: HttpClient) {}

    getCityWeatherByName(city: string): Promise<Weather> {
        return firstValueFrom(
          this.http.get<Weather>(`/weather/${city}`)
        )
      }

    getCities() {
        return firstValueFrom(
            this.http.get<Weather[]>('/weather')
            )
    }

    addCity(cities: Weather) {
        return firstValueFrom(this.http.post<any>('/addcity', cities))
    }

    removeCity(cities: Weather) {
        const city = cities.city
        // const email = favorites.email
        const params = new HttpParams()
            .set("city", city)
        return firstValueFrom(this.http.delete(`/delete`, {params: params}))
      }




}