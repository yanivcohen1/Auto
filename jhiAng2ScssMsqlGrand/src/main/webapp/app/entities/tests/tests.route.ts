import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { TestsComponent } from './tests.component';
import { TestsDetailComponent } from './tests-detail.component';
import { TestsPopupComponent } from './tests-dialog.component';
import { TestsDeletePopupComponent } from './tests-delete-dialog.component';

@Injectable()
export class TestsResolvePagingParams implements Resolve<any> {

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

export const testsRoute: Routes = [
    {
        path: 'tests',
        component: TestsComponent,
        resolve: {
            'pagingParams': TestsResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tests'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'tests/:id',
        component: TestsDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tests'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const testsPopupRoute: Routes = [
    {
        path: 'tests-new',
        component: TestsPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tests'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tests/:id/edit',
        component: TestsPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tests'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tests/:id/delete',
        component: TestsDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tests'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
