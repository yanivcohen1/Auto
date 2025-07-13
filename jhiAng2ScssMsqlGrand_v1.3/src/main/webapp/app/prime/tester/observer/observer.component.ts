// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Hero, ObserverCrudService } from './observer-crud.service';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'jhi-observer',
  templateUrl: './observer.Component.html',
  styleUrls: [
    'observer.component.scss',
  ],
})
export class ObserverComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  isCollapsed = false;
  selectedId: number;

  constructor(
    private service: ObserverCrudService,
    private route: ActivatedRoute,
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
  // this.uploadPopupService.open(BddUploadDialogComponent as Component, this.selectedId);
    this.service.addHero( new Hero('17', 'yaniv2'))
   .switchMap((h1) => {
      return this.service.updateHero( new Hero('15', 'yaniv1'));
    })
    .subscribe((h3) => {
      forkJoin( // Promise.all([p1, p2, p3]).then(values => { })
      this.service.addHero( new Hero('18', 'yaniv3')),
      this.service.removeHero(16)
      ).subscribe(([res1, res2]) => {
        this.heroes$ = this.service.getHeroes();
      })
    }) 
  }

  setSelectId(selectedId) {
    this.selectedId = selectedId;
    this.isCollapsed = true;
  }
}
