/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { TestsManagerTestModule } from '../../../test.module';
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
                imports: [TestsManagerTestModule],
                declarations: [TestsDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    TestsService,
                    JhiEventManager
                ]
            }).overrideTemplate(TestsDetailComponent, '')
            .compileComponents();
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
            expect(comp.tests).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
