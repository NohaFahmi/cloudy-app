import { Injectable } from '@angular/core';
import {DailyForecastInfo} from "../../models/common.interface";
import {lastValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Forecast, HourlyForecast} from "../../models/forecast.interface";

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private httpClient: HttpClient) { }
  getDailyForecastData(locationKey: string): Promise<Forecast> {
    // 127041
    return new Promise<any>((resolve, reject) => {
      lastValueFrom(
        this.httpClient.get<Forecast>(`${environment.weatherAPIURL.forecasts}/daily/5day/${locationKey}`, {
          params: {
            apikey: environment.weatherAPIKey,
            metric: true,
            details: true
          }
        })
      ).then((forecast) => {
        resolve(forecast);
      }).catch((error) => {
        reject(error);
      })
    });
  }

}
