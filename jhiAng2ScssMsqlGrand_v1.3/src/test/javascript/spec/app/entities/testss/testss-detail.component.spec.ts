/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { TestsManagerTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { TestssDetailComponent } from '../../../../../../main/webapp/app/entities/testss/testss-detail.component';
import { TestssService } from '../../../../../../main/webapp/app/entities/testss/testss.service';
import { Testss } from '../../../../../../main/webapp/app/entities/testss/testss.model';

describe('Component Tests', () => {

    describe('Testss Management Detail Component', () => {
        let comp: TestssDetailComponent;
        let fixture: ComponentFixture<TestssDetailComponent>;
        let service: TestssService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TestsManagerTestModule],
                declarations: [TestssDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    TestssService,
                    JhiEventManager
                ]
            }).overrideTemplate(TestssDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TestssDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TestssService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Testss('10')));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.testss).toEqual(jasmine.objectContaining({id: '10'}));
            });
        });
    });

});
