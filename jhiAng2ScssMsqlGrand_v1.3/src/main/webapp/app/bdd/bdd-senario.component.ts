import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { slideInOutAnimation } from '../shared';
import { Hero, BddService } from './bdd.service';

@Component({
  templateUrl: './bdd-senario.component.html',
  animations: [ slideInOutAnimation ]
})
export class BddSenarioComponent implements OnInit {
  @HostBinding('@slideInOutAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BddService
  ) {}

  ngOnInit() {
    this.hero$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')));
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['../', { id: heroId, foo: 'foo' }]);
  }
}
