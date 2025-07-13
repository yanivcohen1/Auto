/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[jhiMyHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input() jhiMyHighlight: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.jhiMyHighlight || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
