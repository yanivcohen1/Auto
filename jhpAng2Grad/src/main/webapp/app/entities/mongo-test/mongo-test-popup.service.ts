import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MongoTest } from './mongo-test.model';
import { MongoTestService } from './mongo-test.service';

@Injectable()
export class MongoTestPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private mongoTestService: MongoTestService

    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                this.mongoTestService.find(id).subscribe((mongoTest) => {
                    if (mongoTest.date) {
                        mongoTest.date = {
                            year: mongoTest.date.getFullYear(),
                            month: mongoTest.date.getMonth() + 1,
                            day: mongoTest.date.getDate()
                        };
                    }
                    this.ngbModalRef = this.mongoTestModalRef(component, mongoTest);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.mongoTestModalRef(component, new MongoTest());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    mongoTestModalRef(component: Component, mongoTest: MongoTest): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.mongoTest = mongoTest;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
