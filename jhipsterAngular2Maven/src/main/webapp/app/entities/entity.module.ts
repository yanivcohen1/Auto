import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterAngular2MavenAAModule } from './a-a/a-a.module';
import { JhipsterAngular2MavenSuiteModule } from './suite/suite.module';
import { JhipsterAngular2MavenTestsModule } from './tests/tests.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterAngular2MavenAAModule,
        JhipsterAngular2MavenSuiteModule,
        JhipsterAngular2MavenTestsModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterAngular2MavenEntityModule {}
