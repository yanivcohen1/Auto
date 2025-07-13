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
import { TestsDetailComponent } from '../../../../../../main/webapp/app/entities/tests/tests-detail.component';
import { TestsService } from '../../../../../../main/webapp/app/entities/tests/tests.service';
import { Tests } from '../../../../../../main/webapp/app/entities/tests/tests.model';

describe('Component Tests', () => {

    describe('Tests Management Detail Component', () => {
        let comp: TestsDetailComponent;
        let fixture: ComponentFixture<TestsDetailComponent>;
        let service: TestsService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestsDetailComponent],
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
                    TestsService
                ]
            }).overrideComponent(TestsDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TestsDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TestsService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tests(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tests).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
