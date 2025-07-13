import {Component, Directive, Input, QueryList, 
        ViewContainerRef, TemplateRef, ContentChildren} from '@angular/core';
import {UiPaneDirective} from './ui-pane.directive';    

@Component({
  selector: 'jhi-ui-tabs',
  template: `
    <ul class="nav nav-tabs">
      <li *ngFor="let pane of panes" 
          (click)="select(pane)"
          role="presentation" [class.active]="pane.active">
        <a href="javascript: false">{{pane.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
    `,
  styles: []
})
export class UiTabsComponent {
  @ContentChildren(UiPaneDirective) panes: QueryList<UiPaneDirective>; // look directive inside <ng-content>

  select(pane: UiPaneDirective) {
    this.panes.toArray().forEach((p: UiPaneDirective) => p.active = p === pane);
  }

  readTest() {
    return 'test'
  }
  
}
