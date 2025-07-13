import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

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
        private mongoTestService: MongoTestService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: string) {
        this.mongoTestService.delete(id).subscribe((response) => {
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

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private mongoTestPopupService: MongoTestPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.mongoTestPopupService
                .open(MongoTestDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
