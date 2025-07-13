import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Test1 } from './test-1.model';
import { Test1Service } from './test-1.service';
@Injectable()
export class Test1PopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private test1Service: Test1Service

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.test1Service.find(id).subscribe(test1 => {
                if (test1.date) {
                    test1.date = {
                        year: test1.date.getFullYear(),
                        month: test1.date.getMonth() + 1,
                        day: test1.date.getDate()
                    };
                }
                this.test1ModalRef(component, test1);
            });
        } else {
            return this.test1ModalRef(component, new Test1());
        }
    }

    test1ModalRef(component: Component, test1: Test1): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.test1 = test1;
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
