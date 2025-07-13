import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Testss } from './testss.model';
import { TestssPopupService } from './testss-popup.service';
import { TestssService } from './testss.service';

@Component({
    selector: 'jhi-testss-delete-dialog',
    templateUrl: './testss-delete-dialog.component.html'
})
export class TestssDeleteDialogComponent {

    testss: Testss;

    constructor(
        private testssService: TestssService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: string) {
        this.testssService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'testssListModification',
                content: 'Deleted an testss'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-testss-delete-popup',
    template: ''
})
export class TestssDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private testssPopupService: TestssPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.testssPopupService
                .open(TestssDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
