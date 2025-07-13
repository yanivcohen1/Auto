import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GatwayTest1Module } from './test-1/test-1.module';
import { GatwayTest_monModule } from './test-mon/test-mon.module';
import { GatwaySuiteModule } from './suite/suite.module';
import { GatwayTestsModule } from './tests/tests.module';
import { GatwayMongoTestModule } from './mongo-test/mongo-test.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        GatwayTest1Module,
        GatwayTest_monModule,
        GatwaySuiteModule,
        GatwayTestsModule,
        GatwayMongoTestModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatwayEntityModule {}
