import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Test_mon } from './test-mon.model';
import { Test_monService } from './test-mon.service';
@Injectable()
export class Test_monPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private test_monService: Test_monService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.test_monService.find(id).subscribe(test_mon => {
                if (test_mon.date) {
                    test_mon.date = {
                        year: test_mon.date.getFullYear(),
                        month: test_mon.date.getMonth() + 1,
                        day: test_mon.date.getDate()
                    };
                }
                this.test_monModalRef(component, test_mon);
            });
        } else {
            return this.test_monModalRef(component, new Test_mon());
        }
    }

    test_monModalRef(component: Component, test_mon: Test_mon): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.test_mon = test_mon;
        modalRef.result.then(result => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
