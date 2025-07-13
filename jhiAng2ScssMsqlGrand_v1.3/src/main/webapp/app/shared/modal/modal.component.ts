import { Component, Input, OnInit, HostListener, Inject, forwardRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
    selector: 'jhi-app-modal',
    styleUrls: ['modal.component.scss'],
    template: `
      <div [ngClass]="{'closed': !isOpen}">
        <div class="modal-overlay" (click)="close(true)"></div>

        <div class="modal1">
          <div class="title" [ngStyle]="{'background-color': '#' + _bgColor}" *ngIf="modalTitle">
            <span class="title-text"><b>{{ modalTitle }}</b></span>
            <span class="right-align" (click)="close(true)" [hidden]="blocking" ><i class="fa fa-close"></i></span>
          </div>

          <div class="body">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    `
})
export class ModalComponent implements OnInit {
  @Input() modalId: string;
  @Input() modalTitle: string;
  // @Input() bgColor: string;
  _bgColor: string;
  @Input() blocking = false;
  isOpen = false;

  @HostListener('keyup') onMouseEnter(event) {
    this.keyup(event);
  }

  constructor(@Inject(forwardRef(() => ModalService)) private modalService: ModalService) {
  }

  ngOnInit() {
    this.modalService.registerModal(this);
  }

  @Input()
  set bgColor(bgColor: string ) {
    // console.log('input name change event', bgColor);
    if (bgColor === 'red') {
      this._bgColor = 'e52325';
    } else if (bgColor === 'blue') {
      this._bgColor = '2399e5';
    } else if (bgColor === 'green') {
      this._bgColor = '28a745';
    } else {
      this._bgColor = bgColor;
    }

  }

  get bgColor(){
    return this._bgColor;
  }

  close(checkBlocking = false): void {
    this.modalService.close(this.modalId, checkBlocking);
  }

  private keyup(event: KeyboardEvent): void {
    if (event.keyCode === 27) {
      this.modalService.close(this.modalId, true);
    }
  }
}
