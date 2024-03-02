import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import {CityWeatherDetailsComponent} from "./pages/city-weather-details/city-weather-details.component";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {ForecastSectionComponentModule} from "../../components/forecast-section/forecast-section.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    ForecastSectionComponentModule,
  ],
  declarations: [Tab3Page, CityWeatherDetailsComponent]
})
export class Tab3PageModule {}
