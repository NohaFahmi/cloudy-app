import { Component } from '@angular/core';
import {LocationsService} from "../../services/locations/locations.service";
import {LocationInfo} from "../../models/location.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public results: LocationInfo[] = [];
  isLoading = false;
  constructor(private locationService: LocationsService, private router: Router) {}

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.isLoading = true;
    this.locationService.getLocationInfoByCityName(query).then((results) => {
      this.results = results;
    }).finally(() => {
      this.isLoading = false;
    })
  }

  onSelectCity(result: LocationInfo): void {
    this.router.navigate([`/tabs/tab3/city/${result.Key}/${result.EnglishName}`]);
  }
}
