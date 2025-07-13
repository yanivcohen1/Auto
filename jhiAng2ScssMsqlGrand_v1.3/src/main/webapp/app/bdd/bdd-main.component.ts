// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Hero, BddService } from './bdd.service';
import { BddUploadDialogComponent } from './bdd-upload-dialog.component';
import {UploadPopupService} from './bdd-upload-popup.service';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  templateUrl: './bdd-main.Component.html',
  styleUrls: [
    'bdd-main.component.scss',
  ],
})
export class BddMainComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  isCollapsed = false;
  selectedId: number;

  constructor(
    private service: BddService,
    private route: ActivatedRoute,
    private uploadPopupService: UploadPopupService,
  ) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      });
  }

  openModal() {
   this.uploadPopupService.open(BddUploadDialogComponent as Component, this.selectedId);
  /*  this.service.addHero( new Hero('17', 'yaniv'))
   .switchMap((h1) => {
      return this.service.updateHero( new Hero('15', 'yaniv1'));
    })
    .subscribe((h3) => {
      this.heroes$ = this.service.removeHero(16)
    }) */
    
    /* forkJoin( //Promise.all([p1, p2, p3]).then(values => { })
      this.service.addHero( new Hero('17', 'yaniv')),
      this.service.updateHero( new Hero('15', 'yaniv1'))
    ).subscribe(([res1, res2]) => {
      this.heroes$ = this.service.removeHero(16)
    }) */
  }

  setSelectId(selectedId) {
    this.selectedId = selectedId;
    this.isCollapsed = true;
  }
}
