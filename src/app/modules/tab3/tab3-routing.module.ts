import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import {CityWeatherDetailsComponent} from "./pages/city-weather-details/city-weather-details.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', pathMatch: 'full', component: Tab3Page},
      {path: 'city/:key/:name', component: CityWeatherDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
