import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IHero } from '../models/hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private heroService:HeroService) { }

  // All the component initialization logic goes here
  ngOnInit() : void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  //Component Variable
  heroes:IHero[];
  selectedHero: IHero;

 
  //Component Method - Click Event
  onSelect(hero:IHero): void{
    this.selectedHero = hero;
  }
}
