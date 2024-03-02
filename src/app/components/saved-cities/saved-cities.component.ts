import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.scss'],
})
export class SavedCitiesComponent  implements OnInit {
  @Input() cities: {name: string; temp: string; icon: number}[] = [];
  constructor() { }

  ngOnInit() {}

  getWeatherIconImg(iconCode: number):string {
    const code = iconCode < 10 ? `0${iconCode}` : iconCode;
    return `${environment.weatherAPIURL.imgURL}/${code}-s.png`;
  }
}
