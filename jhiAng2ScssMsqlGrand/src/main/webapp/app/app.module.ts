import './vendor.ts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { TestsManagerSharedModule, UserRouteAccessService } from './shared';
import { TestsManagerHomeModule } from './home/home.module';
import { TestsManagerAdminModule } from './admin/admin.module';
import { TestsManagerAccountModule } from './account/account.module';
import { TestsManagerEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { PrimeModule } from './prime/prime.module';
import {StickyModule} from 'ng2-sticky-kit';
import { SplitPaneModule } from 'ng2-split-pane/lib/ng2-split-pane';
// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';
import { BddModule } from './bdd/bdd.module';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        TestsManagerSharedModule,
        TestsManagerHomeModule,
        TestsManagerAdminModule,
        TestsManagerAccountModule,
        TestsManagerEntityModule,
        PrimeModule,
        StickyModule,
        BddModule,
        SplitPaneModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class TestsManagerAppModule {}
