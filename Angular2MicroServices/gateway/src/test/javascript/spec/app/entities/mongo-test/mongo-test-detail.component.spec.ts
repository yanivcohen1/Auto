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
import { MongoTestDetailComponent } from '../../../../../../main/webapp/app/entities/mongo-test/mongo-test-detail.component';
import { MongoTestService } from '../../../../../../main/webapp/app/entities/mongo-test/mongo-test.service';
import { MongoTest } from '../../../../../../main/webapp/app/entities/mongo-test/mongo-test.model';

describe('Component Tests', () => {

    describe('MongoTest Management Detail Component', () => {
        let comp: MongoTestDetailComponent;
        let fixture: ComponentFixture<MongoTestDetailComponent>;
        let service: MongoTestService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [MongoTestDetailComponent],
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
                    MongoTestService
                ]
            }).overrideComponent(MongoTestDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MongoTestDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MongoTestService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new MongoTest(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.mongoTest).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
