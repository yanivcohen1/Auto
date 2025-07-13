import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    TestManagerSharedLibsModule,
    TestManagerSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    JhiTrackerService,
    HasAnyAuthorityDirective,
    JhiSocialComponent,
    SocialService,
    JhiLoginModalComponent
    // CsvService
} from './';

import { CsvService } from './csv/csv.service';
import { VoterComponent } from './common-comp/voter.component';
import { FilterPipe, SortByPipe } from './common-comp/global.filter';
import { HighlightDirective } from './common-comp/highlight.directive';
import { ModalService } from './modal/modal.service';
import { ModalComponent } from './modal/modal.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { MarkdownModule } from 'angular2-markdown';

@NgModule({
    imports: [
        TestManagerSharedLibsModule,
        TestManagerSharedCommonModule,
        SlimLoadingBarModule.forRoot(),
        MarkdownModule.forRoot()
    ],
    declarations: [
        JhiSocialComponent,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        VoterComponent,
        FilterPipe,
        SortByPipe,
        HighlightDirective,
        ModalComponent
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        JhiTrackerService,
        AuthServerProvider,
        SocialService,
        UserService,
        DatePipe,
        CsvService,
        ModalService,
        SlimLoadingBarService
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        TestManagerSharedCommonModule,
        JhiSocialComponent,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe,
        VoterComponent,
        FilterPipe,
        SortByPipe,
        HighlightDirective,
        ModalComponent,
        SlimLoadingBarModule,
        MarkdownModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class TestManagerSharedModule {}
