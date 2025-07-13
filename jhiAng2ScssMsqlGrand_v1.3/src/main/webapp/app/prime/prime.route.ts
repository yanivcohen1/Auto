import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { PrimeComponent } from './';
import { VoteTakerComponent } from './tester/votetaker.component';

import { NestedMainComponent } from './nested/nested-main.component';
import {ComponentOneComponent} from './nested/component-one.component';
import {ComponentTwoComponent} from './nested/component-two.component';
import {ChildOneComponent} from './nested/child-one.component';
import {ChildTwoComponent} from './nested/child-two.component';
import {ChildTwoNestedComponent} from './nested/child-two-nested.component';

const routes: Routes = [
  {
    path: 'prime',
    component: PrimeComponent,
    data: {
        authorities: [],
        pageTitle: 'prime.title'
    }
  },
  {
    path: 'tester',
    component: VoteTakerComponent,
    data: {
        authorities: [],
        pageTitle: 'tester.title'
    }
  },
  { path: 'nested', component: NestedMainComponent,
    children: [
      { path: '', redirectTo: 'component-one', pathMatch: 'full' },
      { path: 'component-one', component: ComponentOneComponent },
      { path: 'component-two/:id', component: ComponentTwoComponent,
        children: [
          { path: '', redirectTo: 'child-one', pathMatch: 'full' },
          { path: 'child-one', component: ChildOneComponent },
          { path: 'child-two/:id', component: ChildTwoComponent,
            children: [
              { path: '', redirectTo: 'child-one', pathMatch: 'full' },
              { path: 'child-one', component: ChildOneComponent },
              { path: 'child-two-nested', component: ChildTwoNestedComponent }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeRoutingModule { }
