import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Suite } from './suite.model';
import { SuiteService } from './suite.service';

@Component({
    selector: 'jhi-suite-detail',
    templateUrl: './suite-detail.component.html'
})
export class SuiteDetailComponent implements OnInit, OnDestroy {

    suite: Suite;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private suiteService: SuiteService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['suite']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.suiteService.find(id).subscribe(suite => {
            this.suite = suite;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
