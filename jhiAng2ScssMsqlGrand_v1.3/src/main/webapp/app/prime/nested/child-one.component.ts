import { Component, HostBinding } from '@angular/core';
import {fadeInAnimation} from '../../shared';

@Component({
  selector: 'jhi-child-one',
  template: 'Child One',
  animations: [fadeInAnimation],
  // host: { '[@fadeInAnimation]': '' }
})
export class ChildOneComponent {
  @HostBinding('@fadeInAnimation') fadeInAnimation = '';
}
