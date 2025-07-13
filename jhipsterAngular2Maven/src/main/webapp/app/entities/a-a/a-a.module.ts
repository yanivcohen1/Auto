import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterAngular2MavenSharedModule } from '../../shared';

import {
    AAService,
    AAPopupService,
    AAComponent,
    AADetailComponent,
    AADialogComponent,
    AAPopupComponent,
    AADeletePopupComponent,
    AADeleteDialogComponent,
    aARoute,
    aAPopupRoute,
    AAResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...aARoute,
    ...aAPopupRoute,
];

@NgModule({
    imports: [
        JhipsterAngular2MavenSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        AAComponent,
        AADetailComponent,
        AADialogComponent,
        AADeleteDialogComponent,
        AAPopupComponent,
        AADeletePopupComponent,
    ],
    entryComponents: [
        AAComponent,
        AADialogComponent,
        AAPopupComponent,
        AADeleteDialogComponent,
        AADeletePopupComponent,
    ],
    providers: [
        AAService,
        AAPopupService,
        AAResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterAngular2MavenAAModule {}
