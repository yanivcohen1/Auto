import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Test1 } from './test-1.model';
import { Test1Service } from './test-1.service';

@Component({
    selector: 'jhi-test-1-detail',
    templateUrl: './test-1-detail.component.html'
})
export class Test1DetailComponent implements OnInit, OnDestroy {

    test1: Test1;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private test1Service: Test1Service,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['test1', 'y']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.test1Service.find(id).subscribe(test1 => {
            this.test1 = test1;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
