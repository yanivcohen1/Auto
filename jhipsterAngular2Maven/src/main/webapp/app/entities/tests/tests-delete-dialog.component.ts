import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

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
        private jhiLanguageService: JhiLanguageService,
        private testsService: TestsService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['tests']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.testsService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'testsListModification',
                content: 'Deleted an tests'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tests-delete-popup',
    template: ''
})
export class TestsDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private testsPopupService: TestsPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.testsPopupService
                .open(TestsDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
