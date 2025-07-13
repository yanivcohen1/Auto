import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BddRoutingModule } from './bdd.route';
import { BddMainComponent } from './bdd-main.component';
import { BddProductComponent } from './bdd-product.component';
import { BddUploadDialogComponent } from './bdd-upload-dialog.component';
import { BddBuildComponent } from './bdd-build.component';
import { BddFeatureComponent } from './bdd-feature.component';
import { BddSenarioComponent } from './bdd-senario.component';
import {UploadPopupService} from './bdd-upload-popup.service';
import {BddService, Hero} from './bdd.service';
import { TestsManagerSharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    BddRoutingModule,
    TestsManagerSharedModule
  ],
  declarations: [
    BddMainComponent,
    BddProductComponent,
    BddUploadDialogComponent,
    BddBuildComponent,
    BddFeatureComponent,
    BddSenarioComponent
  ]
  ,
  entryComponents: [
    BddUploadDialogComponent
  ],
  providers: [
    UploadPopupService,
    BddService
  ]
  })
export class BddModule { }
