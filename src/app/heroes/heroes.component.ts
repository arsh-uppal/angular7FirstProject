import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  
  ngOnInit() { 
    this.getHeroes();
  }

  hero:Hero= {
    id:1, 
    name: 'Windstorm'
  };
  
  heroes: Hero[];
  
  selectedH:Hero;
  onSelect(hero:Hero) : void {
    this.selectedH=hero;
    console.log(this.heroes);
  };

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(herooes => this.heroes = herooes);
  }
}
