import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ForecastSectionComponent} from "./forecast-section.component";


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ForecastSectionComponent],
  exports: [ForecastSectionComponent]
})
export class ForecastSectionComponentModule {}
