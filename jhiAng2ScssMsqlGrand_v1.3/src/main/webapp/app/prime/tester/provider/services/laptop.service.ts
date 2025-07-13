import { Injectable, EventEmitter } from '@angular/core';
import { IComputer } from './Icomputer';

@Injectable()
export class LaptopService implements IComputer {
    emit =  new EventEmitter<string>();

    use = 'LAPTOP';
    getComputerName() {
        return this.use;
    }

    setComputerName(name) {
       this.use = name;
    }

    getEmit() {
      return this.emit;
    }
}
