import {Component, Directive, Input, QueryList, 
        ViewContainerRef, TemplateRef, ContentChildren} from '@angular/core';

@Directive({
  selector: '[jhiUiPane]'
})
export class UiPaneDirective {
  @Input() title: string;
  private _active = false;
  
  constructor(public viewContainer: ViewContainerRef, 
              public templateRef: TemplateRef<any>) { }
              
  @Input() set active(active: boolean) {
    if (active === this._active) {return};
    this._active = active;
    if (active) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.remove(0);
    }
  }
  
  get active(): boolean {
    return this._active;
  }

}
