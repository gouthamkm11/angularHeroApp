import { Injectable } from '@angular/core';
import { HEROES } from './dataSource/mockHeros';
import { IHero } from './models/hero';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HeroService {

  constructor() { }

  //Component Property
  heroArray:IHero[] = HEROES;

  getHeroes():Observable<IHero[]>{
    return of(this.heroArray);
  }
}
