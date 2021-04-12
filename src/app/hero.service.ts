import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';



@Injectable({

  providedIn: 'root',

})

export class HeroService {



  getHeroes(): Observable<Hero[]> {

    const heroes = of(HEROES);

    this.messageService.add('HeroService: fetched heroes');

    return heroes;

  }

  constructor(private messageService: MessageService) { }

}
