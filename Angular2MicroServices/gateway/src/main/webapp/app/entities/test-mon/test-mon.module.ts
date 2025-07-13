import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatwaySharedModule } from '../../shared';

import {
    Test_monService,
    Test_monPopupService,
    Test_monComponent,
    Test_monDetailComponent,
    Test_monDialogComponent,
    Test_monPopupComponent,
    Test_monDeletePopupComponent,
    Test_monDeleteDialogComponent,
    test_monRoute,
    test_monPopupRoute,
    Test_monResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...test_monRoute,
    ...test_monPopupRoute,
];

@NgModule({
    imports: [
        GatwaySharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Test_monComponent,
        Test_monDetailComponent,
        Test_monDialogComponent,
        Test_monDeleteDialogComponent,
        Test_monPopupComponent,
        Test_monDeletePopupComponent,
    ],
    entryComponents: [
        Test_monComponent,
        Test_monDialogComponent,
        Test_monPopupComponent,
        Test_monDeleteDialogComponent,
        Test_monDeletePopupComponent,
    ],
    providers: [
        Test_monService,
        Test_monPopupService,
        Test_monResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatwayTest_monModule {}
