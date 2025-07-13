import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Suite } from './suite.model';
import { SuiteService } from './suite.service';
@Injectable()
export class SuitePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private suiteService: SuiteService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.suiteService.find(id).subscribe(suite => {
                this.suiteModalRef(component, suite);
            });
        } else {
            return this.suiteModalRef(component, new Suite());
        }
    }

    suiteModalRef(component: Component, suite: Suite): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.suite = suite;
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
