import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4> 
      <br/>
      <button type="button" (click)="onclick()" >Click Me Too</button>
      <br/>
      {{data.body}}
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
  i = 0;
  onclick() {
    this.data.headline = 'you click me: ' + this.i++
  }
}
