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
import { SuiteDetailComponent } from '../../../../../../main/webapp/app/entities/suite/suite-detail.component';
import { SuiteService } from '../../../../../../main/webapp/app/entities/suite/suite.service';
import { Suite } from '../../../../../../main/webapp/app/entities/suite/suite.model';

describe('Component Tests', () => {

    describe('Suite Management Detail Component', () => {
        let comp: SuiteDetailComponent;
        let fixture: ComponentFixture<SuiteDetailComponent>;
        let service: SuiteService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [SuiteDetailComponent],
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
                    SuiteService
                ]
            }).overrideComponent(SuiteDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SuiteDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SuiteService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Suite(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.suite).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
