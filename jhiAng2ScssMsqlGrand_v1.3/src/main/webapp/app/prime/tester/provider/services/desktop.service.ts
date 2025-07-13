import { Injectable } from '@angular/core';
import { IComputer } from './Icomputer';

@Injectable()
export class DesktopService implements IComputer {
  use = 'DESKTOP';
  getComputerName() {
    return this.use;
  }
  getEmit() { return null };
}
