import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Tests } from './tests.model';
import { TestsService } from './tests.service';

@Component({
    selector: 'jhi-tests-detail',
    templateUrl: './tests-detail.component.html'
})
export class TestsDetailComponent implements OnInit, OnDestroy {

    tests: Tests;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private testsService: TestsService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInTests();
    }

    load(id) {
        this.testsService.find(id).subscribe((tests) => {
            this.tests = tests;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInTests() {
        this.eventSubscriber = this.eventManager.subscribe(
            'testsListModification',
            (response) => this.load(this.tests.id)
        );
    }
}
