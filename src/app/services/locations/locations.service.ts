import {Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Geolocation} from "@capacitor/geolocation";
import {lastValueFrom} from "rxjs";
import {environment} from "../../../environments/environment";
import {Coords, LocationInfo } from "../../models/location.interface";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  public userCoords = signal<Coords | null>(null);
  constructor(private httpClient: HttpClient) { }

  getUserCurrentPositionCoords (): void {
    console.log('HERE');
    Geolocation.getCurrentPosition().then((position) => {
      this.userCoords.set({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    }).catch((err) => {
      this.userCoords.set(null);
    });
  };
  getLocationInfoByGeoposition(coords: Coords): Promise<LocationInfo> {
    return new Promise((resolve, reject) => {
      lastValueFrom(
        this.httpClient.get<LocationInfo>(`${environment.weatherAPIURL.locations}/cities/geoposition/search`, {
          params: {
            apikey: environment.weatherAPIKey,
            q: `${this.userCoords()?.latitude},${this.userCoords()?.longitude}`
          }
        })
      ).then((location) => {
        resolve(location);
      }).catch((error) => {
        reject(error);
      })
    });
  }
}
