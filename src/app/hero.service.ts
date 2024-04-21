import { Injectable } from '@angular/core';
import { KaInterface } from './kenthapodi';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<KaInterface[]> {
    const heroes = of(Heroes);
    this.messageService.add('Heroservice: Fetched Heroes');
    return heroes;
  }
}
