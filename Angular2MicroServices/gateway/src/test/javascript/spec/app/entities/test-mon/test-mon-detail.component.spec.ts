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
import { Test_monDetailComponent } from '../../../../../../main/webapp/app/entities/test-mon/test-mon-detail.component';
import { Test_monService } from '../../../../../../main/webapp/app/entities/test-mon/test-mon.service';
import { Test_mon } from '../../../../../../main/webapp/app/entities/test-mon/test-mon.model';

describe('Component Tests', () => {

    describe('Test_mon Management Detail Component', () => {
        let comp: Test_monDetailComponent;
        let fixture: ComponentFixture<Test_monDetailComponent>;
        let service: Test_monService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Test_monDetailComponent],
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
                    Test_monService
                ]
            }).overrideComponent(Test_monDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Test_monDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Test_monService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Test_mon(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.test_mon).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
