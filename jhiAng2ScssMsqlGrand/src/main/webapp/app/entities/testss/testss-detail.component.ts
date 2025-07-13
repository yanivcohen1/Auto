import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Testss } from './testss.model';
import { TestssService } from './testss.service';

@Component({
    selector: 'jhi-testss-detail',
    templateUrl: './testss-detail.component.html'
})
export class TestssDetailComponent implements OnInit, OnDestroy {

    testss: Testss;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private testssService: TestssService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInTestsses();
    }

    load(id) {
        this.testssService.find(id).subscribe((testss) => {
            this.testss = testss;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInTestsses() {
        this.eventSubscriber = this.eventManager.subscribe(
            'testssListModification',
            (response) => this.load(this.testss.id)
        );
    }
}
