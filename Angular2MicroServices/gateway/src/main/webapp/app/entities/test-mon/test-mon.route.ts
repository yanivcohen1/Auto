import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Test_monComponent } from './test-mon.component';
import { Test_monDetailComponent } from './test-mon-detail.component';
import { Test_monPopupComponent } from './test-mon-dialog.component';
import { Test_monDeletePopupComponent } from './test-mon-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Test_monResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
      let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
      return {
          page: this.paginationUtil.parsePage(page),
          predicate: this.paginationUtil.parsePredicate(sort),
          ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

export const test_monRoute: Routes = [
  {
    path: 'test-mon',
    component: Test_monComponent,
    resolve: {
      'pagingParams': Test_monResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'gatwayApp.test_mon.home.title'
    }
  }, {
    path: 'test-mon/:id',
    component: Test_monDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'gatwayApp.test_mon.home.title'
    }
  }
];

export const test_monPopupRoute: Routes = [
  {
    path: 'test-mon-new',
    component: Test_monPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'gatwayApp.test_mon.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'test-mon/:id/edit',
    component: Test_monPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'gatwayApp.test_mon.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'test-mon/:id/delete',
    component: Test_monDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'gatwayApp.test_mon.home.title'
    },
    outlet: 'popup'
  }
];
