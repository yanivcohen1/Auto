import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestsManagerSharedModule } from '../../shared';
import {
    TestssService,
    TestssPopupService,
    TestssComponent,
    TestssDetailComponent,
    TestssDialogComponent,
    TestssPopupComponent,
    TestssDeletePopupComponent,
    TestssDeleteDialogComponent,
    testssRoute,
    testssPopupRoute,
    TestssResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...testssRoute,
    ...testssPopupRoute,
];

@NgModule({
    imports: [
        TestsManagerSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        TestssComponent,
        TestssDetailComponent,
        TestssDialogComponent,
        TestssDeleteDialogComponent,
        TestssPopupComponent,
        TestssDeletePopupComponent,
    ],
    entryComponents: [
        TestssComponent,
        TestssDialogComponent,
        TestssPopupComponent,
        TestssDeleteDialogComponent,
        TestssDeletePopupComponent,
    ],
    providers: [
        TestssService,
        TestssPopupService,
        TestssResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestsManagerTestssModule {}
