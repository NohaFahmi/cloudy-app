import { Component, OnInit } from '@angular/core';

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
  type: FORECAST_OPTIONS = FORECAST_OPTIONS.FUTURE;

  constructor() { }

  ngOnInit() {}

  protected readonly FORECAST_OPTIONS = FORECAST_OPTIONS;
}
