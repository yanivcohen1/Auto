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
import { Test1DetailComponent } from '../../../../../../main/webapp/app/entities/test-1/test-1-detail.component';
import { Test1Service } from '../../../../../../main/webapp/app/entities/test-1/test-1.service';
import { Test1 } from '../../../../../../main/webapp/app/entities/test-1/test-1.model';

describe('Component Tests', () => {

    describe('Test1 Management Detail Component', () => {
        let comp: Test1DetailComponent;
        let fixture: ComponentFixture<Test1DetailComponent>;
        let service: Test1Service;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Test1DetailComponent],
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
                    Test1Service
                ]
            }).overrideComponent(Test1DetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Test1DetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Test1Service);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Test1(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.test1).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
