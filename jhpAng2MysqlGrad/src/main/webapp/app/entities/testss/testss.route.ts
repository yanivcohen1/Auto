import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { TestssComponent } from './testss.component';
import { TestssDetailComponent } from './testss-detail.component';
import { TestssPopupComponent } from './testss-dialog.component';
import { TestssDeletePopupComponent } from './testss-delete-dialog.component';

@Injectable()
export class TestssResolvePagingParams implements Resolve<any> {

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

export const testssRoute: Routes = [
    {
        path: 'testss',
        component: TestssComponent,
        resolve: {
            'pagingParams': TestssResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testManagerApp.testss.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'testss/:id',
        component: TestssDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testManagerApp.testss.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const testssPopupRoute: Routes = [
    {
        path: 'testss-new',
        component: TestssPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testManagerApp.testss.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'testss/:id/edit',
        component: TestssPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testManagerApp.testss.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'testss/:id/delete',
        component: TestssDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'testManagerApp.testss.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
