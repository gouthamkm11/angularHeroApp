import { Injectable } from '@angular/core';
import { HEROES } from './dataSource/mockHeros';
import { IHero } from './models/hero';


@Injectable()
export class HeroService {

  constructor() { }

  //Component Property
  heroArray:IHero[] = HEROES;

  getHeroes():IHero[]{
    return this.heroArray;
  }
}
