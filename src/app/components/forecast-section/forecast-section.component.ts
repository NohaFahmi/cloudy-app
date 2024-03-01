import {Component, Input, OnInit} from '@angular/core';
import {DailyForecastInfo} from "../../models/common.interface";
import {DailyForecast} from "../../models/forecast.interface";

enum FORECAST_OPTIONS {
  TODAY= 'today',
  TOMORROW = 'tomorrow',
  FUTURE = '7 days'
}
@Component({
  selector: 'app-forecast-section',
  templateUrl: './forecast-section.component.html',
  styleUrls: ['./forecast-section.component.scss'],
})
export class ForecastSectionComponent  implements OnInit {
  @Input() dailyForecastWeather: DailyForecast[] = [];
  type: FORECAST_OPTIONS = FORECAST_OPTIONS.TODAY;
  constructor() { }

  ngOnInit() {}

  protected readonly FORECAST_OPTIONS = FORECAST_OPTIONS;
}
