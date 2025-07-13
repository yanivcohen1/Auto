import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { MongoTest } from './mongo-test.model';
import { MongoTestService } from './mongo-test.service';

@Component({
    selector: 'jhi-mongo-test-detail',
    templateUrl: './mongo-test-detail.component.html'
})
export class MongoTestDetailComponent implements OnInit, OnDestroy {

    mongoTest: MongoTest;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private mongoTestService: MongoTestService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['mongoTest', 'enums']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.mongoTestService.find(id).subscribe(mongoTest => {
            this.mongoTest = mongoTest;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
