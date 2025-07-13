import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'jhi-wikipedia-search',
  template: `
    <div>
      <h2>Wikipedia Search</h2>
      <input type="text" [formControl]="term">
      <ul>
        <li *ngFor="let item of items | async">{{item}}</li>
      </ul>
    </div>  
  `
})
export class WikipediaSearchComponent implements OnInit {

  items: Observable<Array<string>>;
  term = new FormControl();
  
  constructor(private wikipediaService: WikipediaService) {}
  
  ngOnInit() {
    this.items = this.term.valueChanges
    .debounceTime(400) // read values evry 400ms and not on evry keystrock
    .distinctUntilChanged() // rise only if value chane - not same one as before
    .switchMap((term) => this.wikipediaService.search(term));
  }

}
