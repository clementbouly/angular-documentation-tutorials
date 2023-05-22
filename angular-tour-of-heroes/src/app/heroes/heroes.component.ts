import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = [];
  $heroes?: Observable<Hero[]>;
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    // this.$heroes = this.heroService.getHeroes();
  }

  add(name: string): void {
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      if (hero) {
        this.heroes.push(hero);
      }
    });
  }

  delete(hero: Hero, event: Event): void {
    event.stopPropagation();
    this.heroService.deleteHero(hero).subscribe(() => {
      this.heroes = this.heroes.filter((h) => h !== hero);
    });
  }
}
