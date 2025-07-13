import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { MongoTest } from './mongo-test.model';
import { MongoTestPopupService } from './mongo-test-popup.service';
import { MongoTestService } from './mongo-test.service';
@Component({
    selector: 'jhi-mongo-test-dialog',
    templateUrl: './mongo-test-dialog.component.html'
})
export class MongoTestDialogComponent implements OnInit {

    mongoTest: MongoTest;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private mongoTestService: MongoTestService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['mongoTest', 'enums']);
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
        if (this.mongoTest.id !== undefined) {
            this.mongoTestService.update(this.mongoTest)
                .subscribe((res: MongoTest) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.mongoTestService.create(this.mongoTest)
                .subscribe((res: MongoTest) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: MongoTest) {
        this.eventManager.broadcast({ name: 'mongoTestListModification', content: 'OK'});
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
    selector: 'jhi-mongo-test-popup',
    template: ''
})
export class MongoTestPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private mongoTestPopupService: MongoTestPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.mongoTestPopupService
                    .open(MongoTestDialogComponent, params['id']);
            } else {
                this.modalRef = this.mongoTestPopupService
                    .open(MongoTestDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
