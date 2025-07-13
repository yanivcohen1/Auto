import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatwaySharedModule } from '../../shared';

import {
    MongoTestService,
    MongoTestPopupService,
    MongoTestComponent,
    MongoTestDetailComponent,
    MongoTestDialogComponent,
    MongoTestPopupComponent,
    MongoTestDeletePopupComponent,
    MongoTestDeleteDialogComponent,
    mongoTestRoute,
    mongoTestPopupRoute,
    MongoTestResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...mongoTestRoute,
    ...mongoTestPopupRoute,
];

@NgModule({
    imports: [
        GatwaySharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        MongoTestComponent,
        MongoTestDetailComponent,
        MongoTestDialogComponent,
        MongoTestDeleteDialogComponent,
        MongoTestPopupComponent,
        MongoTestDeletePopupComponent,
    ],
    entryComponents: [
        MongoTestComponent,
        MongoTestDialogComponent,
        MongoTestPopupComponent,
        MongoTestDeleteDialogComponent,
        MongoTestDeletePopupComponent,
    ],
    providers: [
        MongoTestService,
        MongoTestPopupService,
        MongoTestResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatwayMongoTestModule {}
