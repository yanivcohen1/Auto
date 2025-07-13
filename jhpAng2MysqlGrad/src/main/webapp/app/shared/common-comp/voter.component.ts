import { Component, EventEmitter, Input, Output, OnChanges, SimpleChange, Inject, forwardRef } from '@angular/core';
import { CsvService } from '../';

@Component({
  selector: 'jhi-my-voter',
  template: `
    <h4>{{name}}</h4>
    <button (click)="vote(true)"  [disabled]="voted">Agree</button>
    <button (click)="vote(false)" [disabled]="voted">Disagree</button>
  `
})
export class VoterComponent implements OnChanges {

  // @Input()  name: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;
  _name: string;

  constructor( @Inject(forwardRef(() => CsvService)) private csvService: CsvService) { }
    // public csvService: CsvService) { }

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
    this.csvService.setloc();
    console.log(this.csvService.getLoc());
  }

  @Input()
  set name(name: string ) {
    console.log('input name change event', name);
    this._name = name;
  }

  get name(){
    return this._name;
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (changes['name'] && this.name) {
        console.log('input name change', this.name);
    }
  }

}
