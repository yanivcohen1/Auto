import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Tests } from './tests.model';
import { TestsPopupService } from './tests-popup.service';
import { TestsService } from './tests.service';
import { Suite, SuiteService } from '../suite';
@Component({
    selector: 'jhi-tests-dialog',
    templateUrl: './tests-dialog.component.html'
})
export class TestsDialogComponent implements OnInit {

    tests: Tests;
    authorities: any[];
    isSaving: boolean;

    suites: Suite[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private testsService: TestsService,
        private suiteService: SuiteService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tests']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.suiteService.query().subscribe(
            (res: Response) => { this.suites = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tests.id !== undefined) {
            this.testsService.update(this.tests)
                .subscribe((res: Tests) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.testsService.create(this.tests)
                .subscribe((res: Tests) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tests) {
        this.eventManager.broadcast({ name: 'testsListModification', content: 'OK'});
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

    trackSuiteById(index: number, item: Suite) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-tests-popup',
    template: ''
})
export class TestsPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private testsPopupService: TestsPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.testsPopupService
                    .open(TestsDialogComponent, params['id']);
            } else {
                this.modalRef = this.testsPopupService
                    .open(TestsDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
