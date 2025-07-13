import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Test_mon } from './test-mon.model';
import { Test_monPopupService } from './test-mon-popup.service';
import { Test_monService } from './test-mon.service';

@Component({
    selector: 'jhi-test-mon-delete-dialog',
    templateUrl: './test-mon-delete-dialog.component.html'
})
export class Test_monDeleteDialogComponent {

    test_mon: Test_mon;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private test_monService: Test_monService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['test_mon', 'enums']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.test_monService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'test_monListModification',
                content: 'Deleted an test_mon'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-test-mon-delete-popup',
    template: ''
})
export class Test_monDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private test_monPopupService: Test_monPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.test_monPopupService
                .open(Test_monDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
