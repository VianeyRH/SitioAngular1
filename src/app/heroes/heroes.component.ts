import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero ={
    id: 1,
    name: 'DeadPool',
    edad: 30,
    tippoder: 'Pelea cuerpo a cuerpo inmortalidad y regeneración',
    identidad: 'Wade Winston Wilson',
    universo: 'Marvel'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
