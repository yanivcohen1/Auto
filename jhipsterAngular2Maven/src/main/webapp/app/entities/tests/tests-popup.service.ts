import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tests } from './tests.model';
import { TestsService } from './tests.service';
@Injectable()
export class TestsPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private testsService: TestsService
    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.testsService.find(id).subscribe(tests => {
                this.testsModalRef(component, tests);
            });
        } else {
            return this.testsModalRef(component, new Tests());
        }
    }

    testsModalRef(component: Component, tests: Tests): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tests = tests;
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
