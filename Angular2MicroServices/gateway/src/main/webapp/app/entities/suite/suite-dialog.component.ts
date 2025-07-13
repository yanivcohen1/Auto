import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Suite } from './suite.model';
import { SuitePopupService } from './suite-popup.service';
import { SuiteService } from './suite.service';
import { Tests, TestsService } from '../tests';
@Component({
    selector: 'jhi-suite-dialog',
    templateUrl: './suite-dialog.component.html'
})
export class SuiteDialogComponent implements OnInit {

    suite: Suite;
    authorities: any[];
    isSaving: boolean;

    tests: Tests[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private suiteService: SuiteService,
        private testsService: TestsService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['suite']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.testsService.query().subscribe(
            (res: Response) => { this.tests = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.suite.id !== undefined) {
            this.suiteService.update(this.suite)
                .subscribe((res: Suite) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.suiteService.create(this.suite)
                .subscribe((res: Suite) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Suite) {
        this.eventManager.broadcast({ name: 'suiteListModification', content: 'OK'});
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

    trackTestsById(index: number, item: Tests) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-suite-popup',
    template: ''
})
export class SuitePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private suitePopupService: SuitePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.suitePopupService
                    .open(SuiteDialogComponent, params['id']);
            } else {
                this.modalRef = this.suitePopupService
                    .open(SuiteDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
