import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AA } from './a-a.model';
import { AAService } from './a-a.service';
@Injectable()
export class AAPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private aAService: AAService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.aAService.find(id).subscribe(aA => {
                this.aAModalRef(component, aA);
            });
        } else {
            return this.aAModalRef(component, new AA());
        }
    }

    aAModalRef(component: Component, aA: AA): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.aA = aA;
        modalRef.result.then(result => {
            console.log(`Closed with: ${result}`);
            this.isOpen = false;
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
            this.isOpen = false;
        });
        return modalRef;
    }
}
