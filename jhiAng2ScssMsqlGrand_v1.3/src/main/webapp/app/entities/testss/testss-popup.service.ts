import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Testss } from './testss.model';
import { TestssService } from './testss.service';

@Injectable()
export class TestssPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private testssService: TestssService

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
                this.testssService.find(id).subscribe((testss) => {
                    if (testss.dates) {
                        testss.dates = {
                            year: testss.dates.getFullYear(),
                            month: testss.dates.getMonth() + 1,
                            day: testss.dates.getDate()
                        };
                    }
                    this.ngbModalRef = this.testssModalRef(component, testss);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.testssModalRef(component, new Testss());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    testssModalRef(component: Component, testss: Testss): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.testss = testss;
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
