import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/heroes';
import { HEROES } from 'src/app/mock-heroes';
import { MessageService } from 'src/app/message.service';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  heroes = HEROES;
  hero: Hero;
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  getHeroes(): void {
     
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }
}
