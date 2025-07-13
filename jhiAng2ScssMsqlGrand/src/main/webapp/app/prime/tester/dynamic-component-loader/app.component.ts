import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'jhi-dynamic-component-loader',
  template: `
    <div>
      <jhi-app-add-banner [ads]="ads"></jhi-app-add-banner>
    </div>
  `
})
export class DynamicComponentLoaderComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
