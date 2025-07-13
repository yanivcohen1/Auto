import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { AA } from './a-a.model';
import { AAPopupService } from './a-a-popup.service';
import { AAService } from './a-a.service';

@Component({
    selector: 'jhi-a-a-delete-dialog',
    templateUrl: './a-a-delete-dialog.component.html'
})
export class AADeleteDialogComponent {

    aA: AA;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private aAService: AAService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager,
        private router: Router
    ) {
        this.jhiLanguageService.setLocations(['aA']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
    }

    confirmDelete (id: number) {
        this.aAService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'aAListModification',
                content: 'Deleted an aA'
            });
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-a-a-delete-popup',
    template: ''
})
export class AADeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private aAPopupService: AAPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.aAPopupService
                .open(AADeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
