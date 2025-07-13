import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { slideInOutAnimation } from '../shared';
import { Hero, BddService, Msg } from './bdd.service';

@Component({
  selector: 'jhi-bdd-step',
  templateUrl: './bdd-step.component.html',
  styleUrls: ['bdd-step.component.scss'],
  animations: [ slideInOutAnimation ]
})
export class BddStepComponent implements OnInit {
  @HostBinding('@slideInOutAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  builds$: Observable<Hero[]>;
  product$: Observable<Hero>;
  msgEmitter: EventEmitter<Msg>;
  isBuildCollapsed = false;
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BddService
  ) {}

  ngOnInit() {
    this.product$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')));
    this.builds$ = this.service.getHeroes();
    this.service.getMsgEmitter().subscribe((msg: Msg) => {
          if (msg === Msg.hideBuild) {
            this.isBuildCollapsed = true;
          } else if (msg === Msg.showBuild) {
            this.isBuildCollapsed = false;
          }
    })
  }

  selectBuildId(selectedId) {
    this.selectedId = selectedId;
    this.isBuildCollapsed = true;
    this.msgEmitter.emit(Msg.showFeature);
    // const buildId = build ? build.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    // this.router.navigate(['../', { id: buildId, foo: 'foo' }]);
  }
}
