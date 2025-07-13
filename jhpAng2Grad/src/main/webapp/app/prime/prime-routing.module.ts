import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { PrimeComponent } from './';

const routes: Routes = [
  {
    path: 'prime',
    component: PrimeComponent,
    data: {
        authorities: [],
        pageTitle: 'prime.title'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeRoutingModule { }
