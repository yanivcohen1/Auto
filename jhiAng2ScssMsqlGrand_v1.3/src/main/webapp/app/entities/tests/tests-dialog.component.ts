import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Tests } from './tests.model';
import { TestsPopupService } from './tests-popup.service';
import { TestsService } from './tests.service';
import { Suite, SuiteService } from '../suite';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-tests-dialog',
    templateUrl: './tests-dialog.component.html'
})
export class TestsDialogComponent implements OnInit {

    tests: Tests;
    isSaving: boolean;

    suites: Suite[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private testsService: TestsService,
        private suiteService: SuiteService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.suiteService.query()
            .subscribe((res: ResponseWrapper) => { this.suites = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.tests.id !== undefined) {
            this.subscribeToSaveResponse(
                this.testsService.update(this.tests));
        } else {
            this.subscribeToSaveResponse(
                this.testsService.create(this.tests));
        }
    }

    private subscribeToSaveResponse(result: Observable<Tests>) {
        result.subscribe((res: Tests) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Tests) {
        this.eventManager.broadcast({ name: 'testsListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
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

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private testsPopupService: TestsPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.testsPopupService
                    .open(TestsDialogComponent as Component, params['id']);
            } else {
                this.testsPopupService
                    .open(TestsDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
