import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
import { Hero, BddService } from './bdd.service';
import { UploadPopupService } from './bdd-upload-popup.service'

@Component({
  selector: 'jhi-bdd-upload-dialog',
  templateUrl: './bdd-upload-dialog.component.html',
  styles: []
})
export class BddUploadDialogComponent implements OnInit {

  hero: Hero;
  isSaving: boolean;
  datesDp: any;

  constructor(
      public activeModal: NgbActiveModal,
      private jhiAlertService: JhiAlertService,
      private bddService: BddService,
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
      if (this.hero.id !== undefined) {
          this.subscribeToSaveResponse(
              this.bddService.updateHero(this.hero));
      } else {
          this.subscribeToSaveResponse(
              this.bddService.addHero(this.hero));
      }
  }

  private subscribeToSaveResponse(result: Observable<Hero>) {
      result.subscribe((res: Hero) =>
          this.onSaveSuccess(res), (res: Response) => this.onSaveError());
  }

  private onSaveSuccess(result: Hero) {
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

/* @Component({
  selector: 'jhi-testss-popup',
  template: ''
})
export class TestssPopupComponent implements OnInit, OnDestroy {

  routeSub: any;

  constructor(
      private route: ActivatedRoute,
      private uploadPopupService: UploadPopupService
  ) {}

  ngOnInit() {
      this.routeSub = this.route.params.subscribe((params) => {
          if ( params['id'] ) {
              this.uploadPopupService
                  .open(BddUploadDialogComponent as Component, params['id']);
          } else {
              this.uploadPopupService
                  .open(BddUploadDialogComponent as Component);
          }
      });
  }

  ngOnDestroy() {
      this.routeSub.unsubscribe();
  }
} */
