import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
    TestsManagerSharedLibsModule,
    TestsManagerSharedCommonModule,
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
} from './';

import { CsvService } from './csv/csv.service';
import { VoterComponent } from './common-comp/voter.component';
import { FilterPipe, SortByPipe, FilterAsyncPipe } from './common-comp/global.filter';
import { HighlightDirective } from './common-comp/highlight.directive';
import { ModalService } from './modal/modal.service';
import { ModalComponent } from './modal/modal.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { MarkdownModule } from 'angular2-markdown';
import {BrowserModule} from '@angular/platform-browser';
import { MyHttpLogInterceptor } from './common-comp/http.interceptor';
import { MyNgIfDirective } from './common-comp/my-ng-if.directive';

@NgModule({
    imports: [
        TestsManagerSharedLibsModule,
        TestsManagerSharedCommonModule,
        SlimLoadingBarModule.forRoot(),
        MarkdownModule.forRoot(),
        BrowserModule,
        HttpClientModule
    ],
    declarations: [
        JhiSocialComponent,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        VoterComponent,
        FilterPipe,
        SortByPipe,
        FilterAsyncPipe,
        HighlightDirective,
        ModalComponent,
        MyNgIfDirective
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
        SlimLoadingBarService,
        { provide: HTTP_INTERCEPTORS, useClass: MyHttpLogInterceptor, multi: true }
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        TestsManagerSharedCommonModule,
        JhiSocialComponent,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        VoterComponent,
        FilterPipe,
        SortByPipe,
        FilterAsyncPipe,
        HighlightDirective,
        ModalComponent,
        SlimLoadingBarModule,
        MarkdownModule,
        HttpClientModule,
        MyNgIfDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class TestsManagerSharedModule {}
