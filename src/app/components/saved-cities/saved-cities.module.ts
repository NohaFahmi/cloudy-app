import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SavedCitiesComponent} from "./saved-cities.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [SavedCitiesComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SavedCitiesComponent]
})
export class SavedCitiesModule { }
