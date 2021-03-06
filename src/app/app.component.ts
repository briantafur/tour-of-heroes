import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{

  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1094,
    name: 'Brian'
  };
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
   }

   ngOnInit(): void {
    this.getHeroes();
  }

   getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
