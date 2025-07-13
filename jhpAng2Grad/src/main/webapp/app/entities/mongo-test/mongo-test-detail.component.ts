import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { MongoTest } from './mongo-test.model';
import { MongoTestService } from './mongo-test.service';

@Component({
    selector: 'jhi-mongo-test-detail',
    templateUrl: './mongo-test-detail.component.html'
})
export class MongoTestDetailComponent implements OnInit, OnDestroy {

    mongoTest: MongoTest;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private mongoTestService: MongoTestService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInMongoTests();
    }

    load(id) {
        this.mongoTestService.find(id).subscribe((mongoTest) => {
            this.mongoTest = mongoTest;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInMongoTests() {
        this.eventSubscriber = this.eventManager.subscribe(
            'mongoTestListModification',
            (response) => this.load(this.mongoTest.id)
        );
    }
}
