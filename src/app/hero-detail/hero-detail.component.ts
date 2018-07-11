import { Component, OnInit, Input } from '@angular/core';
import { IHero } from '../models/hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.selectedHero;
  }
  @Input() selectedHero:IHero;
}
