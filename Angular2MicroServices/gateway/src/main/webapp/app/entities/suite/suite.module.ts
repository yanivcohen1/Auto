import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatwaySharedModule } from '../../shared';

import {
    SuiteService,
    SuitePopupService,
    SuiteComponent,
    SuiteDetailComponent,
    SuiteDialogComponent,
    SuitePopupComponent,
    SuiteDeletePopupComponent,
    SuiteDeleteDialogComponent,
    suiteRoute,
    suitePopupRoute,
    SuiteResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...suiteRoute,
    ...suitePopupRoute,
];

@NgModule({
    imports: [
        GatwaySharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        SuiteComponent,
        SuiteDetailComponent,
        SuiteDialogComponent,
        SuiteDeleteDialogComponent,
        SuitePopupComponent,
        SuiteDeletePopupComponent,
    ],
    entryComponents: [
        SuiteComponent,
        SuiteDialogComponent,
        SuitePopupComponent,
        SuiteDeleteDialogComponent,
        SuiteDeletePopupComponent,
    ],
    providers: [
        SuiteService,
        SuitePopupService,
        SuiteResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatwaySuiteModule {}
