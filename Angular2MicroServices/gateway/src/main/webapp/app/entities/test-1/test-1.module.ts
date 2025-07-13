import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatwaySharedModule } from '../../shared';

import {
    Test1Service,
    Test1PopupService,
    Test1Component,
    Test1DetailComponent,
    Test1DialogComponent,
    Test1PopupComponent,
    Test1DeletePopupComponent,
    Test1DeleteDialogComponent,
    test1Route,
    test1PopupRoute,
    Test1ResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...test1Route,
    ...test1PopupRoute,
];

@NgModule({
    imports: [
        GatwaySharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Test1Component,
        Test1DetailComponent,
        Test1DialogComponent,
        Test1DeleteDialogComponent,
        Test1PopupComponent,
        Test1DeletePopupComponent,
    ],
    entryComponents: [
        Test1Component,
        Test1DialogComponent,
        Test1PopupComponent,
        Test1DeleteDialogComponent,
        Test1DeletePopupComponent,
    ],
    providers: [
        Test1Service,
        Test1PopupService,
        Test1ResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatwayTest1Module {}
