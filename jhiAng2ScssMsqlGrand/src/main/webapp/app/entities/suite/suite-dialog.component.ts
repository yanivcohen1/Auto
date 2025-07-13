import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Suite } from './suite.model';
import { SuitePopupService } from './suite-popup.service';
import { SuiteService } from './suite.service';

@Component({
    selector: 'jhi-suite-dialog',
    templateUrl: './suite-dialog.component.html'
})
export class SuiteDialogComponent implements OnInit {

    suite: Suite;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private suiteService: SuiteService,
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
        if (this.suite.id !== undefined) {
            this.subscribeToSaveResponse(
                this.suiteService.update(this.suite));
        } else {
            this.subscribeToSaveResponse(
                this.suiteService.create(this.suite));
        }
    }

    private subscribeToSaveResponse(result: Observable<Suite>) {
        result.subscribe((res: Suite) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Suite) {
        this.eventManager.broadcast({ name: 'suiteListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-suite-popup',
    template: ''
})
export class SuitePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private suitePopupService: SuitePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.suitePopupService
                    .open(SuiteDialogComponent as Component, params['id']);
            } else {
                this.suitePopupService
                    .open(SuiteDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
