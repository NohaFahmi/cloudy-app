import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ForecastSectionComponent} from "./forecast-section.component";
import {ForecastDetailsCardModule} from "../forecast-details-card/forecast-details-card.module";


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ForecastDetailsCardModule],
  declarations: [ForecastSectionComponent],
  exports: [ForecastSectionComponent]
})
export class ForecastSectionComponentModule {}
