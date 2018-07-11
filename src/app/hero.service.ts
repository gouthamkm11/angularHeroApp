import { Injectable } from '@angular/core';
import { HEROES } from './dataSource/mockHeros';
import { IHero } from './models/hero';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private msgService:MessageService) { }

  //Component Property
  heroArray:IHero[] = HEROES;

  getHeroes():Observable<IHero[]>{
    this.msgService.add('HeroService: fetched heroes');
    return of(this.heroArray);
  }
}
