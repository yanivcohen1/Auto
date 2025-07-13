import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Test1 } from './test-1.model';
import { Test1PopupService } from './test-1-popup.service';
import { Test1Service } from './test-1.service';
@Component({
    selector: 'jhi-test-1-dialog',
    templateUrl: './test-1-dialog.component.html'
})
export class Test1DialogComponent implements OnInit {

    test1: Test1;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private test1Service: Test1Service,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['test1', 'y']);
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
        if (this.test1.id !== undefined) {
            this.test1Service.update(this.test1)
                .subscribe((res: Test1) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.test1Service.create(this.test1)
                .subscribe((res: Test1) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Test1) {
        this.eventManager.broadcast({ name: 'test1ListModification', content: 'OK'});
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
    selector: 'jhi-test-1-popup',
    template: ''
})
export class Test1PopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private test1PopupService: Test1PopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.test1PopupService
                    .open(Test1DialogComponent, params['id']);
            } else {
                this.modalRef = this.test1PopupService
                    .open(Test1DialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
