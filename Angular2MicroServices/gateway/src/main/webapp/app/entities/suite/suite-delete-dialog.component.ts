import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Suite } from './suite.model';
import { SuitePopupService } from './suite-popup.service';
import { SuiteService } from './suite.service';

@Component({
    selector: 'jhi-suite-delete-dialog',
    templateUrl: './suite-delete-dialog.component.html'
})
export class SuiteDeleteDialogComponent {

    suite: Suite;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private suiteService: SuiteService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['suite']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.suiteService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'suiteListModification',
                content: 'Deleted an suite'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-suite-delete-popup',
    template: ''
})
export class SuiteDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private suitePopupService: SuitePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.suitePopupService
                .open(SuiteDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
