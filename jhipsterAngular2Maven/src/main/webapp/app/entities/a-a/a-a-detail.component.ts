import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { AA } from './a-a.model';
import { AAService } from './a-a.service';

@Component({
    selector: 'jhi-a-a-detail',
    templateUrl: './a-a-detail.component.html'
})
export class AADetailComponent implements OnInit, OnDestroy {

    aA: AA;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private aAService: AAService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['aA']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.aAService.find(id).subscribe(aA => {
            this.aA = aA;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
