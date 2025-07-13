import {Component, ViewChild, OnInit, AfterContentInit} from '@angular/core';
import {UiTabsComponent} from './ui-tabs.component';
import {UiPaneDirective} from './ui-pane.directive';

@Component({
  selector: 'jhi-di-demo',
  templateUrl: './di-demo.component.html',
  styles: []
})
export class DiDemoComponent implements AfterContentInit {
  details = [];  
  id = 0;
  @ViewChild('context') uiTabsComponnent: UiTabsComponent // look directive inside templateUrl in your view

  ngAfterContentInit() {
    console.log(this.uiTabsComponnent.readTest());
  }

  addDetail() {
    this.id++;
    this.details.push({
      title: 'Detail ' + this.id,
      text: 'Some detail text for' + this.id + '...'
    });
  }
  
  removeDetail(detail) {
    this.details = this.details.filter((d) => d !== detail);
  }
}
