import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { AA } from './a-a.model';
import { AAPopupService } from './a-a-popup.service';
import { AAService } from './a-a.service';
@Component({
    selector: 'jhi-a-a-dialog',
    templateUrl: './a-a-dialog.component.html'
})
export class AADialogComponent implements OnInit {

    aA: AA;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private aAService: AAService,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['aA']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    save () {
        this.isSaving = true;
        if (this.aA.id !== undefined) {
            this.aAService.update(this.aA)
                .subscribe((res: Response) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.aAService.create(this.aA)
                .subscribe((res: Response) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result) {
        this.eventManager.broadcast({ name: 'aAListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-a-a-popup',
    template: ''
})
export class AAPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private aAPopupService: AAPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.aAPopupService
                    .open(AADialogComponent, params['id']);
            } else {
                this.modalRef = this.aAPopupService
                    .open(AADialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
