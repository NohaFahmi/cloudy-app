import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForecastDetailsCardComponent} from "./forecast-details-card.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [ForecastDetailsCardComponent],
  exports: [
    ForecastDetailsCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ForecastDetailsCardModule { }
