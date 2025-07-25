import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Ang2MongMvnTestsModule } from './tests/tests.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Ang2MongMvnTestsModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Ang2MongMvnEntityModule {}
