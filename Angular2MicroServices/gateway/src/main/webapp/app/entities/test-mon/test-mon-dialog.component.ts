import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Test_mon } from './test-mon.model';
import { Test_monPopupService } from './test-mon-popup.service';
import { Test_monService } from './test-mon.service';
@Component({
    selector: 'jhi-test-mon-dialog',
    templateUrl: './test-mon-dialog.component.html'
})
export class Test_monDialogComponent implements OnInit {

    test_mon: Test_mon;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private test_monService: Test_monService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['test_mon', 'enums']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.test_mon.id !== undefined) {
            this.test_monService.update(this.test_mon)
                .subscribe((res: Test_mon) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.test_monService.create(this.test_mon)
                .subscribe((res: Test_mon) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Test_mon) {
        this.eventManager.broadcast({ name: 'test_monListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-test-mon-popup',
    template: ''
})
export class Test_monPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private test_monPopupService: Test_monPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.test_monPopupService
                    .open(Test_monDialogComponent, params['id']);
            } else {
                this.modalRef = this.test_monPopupService
                    .open(Test_monDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
