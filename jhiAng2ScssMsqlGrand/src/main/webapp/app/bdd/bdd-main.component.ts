// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Hero, BddService, Msg } from './bdd.service';
import { BddUploadDialogComponent } from './bdd-upload-dialog.component';
import {UploadPopupService} from './bdd-upload-popup.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { MenuItem } from 'primeng/primeng';

@Component({
  templateUrl: './bdd-main.Component.html',
  styleUrls: [
    'bdd-main.component.scss',
  ],
})
export class BddMainComponent implements OnInit {
  products$: Observable<Hero[]>;
  isProductCollapsed = false;
  selectedId: number;
  breadcrumb_items: MenuItem[];
  home: MenuItem;
  msgEmitter: EventEmitter<Msg>;

  constructor(
    private service: BddService,
    private route: ActivatedRoute,
    private uploadPopupService: UploadPopupService,
  ) {}

  ngOnInit() {
    this.products$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      });
      this.msgEmitter = this.service.getMsgEmitter();
      this.msgEmitter.subscribe((msg: Msg) => {
          if (msg === Msg.hideProduct) {
            this.isProductCollapsed = true;
          } else if (msg === Msg.showProduct) {
            this.isProductCollapsed = false;
          } else if (msg === Msg.hideFeature) {
            // this.isProductCollapsed = false;
          } else if (msg === Msg.showFeature) {
            const find = this.breadcrumb_items.find((item) => {
              return item.label === 'Feature';
            });
            if (find === undefined) {
              this.breadcrumb_items.push({label: 'Feature', command: (event?: any) => this.featureUnCollapsed('Feature')});
            }
          }
      })
      this.home = {icon: 'fa fa-home', url: '#/'};
      this.breadcrumb_items = [{label: 'Products', command: (event?: any) => this.productUnCollapsed('Products')}];
  }

  openModal() {
   this.uploadPopupService.open(BddUploadDialogComponent as Component, this.selectedId);
  }

  selectProductId(selectedId) {
    this.selectedId = selectedId;
    this.isProductCollapsed = true;
    const find = this.breadcrumb_items.find((item) => {
      return item.label === 'Builds';
    });
    if (find === undefined) {
      this.breadcrumb_items.push({label: 'Builds', command: (event?: any) => this.buildUnCollapsed('Builds')});
    }
    this.msgEmitter.emit(Msg.showBuild);
  }

  productUnCollapsed(products: string) {
    this.isProductCollapsed = false;
  }

  buildUnCollapsed(products: string) {
    this.msgEmitter.emit(Msg.showBuild);
    this.isProductCollapsed = true;
  }

  featureUnCollapsed(feature: string) {
    this.msgEmitter.emit(Msg.showFeature);
    this.msgEmitter.emit(Msg.hideBuild);
    this.msgEmitter.emit(Msg.hideProduct);
  }

}
