import { Component, OnInit } from '@angular/core';
import { IHero } from '../models/hero';
import { HEROES } from '../dataSource/mockHeros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor() { }

  // All the component initialization logic goes here
  ngOnInit() {
  }

  //Component Variable
  heroes = HEROES;
  selectedHero: Hero;
 
 
  constructor() { }
 
  ngOnInit() {
  }
 
  //Component Method - Click Event
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
