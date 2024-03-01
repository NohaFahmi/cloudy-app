import {Component, OnInit} from '@angular/core';
import {LocationsService} from "../../services/locations/locations.service";
import {ForecastService} from "../../services/forecast/forecast.service";
import {environment} from "../../../environments/environment";
import {DailyForecast, Forecast} from "../../models/forecast.interface";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  weatherInfo?: Forecast;
  todayWeatherInfo?: DailyForecast;
  isLoading = false;
  userLocationName?: string;
  constructor(private locationService: LocationsService,
              private forecastService: ForecastService) {}
  ngOnInit(): void {
    this.getUserLocationKey();
    // console.log(this.locationService.userCoords());
    // console.log('TEST', this.getCurrentDateFromTimeStamp(1709442000))
  }

  getUserLocationKey():void {
    this.locationService.getLocationInfoByGeoposition().then((data) => {
      this.userLocationName = data.ParentCity.EnglishName;
      if (data.Key) {
        this.getDailyForecast(data.Key);
      }
    }).catch((e) => {
      console.log('E', e);
    });
  }
  getDailyForecast(locationKey: string): void {
    this.isLoading = true;
    this.forecastService.getDailyForecastData(locationKey)
      .then((data) => {
        this.weatherInfo = data;
        this.todayWeatherInfo = data.DailyForecasts[0];
      })
      .catch((error) => {
        console.error('Error fetching daily forecast data:', error);
      }).finally(() => {
        this.isLoading = false;
    });
  }

  getWeatherIconImg(iconCode: number):string {
    const code = iconCode < 10 ? `0${iconCode}` : iconCode;
    console.log(`${environment.weatherAPIURL.imgURL}/${code}-s.png`);
    return `${environment.weatherAPIURL.imgURL}/${code}-s.png`;
  }
  getCurrentDateFromTimeStamp(unixTimestamp: number): {date: string; time: string;} {
    const utcDate = new Date(unixTimestamp * 1000);
    const year = utcDate.getUTCFullYear();
    const month = utcDate.getUTCMonth() + 1; // Months are zero-indexed, so add 1
    const day = utcDate.getUTCDate();
    const dayName = utcDate.getUTCDay();
    let hours = utcDate.getUTCHours();
    const minutes = utcDate.getUTCMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    if (hours > 12) {
      hours -= 12;
    }
    console.log(dayName);
    const date = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
    const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return {
      date,
      time
    }
  }

  protected readonly Date = Date;
}
