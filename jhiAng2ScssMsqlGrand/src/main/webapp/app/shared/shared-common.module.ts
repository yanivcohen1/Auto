import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { WindowRef } from './tracker/window.service';
import {
    TestsManagerSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        TestsManagerSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        WindowRef,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        TestsManagerSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class TestsManagerSharedCommonModule {}
