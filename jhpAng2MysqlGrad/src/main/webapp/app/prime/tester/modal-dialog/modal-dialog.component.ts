import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styles: []
})
export class ModalDialogComponent {

  closeResult: string;

    constructor(private modalService: NgbModal) {}

    click() {
      console.log('you click me');
    }

    open(content) {
      this.modalService.open(content, {backdrop: 'static', keyboard: false}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

}
