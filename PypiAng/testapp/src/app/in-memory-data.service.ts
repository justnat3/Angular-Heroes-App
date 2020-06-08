import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'src/app/heroes'

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' },
      { id: 11, name: 'Dr Nic' },
      { id: 12, name: 'Narc' },
      { id: 13, name: 'Bombast' },
      { id: 14, name: 'Celerita' },
      { id: 15, name: 'Magnet' },
      { id: 16, name: 'RubberMa' },
      { id: 17, name: 'Dynam' },
      { id: 18, name: 'Dr I' },
      { id: 19, name: 'Magm' },
      { id: 20, name: 'Tornad' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}