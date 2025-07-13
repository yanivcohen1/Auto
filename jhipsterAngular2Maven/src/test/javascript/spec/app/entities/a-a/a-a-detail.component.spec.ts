import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils } from 'ng-jhipster';
import { JhiLanguageService } from 'ng-jhipster';
import { MockLanguageService } from '../../../helpers/mock-language.service';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { AADetailComponent } from '../../../../../../main/webapp/app/entities/a-a/a-a-detail.component';
import { AAService } from '../../../../../../main/webapp/app/entities/a-a/a-a.service';
import { AA } from '../../../../../../main/webapp/app/entities/a-a/a-a.model';

describe('Component Tests', () => {

    describe('AA Management Detail Component', () => {
        let comp: AADetailComponent;
        let fixture: ComponentFixture<AADetailComponent>;
        let service: AAService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [AADetailComponent],
                providers: [
                    MockBackend,
                    BaseRequestOptions,
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    {
                        provide: Http,
                        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backendInstance, defaultOptions);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
                    {
                        provide: JhiLanguageService,
                        useClass: MockLanguageService
                    },
                    AAService
                ]
            }).overrideComponent(AADetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(AADetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AAService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN
            spyOn(service, 'find').and.returnValue(Observable.of(new AA(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.aA).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
