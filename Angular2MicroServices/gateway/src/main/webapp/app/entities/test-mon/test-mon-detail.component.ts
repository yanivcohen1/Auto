import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Test_mon } from './test-mon.model';
import { Test_monService } from './test-mon.service';

@Component({
    selector: 'jhi-test-mon-detail',
    templateUrl: './test-mon-detail.component.html'
})
export class Test_monDetailComponent implements OnInit, OnDestroy {

    test_mon: Test_mon;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private test_monService: Test_monService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['test_mon', 'enums']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.test_monService.find(id).subscribe(test_mon => {
            this.test_mon = test_mon;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
