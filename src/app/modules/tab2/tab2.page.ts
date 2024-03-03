import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../services/Storage/storage.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  cities: {name: string; icon: number; temp: string}[] = [];
  isLoading = false;
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.cities = [];
    this.storageService.get('savedCities').then((cities) => {
      this.cities = cities;
      this.isLoading = false;
      console.log('CITIES', this.cities);
    }).finally(() => {
      this.isLoading = false;
    })
  }
}
