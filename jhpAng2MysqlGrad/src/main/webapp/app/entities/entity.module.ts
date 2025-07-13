import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestManagerTestsModule } from './tests/tests.module';
import { TestManagerSuiteModule } from './suite/suite.module';
import { TestManagerTestssModule } from './testss/testss.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TestManagerTestsModule,
        TestManagerSuiteModule,
        TestManagerTestssModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestManagerEntityModule {}
