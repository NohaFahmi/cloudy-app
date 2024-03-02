import {Component, effect, OnInit} from '@angular/core';
import {LocationsService} from "../../services/locations/locations.service";
import {ForecastService} from "../../services/forecast/forecast.service";
import {environment} from "../../../environments/environment";
import {DailyForecast, Forecast, HourlyForecast} from "../../models/forecast.interface";
import {Coords} from "../../models/location.interface";

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
  protected readonly Date = Date;
  protected readonly Math = Math;

  constructor(private locationService: LocationsService,
              private forecastService: ForecastService) {
    effect(() => {
      if (this.locationService.userCoords() !== null) {
        const coords: Coords = {
          latitude: this.locationService.userCoords()?.latitude || 0,
          longitude: this.locationService.userCoords()?.longitude || 0
        }
        this.getUserLocationKey(coords);
      }
      console.log('called');
    });
  }
  ngOnInit(): void {
  }

  getUserLocationKey(coords: Coords):void {
    this.locationService.getLocationInfoByGeoposition(coords).then((data) => {
      this.userLocationName = data.ParentCity.EnglishName;
      if (data.Key) {
        this.getDailyForecast(data.Key);
      }
    }).catch((err) => {
      console.log('Error', err);
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
}
