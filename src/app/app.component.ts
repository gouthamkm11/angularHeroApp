import { Component } from '@angular/core';
import { IHero } from './models/hero';
import { IButton } from '../../node_modules/@types/selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
