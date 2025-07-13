/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { TestManagerTestModule } from '../../../test.module';
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
                imports: [TestManagerTestModule],
                declarations: [MongoTestDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    MongoTestService,
                    JhiEventManager
                ]
            }).overrideTemplate(MongoTestDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MongoTestDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MongoTestService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new MongoTest('aaa')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.mongoTest).toEqual(jasmine.objectContaining({id: 'aaa'}));
            });
        });
    });

});
