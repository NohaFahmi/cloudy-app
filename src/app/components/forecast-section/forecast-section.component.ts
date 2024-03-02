import {Component, Input, OnInit} from '@angular/core';
import {DailyForecastInfo} from "../../models/common.interface";
import {AirAndPallon, DailyForecast, HourlyForecast} from "../../models/forecast.interface";
import {environment} from "../../../environments/environment";

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

  getUVIndexValue(airAndPollen: AirAndPallon[]):number {
    const item = airAndPollen.filter((item) => item.Name === 'UVIndex')[0];
    return item ? item.Value : 0;
  }

  getWeatherIconImg(iconCode: number):string {
    const code = iconCode < 10 ? `0${iconCode}` : iconCode;
    return `${environment.weatherAPIURL.imgURL}/${code}-s.png`;
  }

  protected readonly Math = Math;
}
