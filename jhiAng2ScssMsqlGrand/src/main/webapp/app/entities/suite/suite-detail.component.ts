import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Suite } from './suite.model';
import { SuiteService } from './suite.service';

@Component({
    selector: 'jhi-suite-detail',
    templateUrl: './suite-detail.component.html'
})
export class SuiteDetailComponent implements OnInit, OnDestroy {

    suite: Suite;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private suiteService: SuiteService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInSuites();
    }

    load(id) {
        this.suiteService.find(id).subscribe((suite) => {
            this.suite = suite;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInSuites() {
        this.eventSubscriber = this.eventManager.subscribe(
            'suiteListModification',
            (response) => this.load(this.suite.id)
        );
    }
}
