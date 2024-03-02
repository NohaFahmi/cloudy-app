import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../services/Storage/storage.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  cities: {name: string; icon: number; temp: string}[] = [];
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.get('savedCities').then((cities) => {
      this.cities = cities;
      console.log('CITIES', this.cities);
    })
  }
}
