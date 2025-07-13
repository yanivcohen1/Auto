import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { SuiteComponent } from './suite.component';
import { SuiteDetailComponent } from './suite-detail.component';
import { SuitePopupComponent } from './suite-dialog.component';
import { SuiteDeletePopupComponent } from './suite-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class SuiteResolvePagingParams implements Resolve<any> {

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

export const suiteRoute: Routes = [
  {
    path: 'suite',
    component: SuiteComponent,
    resolve: {
      'pagingParams': SuiteResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterAngular2MavenApp.suite.home.title'
    }
  }, {
    path: 'suite/:id',
    component: SuiteDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterAngular2MavenApp.suite.home.title'
    }
  }
];

export const suitePopupRoute: Routes = [
  {
    path: 'suite-new',
    component: SuitePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterAngular2MavenApp.suite.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'suite/:id/edit',
    component: SuitePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterAngular2MavenApp.suite.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'suite/:id/delete',
    component: SuiteDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterAngular2MavenApp.suite.home.title'
    },
    outlet: 'popup'
  }
];
