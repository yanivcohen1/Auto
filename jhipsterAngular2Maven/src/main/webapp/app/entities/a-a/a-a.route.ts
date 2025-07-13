import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { AAComponent } from './a-a.component';
import { AADetailComponent } from './a-a-detail.component';
import { AAPopupComponent } from './a-a-dialog.component';
import { AADeletePopupComponent } from './a-a-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class AAResolvePagingParams implements Resolve<any> {

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

export const aARoute: Routes = [
  {
    path: 'a-a',
    component: AAComponent,
    resolve: {
      'pagingParams': AAResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterAngular2MavenApp.aA.home.title'
    }
  }, {
    path: 'a-a/:id',
    component: AADetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterAngular2MavenApp.aA.home.title'
    }
  }
];

export const aAPopupRoute: Routes = [
  {
    path: 'a-a-new',
    component: AAPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterAngular2MavenApp.aA.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'a-a/:id/edit',
    component: AAPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterAngular2MavenApp.aA.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'a-a/:id/delete',
    component: AADeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'jhipsterAngular2MavenApp.aA.home.title'
    },
    outlet: 'popup'
  }
];
