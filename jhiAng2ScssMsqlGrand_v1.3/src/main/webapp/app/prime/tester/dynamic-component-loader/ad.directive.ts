import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[jhiAdHost]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
