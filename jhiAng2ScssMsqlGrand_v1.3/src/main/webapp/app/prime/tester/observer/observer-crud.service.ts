import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { retry } from 'rxjs/operator/retry';

export const enum Enums {
  'one',
  'two',
  'three'
}

export class Hero {
  constructor( 
    public id: string,
    public name?: string,
    public val?: number,
    public enums?: Enums,
    public dates?: any) { }
}

@Injectable()
export class ObserverCrudService {

  heros = [
    // new Hero('13', 'Bombasto'),
    new Hero('14', 'Celeritas'),
    new Hero('15', 'Magneta'),
    new Hero('16', 'RubberMan')
  ];
  
  getHeroes() {
    return Observable.of(this.heros);
  }

  getHero(id: number | string): Observable<Hero> {
    return this.getHeroes()
      // (+) before `id` turns the string into a number
      .map((heroes) => heroes.find((hero) => hero.id === String(+id)))
  }

  updateHero(heroIn: Hero): Observable<Hero> {
    return this.getHeroes()
      .map((heroes) => heroes.find((hero) => hero.id === heroIn.id))
      .map((heroe) => {
        heroe.name = heroIn.name;
        return heroe;
      });
  }

  addHero(newHero: Hero): Observable<Hero> {
    return this.getHeroes().map((heroes) => {
      heroes.push(newHero);
      // this.heros = heroes;
      return newHero;
    })
  }

  removeHero(id: number | string): Observable<Hero[]> {
    return this.getHeroes().map((heroes) => heroes.filter((hero) => hero.id !== String(id)))
    .map((heroes) => {
      this.heros = heroes;
      return heroes;
    })
  }
}
