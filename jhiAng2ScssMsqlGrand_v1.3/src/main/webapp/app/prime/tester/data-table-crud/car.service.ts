import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from './car';

@Injectable()
export class CarService {

    car = {
      'data': [
          {'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 'dsad231ff'},
          {'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345'},
          {'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr'},
          {'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh'},
          {'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 'hrtwy34'},
          {'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj'},
          {'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr'},
          {'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 'greg34'},
          {'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5'},
          {'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s'}
      ]
    };
    constructor(private http: HttpClient) { }

    getCarsSmall() {
    return this.http.get<any>('../../content/images/cars-small.json')// '../../content/assets/cars-small.json')
      .toPromise()
      .then((res) => <Car[]>res.data)
      .then((data) => data);
    }

    getCarsMedium() {
    return this.http.get<any>('assets/showcase/data/cars-medium.json')
      .toPromise()
      .then((res) => <Car[]>res.data)
      .then((data) => data);
    }

    getCarsLarge() {
    return this.http.get<any>('assets/showcase/data/cars-large.json')
      .toPromise()
      .then((res) => <Car[]>res.data)
      .then((data) => data);
    }
}
