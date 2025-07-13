import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Tests } from './tests.model';
import { TestsPopupService } from './tests-popup.service';
import { TestsService } from './tests.service';

@Component({
    selector: 'jhi-tests-delete-dialog',
    templateUrl: './tests-delete-dialog.component.html'
})
export class TestsDeleteDialogComponent {

    tests: Tests;

    constructor(
        private testsService: TestsService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: string) {
        this.testsService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'testsListModification',
                content: 'Deleted an tests'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tests-delete-popup',
    template: ''
})
export class TestsDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private testsPopupService: TestsPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.testsPopupService
                .open(TestsDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
