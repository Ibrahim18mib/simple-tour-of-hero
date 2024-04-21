import { Component, OnInit } from '@angular/core';
import { KaInterface } from '../kenthapodi';
import { HeroService } from '../hero.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { KenthapodiDetailComponent } from '../kenthapodi-detail/kenthapodi-detail.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-kenthapodi',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, UpperCasePipe, KenthapodiDetailComponent],
  templateUrl: './kenthapodi.component.html',
  styleUrl: './kenthapodi.component.scss',
})
export class KenthapodiComponent implements OnInit {
  heroes: KaInterface[] = [];
  selectedHero: KaInterface = { name: '', id: 0 };

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    console.log('this is gettting heroes', this.heroes);
  }

  onSelect(hero: KaInterface): void {
    console.log('heroes selestced', hero);
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
