import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Testss } from './testss.model';
import { TestssPopupService } from './testss-popup.service';
import { TestssService } from './testss.service';

@Component({
    selector: 'jhi-testss-dialog',
    templateUrl: './testss-dialog.component.html'
})
export class TestssDialogComponent implements OnInit {

    testss: Testss;
    isSaving: boolean;
    datesDp: any;

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private testssService: TestssService,
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
        if (this.testss.id !== undefined) {
            this.subscribeToSaveResponse(
                this.testssService.update(this.testss));
        } else {
            this.subscribeToSaveResponse(
                this.testssService.create(this.testss));
        }
    }

    private subscribeToSaveResponse(result: Observable<Testss>) {
        result.subscribe((res: Testss) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Testss) {
        this.eventManager.broadcast({ name: 'testssListModification', content: 'OK'});
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
    selector: 'jhi-testss-popup',
    template: ''
})
export class TestssPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private testssPopupService: TestssPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.testssPopupService
                    .open(TestssDialogComponent as Component, params['id']);
            } else {
                this.testssPopupService
                    .open(TestssDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
