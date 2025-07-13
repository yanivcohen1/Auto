import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MongoTest } from './mongo-test.model';
import { MongoTestService } from './mongo-test.service';
@Injectable()
export class MongoTestPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private mongoTestService: MongoTestService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.mongoTestService.find(id).subscribe(mongoTest => {
                if (mongoTest.date) {
                    mongoTest.date = {
                        year: mongoTest.date.getFullYear(),
                        month: mongoTest.date.getMonth() + 1,
                        day: mongoTest.date.getDate()
                    };
                }
                this.mongoTestModalRef(component, mongoTest);
            });
        } else {
            return this.mongoTestModalRef(component, new MongoTest());
        }
    }

    mongoTestModalRef(component: Component, mongoTest: MongoTest): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.mongoTest = mongoTest;
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
