import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestsManagerSuiteModule } from './suite/suite.module';
import { TestsManagerTestsModule } from './tests/tests.module';
import { TestsManagerTestssModule } from './testss/testss.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TestsManagerSuiteModule,
        TestsManagerTestsModule,
        TestsManagerTestssModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestsManagerEntityModule {}
