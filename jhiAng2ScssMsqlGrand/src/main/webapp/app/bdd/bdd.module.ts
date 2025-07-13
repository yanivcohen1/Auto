import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsManagerSharedModule } from '../shared';
import { BddRoutingModule } from './bdd.route';
import { BddMainComponent } from './bdd-main.component';
import { BddStepComponent } from './bdd-step.component';
import { BddUploadDialogComponent } from './bdd-upload-dialog.component';
import { BddBuildComponent } from './bdd-build.component';
import { BddFeatureComponent } from './bdd-feature.component';
import { BddSenarioComponent } from './bdd-senario.component';
import {UploadPopupService} from './bdd-upload-popup.service';
import {BddService, Hero} from './bdd.service';
import { SplitPaneModule } from 'ng2-split-pane/lib/ng2-split-pane';
import {SpinnerModule} from 'primeng/primeng';
import {SplitButtonModule, BreadcrumbModule} from 'primeng/primeng';
import {ContextMenuModule} from 'ngx-contextmenu/lib';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CalendarModule, CodeHighlighterModule, OverlayPanelModule} from 'primeng/primeng';
import {MessagesModule, SlideMenuModule, MenuModule, TabViewModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/primeng';
import {ContextMenuModule as ContextMenuModule2} from 'primeng/primeng';
import {DialogModule, ChartModule} from 'primeng/primeng';
import {ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TreeModule, TreeNode, TabMenuModule, DataTableModule, TieredMenuModule} from 'primeng/primeng';
import {SharedModule, PanelMenuModule} from 'primeng/primeng';
import {StickyModule} from 'ng2-sticky-kit';
import {BrowserModule} from '@angular/platform-browser';

// import { PrimeRoutingModule } from './prime.route';
// import { PrimeComponent } from './prime.component';
// import { VoteTakerComponent } from './tester/votetaker.component';
// import { ModalDialogComponent } from './tester/modal-dialog/modal-dialog.component';
// import { ValidationComponent } from './tester/validation/validation.component';
// import { ForbiddenValidatorDirective } from './tester/validation/forbidden-validator.directive';
// import { NestedMainComponent } from './nested/nested-main.component';
// import { ComponentOneComponent } from './nested/component-one.component';
// import {ComponentTwoComponent} from './nested/component-two.component';
// import {ChildOneComponent} from './nested/child-one.component';
// import {ChildTwoComponent} from './nested/child-two.component';
// import {ChildTwoNestedComponent} from './nested/child-two-nested.component';
// import { DataTableCrudComponent } from './tester/data-table-crud/data-table-crud.component';
// import { CarService } from './tester/data-table-crud/car.service';
// import { PrimeService } from './prime.service';
// import { MarkdownComponent } from './tester/markdown/markdown.component';
// import {LaptopService} from './tester/provider/services/laptop.service';
// import {UiTabsComponent} from './tester/children/ui-tabs.component';
// import {UiPaneDirective} from './tester/children/ui-pane.directive';
// import {DiDemoComponent} from './tester/children/di-demo.component';
// import { ComputerProviderComponent } from './tester/provider/computer-provider.component';
// import { ContextMenu1Component } from './tester/contextMenu/Context-menu1.component';
// import { ObserverCrudService } from './tester/observer/observer-crud.service';
// import { ObserverComponent } from './tester/observer/observer.component';
// import { WikipediaSearchComponent } from './tester/reactiveSeverSearch/wikipedia-search.component';
// import { WikipediaService } from './tester/reactiveSeverSearch/wikipedia.service';
// import { JsonpModule } from '@angular/http';
// import { ReactiveFormsModule } from '@angular/forms';
// import { DynamicComponentLoaderModule } from './tester/dynamic-component-loader/app.module';
// import { DynamicFormBuilderModule } from './tester/dynamic-form-builder/app.module';

@NgModule({
  imports: [
    CommonModule,
    BddRoutingModule,
    TestsManagerSharedModule,
    CommonModule,
    BrowserAnimationsModule,
    CalendarModule,
    TreeModule,
    MessagesModule,
    GrowlModule,
    FormsModule,
    ButtonModule,
    ContextMenuModule,
    ContextMenuModule2,
    TabViewModule,
    SharedModule,
    TestsManagerSharedModule,
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
    OverlayPanelModule,
    BrowserModule,
    SplitPaneModule,
    SpinnerModule,
    SplitButtonModule,
    BreadcrumbModule,
    // JsonpModule,
    // ReactiveFormsModule,
    // DynamicComponentLoaderModule,
    // DynamicFormBuilderModule,
    PanelMenuModule
  ],
  declarations: [
    BddMainComponent,
    BddStepComponent,
    BddUploadDialogComponent,
    BddBuildComponent,
    BddFeatureComponent,
    BddSenarioComponent,
    // ModalDialogComponent,
    // NestedMainComponent,
    // ComponentOneComponent,
    // ComponentTwoComponent,
    // ChildOneComponent,
    // ChildTwoComponent,
    // ChildTwoNestedComponent,
    // DataTableCrudComponent,
    // MarkdownComponent,
    // ComputerProviderComponent,
    // ValidationComponent,
    // ForbiddenValidatorDirective,
    // UiTabsComponent, 
    // UiPaneDirective,
    // DiDemoComponent,
    // ContextMenu1Component,
    // ObserverComponent,
    // WikipediaSearchComponent
  ],
  entryComponents: [
    BddUploadDialogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    UploadPopupService,
    BddService,
    // CarService,
    // PrimeService,
    // LaptopService,
    // ObserverCrudService,
    // WikipediaService
  ]
  })
export class BddModule { }
