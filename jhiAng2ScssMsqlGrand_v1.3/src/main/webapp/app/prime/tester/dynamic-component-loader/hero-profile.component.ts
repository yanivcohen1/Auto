import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <!-- <h4>{{data.name}}</h4> -->
      <h4>{{data.bio}}</h4>
      <br/>
      <button type="button" (click)="onclick()" >Click Me</button>
      <br/>
      <strong>Hire this hero today!</strong>
    </div>
  `
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
  i = 0;
  onclick() {
    this.data.bio = 'you click me: ' + this.i++
  }
}
