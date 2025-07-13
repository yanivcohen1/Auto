import {Component, OnInit} from '@angular/core';
import {Car} from './car';
import {CarService} from './car.service';

@Component({
    selector: 'jhi-data-table-crud',
    templateUrl: './data-table-crud.component.html',
    styles: [`
        .ui-grid-row div {
          padding: 4px 10px
        }

        .ui-grid-row div label {
          font-weight: bold;
        }
  `]
})
export class DataTableCrudComponent implements OnInit {

    displayDialog: boolean;

    car: Car = new PrimeCar();

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        // this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.cars = [
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
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }

    save() {
        const cars = [...this.cars];
        if (this.newCar) {
            cars.push(this.car);
        }else {
            cars[this.findSelectedCarIndex()] = this.car;
        }
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        const index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val, i) => i !== index);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Car): Car {
        const car = new PrimeCar();
        for (const prop in c) {
          if (c.hasOwnProperty(prop)) {
            car[prop] = c[prop];
          }
        }
        return car;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}

class PrimeCar implements Car {

    constructor(public vin?, public year?, public brand?, public color?) {}
}
