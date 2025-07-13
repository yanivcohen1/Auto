import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { MongoTestComponent } from './mongo-test.component';
import { MongoTestDetailComponent } from './mongo-test-detail.component';
import { MongoTestPopupComponent } from './mongo-test-dialog.component';
import { MongoTestDeletePopupComponent } from './mongo-test-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class MongoTestResolvePagingParams implements Resolve<any> {

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

export const mongoTestRoute: Routes = [
  {
    path: 'mongo-test',
    component: MongoTestComponent,
    resolve: {
      'pagingParams': MongoTestResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'gatwayApp.mongoTest.home.title'
    }
  }, {
    path: 'mongo-test/:id',
    component: MongoTestDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'gatwayApp.mongoTest.home.title'
    }
  }
];

export const mongoTestPopupRoute: Routes = [
  {
    path: 'mongo-test-new',
    component: MongoTestPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'gatwayApp.mongoTest.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'mongo-test/:id/edit',
    component: MongoTestPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'gatwayApp.mongoTest.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'mongo-test/:id/delete',
    component: MongoTestDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'gatwayApp.mongoTest.home.title'
    },
    outlet: 'popup'
  }
];
