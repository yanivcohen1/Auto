import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { SuiteComponent } from './suite.component';
import { SuiteDetailComponent } from './suite-detail.component';
import { SuitePopupComponent } from './suite-dialog.component';
import { SuiteDeletePopupComponent } from './suite-delete-dialog.component';

@Injectable()
export class SuiteResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
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
            pageTitle: 'Suites'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'suite/:id',
        component: SuiteDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Suites'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const suitePopupRoute: Routes = [
    {
        path: 'suite-new',
        component: SuitePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Suites'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'suite/:id/edit',
        component: SuitePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Suites'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'suite/:id/delete',
        component: SuiteDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Suites'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
