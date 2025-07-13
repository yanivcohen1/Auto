import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Tests } from './tests.model';
import { TestsService } from './tests.service';

@Component({
    selector: 'jhi-tests-detail',
    templateUrl: './tests-detail.component.html'
})
export class TestsDetailComponent implements OnInit, OnDestroy {

    tests: Tests;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private testsService: TestsService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tests']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.testsService.find(id).subscribe(tests => {
            this.tests = tests;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
