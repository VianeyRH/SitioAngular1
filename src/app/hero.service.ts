import { Injectable } from '@angular/core'; 

import { Observable, of } from 'rxjs'; 

import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
@Injectable({
  providedIn: 'root',
})

/*
Antes de la modificación de getHeroes
export class HeroService {

  constructor() { }

}*/

export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  constructor(private messageService: MessageService) { }
}
