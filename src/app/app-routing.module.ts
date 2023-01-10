import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CitiesListComponent } from "./components/cities-list.component";
import { CityDetailComponent } from "./components/city-detail.component";




const routes: Routes = [
    { path: '', component: CitiesListComponent }, 
    { path: 'weather/:city', component: CityDetailComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }