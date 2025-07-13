import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/components/growl/growl';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/components/button/button';
import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
import {TabViewModule} from 'primeng/components/tabview/tabview';
// import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

import { PrimeRoutingModule } from './prime-routing.module';
import { PrimeComponent } from './prime.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TreeModule, TreeNode} from 'primeng/primeng';
import {FilterPipe} from './prime.filter';
import {SharedModule} from 'primeng/components//common/shared';

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
    SharedModule
  ],
  declarations: [PrimeComponent, FilterPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrimeModule { }
