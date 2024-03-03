import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {ForecastService} from "../../../../services/forecast/forecast.service";
import {AirAndPallon, DailyForecast} from "../../../../models/forecast.interface";
import {StorageService} from "../../../../services/Storage/storage.service";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-city-weather-details',
  templateUrl: './city-weather-details.component.html',
  styleUrls: ['./city-weather-details.component.scss'],
})
export class CityWeatherDetailsComponent  implements OnInit {
  isLoading = false;
  cityWeatherInfo?: DailyForecast;
  locationName?: string | null;
  protected readonly Math = Math;
  constructor(private activatedRoute: ActivatedRoute,
              private forecastService: ForecastService,
              private router: Router,
              private storageService: StorageService) { }

  ngOnInit() {
    const locationKey = this.activatedRoute.snapshot.paramMap.get('key');
    this.locationName = this.activatedRoute.snapshot.paramMap.get('name');
    if (locationKey) {
      this.getDailyForecast(locationKey);
    } else {
      this.router.navigate(['/tabs/tab3']);
    }
  }
  getDailyForecast(locationKey: string): void {
    this.isLoading = true;
    this.forecastService.getDailyForecastData(locationKey)
      .then((data) => {
        this.cityWeatherInfo = data.DailyForecasts[0];
      })
      .catch((error) => {
        console.error('Error fetching daily forecast data:', error);
      }).finally(() => {
      this.isLoading = false;
    });
  }

  saveCityToSavedCitiesList(): void {
    if (this.cityWeatherInfo) {
      this.storageService.get('savedCities').then((cities) => {
        const savedCities = cities;
        const isCitySaved = savedCities.findIndex((city: any) => city.name === this.locationName);
        if (isCitySaved === -1) {
          savedCities.push({
            icon: this.cityWeatherInfo?.Day.Icon,
            temp: `${Math.round(this.cityWeatherInfo?.Temperature.Minimum.Value ?? 0)} °${this.cityWeatherInfo?.Temperature.Minimum.Unit}`,
            name: this.locationName
          });
          this.storageService.set('savedCities', cities);
          this.router.navigate(['/tabs/tab2']);
        }
      })
    }

  }
  getWeatherIconImg(iconCode: number):string {
    const code = iconCode < 10 ? `0${iconCode}` : iconCode;
    return `${environment.weatherAPIURL.imgURL}/${code}-s.png`;
  }
}
