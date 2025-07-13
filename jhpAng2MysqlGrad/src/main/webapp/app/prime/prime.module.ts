import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarModule, CodeHighlighterModule, OverlayPanelModule} from 'primeng/primeng';
import {MessagesModule, SlideMenuModule, MenuModule, TabViewModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/components/growl/growl';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/components/button/button';
import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
import {DialogModule, ChartModule} from 'primeng/primeng';
import {ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import { PrimeRoutingModule } from './prime.route';
import { PrimeComponent } from './prime.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TreeModule, TreeNode, TabMenuModule, DataTableModule, TieredMenuModule} from 'primeng/primeng';
import {SharedModule} from 'primeng/components/common/shared';

import { TestManagerSharedModule } from '../shared';
import { VoteTakerComponent } from './tester/votetaker.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ModalDialogComponent } from './tester/modal-dialog/modal-dialog.component';
import {StickyModule} from 'ng2-sticky-kit';

import { NestedMainComponent } from './nested/nested-main.component';
import ComponentOneComponent from './nested/component-one.component';
import ComponentTwoComponent from './nested/component-two.component';
import ChildOneComponent from './nested/child-one.component';
import ChildTwoComponent from './nested/child-two.component';
import ChildTwoNestedComponent from './nested/child-two-nested.component';
import { DataTableCrudComponent } from './tester/data-table-crud/data-table-crud.component';
import { CarService } from './tester/data-table-crud/car.service';
import { PrimeService } from './prime.service';
import { MarkdownComponent } from './tester/markdown/markdown.component';

@NgModule({
  imports: [
    CommonModule,
    PrimeRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
    TreeModule,
    MessagesModule,
    GrowlModule,
    FormsModule,
    ButtonModule,
    ContextMenuModule,
    TabViewModule,
    SharedModule,
    TestManagerSharedModule,
    HttpClientModule,
    DialogModule,
    ConfirmDialogModule,
    SlideMenuModule,
    MenuModule,
    TabMenuModule,
    ChartModule,
    CodeHighlighterModule,
    StickyModule,
    DataTableModule,
    TieredMenuModule,
    OverlayPanelModule
  ],
  declarations: [PrimeComponent, VoteTakerComponent, ModalDialogComponent,
    NestedMainComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildTwoNestedComponent,
    DataTableCrudComponent,
    MarkdownComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CarService, PrimeService]
})
export class PrimeModule { }
