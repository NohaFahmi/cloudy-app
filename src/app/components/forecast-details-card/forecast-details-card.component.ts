import {Component, Input, OnInit} from '@angular/core';
import {AirAndPallon, DailyForecast} from "../../models/forecast.interface";

@Component({
  selector: 'app-forecast-details-card',
  templateUrl: './forecast-details-card.component.html',
  styleUrls: ['./forecast-details-card.component.scss'],
})
export class ForecastDetailsCardComponent  implements OnInit {
  @Input() forecastDetails?: DailyForecast;
  @Input() cardTitle?: string;
  constructor() { }

  ngOnInit() {}

  getUVIndexValue(airAndPollen: AirAndPallon[]):number {
    const item = airAndPollen.filter((item) => item.Name === 'UVIndex')[0];
    return item ? item.Value : 0;
  }
}
