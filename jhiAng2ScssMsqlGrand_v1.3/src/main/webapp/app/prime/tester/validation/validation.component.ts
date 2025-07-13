/* tslint:disable: member-ordering */
import { Component } from '@angular/core';

@Component({
  selector: 'jhi-validation',
  templateUrl: './validation.component.html'
})
export class ValidationComponent {

  datesDp: any;
  now = new Date();
  model = {year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0], val: 5, dates: this.model};

}
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
