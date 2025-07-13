/* tslint:disable:member-ordering */
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[jhiMyNgIf]'
})
export class MyNgIfDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private el: ElementRef) {
  }

  @Input()
  set jhiMyNgIf(value: boolean) {
    if (value === true) {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      // this.templateRef.elementRef.nativeElement.style.backgroundColor = 'green';
      // this.el.nativeElement.style.backgroundColor = 'green';
    }
  }

}
