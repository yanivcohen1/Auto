import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DynamicComponentLoaderComponent } from './app.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';

@NgModule({
  imports: [ BrowserModule ],
  providers: [AdService],
  declarations: [ DynamicComponentLoaderComponent,
                  AdBannerComponent,
                  HeroJobAdComponent,
                  HeroProfileComponent,
                  AdDirective ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  exports: [
    DynamicComponentLoaderComponent
  ]
  // bootstrap: [ AppComponent ]
})
export class DynamicComponentLoaderModule {
  constructor() {}
}
