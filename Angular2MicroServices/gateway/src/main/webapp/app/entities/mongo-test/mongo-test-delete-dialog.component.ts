import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { MongoTest } from './mongo-test.model';
import { MongoTestPopupService } from './mongo-test-popup.service';
import { MongoTestService } from './mongo-test.service';

@Component({
    selector: 'jhi-mongo-test-delete-dialog',
    templateUrl: './mongo-test-delete-dialog.component.html'
})
export class MongoTestDeleteDialogComponent {

    mongoTest: MongoTest;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private mongoTestService: MongoTestService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['mongoTest', 'enums']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.mongoTestService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'mongoTestListModification',
                content: 'Deleted an mongoTest'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-mongo-test-delete-popup',
    template: ''
})
export class MongoTestDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private mongoTestPopupService: MongoTestPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.mongoTestPopupService
                .open(MongoTestDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
