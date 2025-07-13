import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Tests } from './tests.model';
import { TestsPopupService } from './tests-popup.service';
import { TestsService } from './tests.service';

@Component({
    selector: 'jhi-tests-dialog',
    templateUrl: './tests-dialog.component.html'
})
export class TestsDialogComponent implements OnInit {

    tests: Tests;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private testsService: TestsService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
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
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Tests) {
        this.eventManager.broadcast({ name: 'testsListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
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
