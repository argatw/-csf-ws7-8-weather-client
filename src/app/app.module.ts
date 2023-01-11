import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CitiesListComponent } from './components/cities-list.component';
import { CityDetailComponent } from './components/city-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WeatherService } from './services/weather.service';

const routes: Routes = [
    { path: '', component: CitiesListComponent }, 
    { path: 'weather/:city', component: CityDetailComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent, HttpClientModule]
})
export class AppModule { }
