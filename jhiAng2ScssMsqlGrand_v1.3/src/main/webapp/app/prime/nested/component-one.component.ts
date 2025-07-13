import {Component, HostBinding} from '@angular/core';
import {slideInOutAnimation} from '../../shared';

@Component({
  selector: 'jhi-component-one',
  template: 'Component One',
  animations: [slideInOutAnimation],
  // host: { '[@slideInOutAnimation]': '' }
})
export class ComponentOneComponent {
  @HostBinding('@slideInOutAnimation') slideInOutAnimation = '';
}
