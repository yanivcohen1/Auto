import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { MongoTest } from './mongo-test.model';
import { MongoTestPopupService } from './mongo-test-popup.service';
import { MongoTestService } from './mongo-test.service';

@Component({
    selector: 'jhi-mongo-test-dialog',
    templateUrl: './mongo-test-dialog.component.html'
})
export class MongoTestDialogComponent implements OnInit {

    mongoTest: MongoTest;
    isSaving: boolean;
    dateDp: any;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private mongoTestService: MongoTestService,
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
        if (this.mongoTest.id !== undefined) {
            this.subscribeToSaveResponse(
                this.mongoTestService.update(this.mongoTest));
        } else {
            this.subscribeToSaveResponse(
                this.mongoTestService.create(this.mongoTest));
        }
    }

    private subscribeToSaveResponse(result: Observable<MongoTest>) {
        result.subscribe((res: MongoTest) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: MongoTest) {
        this.eventManager.broadcast({ name: 'mongoTestListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-mongo-test-popup',
    template: ''
})
export class MongoTestPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private mongoTestPopupService: MongoTestPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.mongoTestPopupService
                    .open(MongoTestDialogComponent as Component, params['id']);
            } else {
                this.mongoTestPopupService
                    .open(MongoTestDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
