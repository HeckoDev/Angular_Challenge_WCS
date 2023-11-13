import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public getCocktail() {
    return [{
      nom: 'Mojito',
      prix: 8.99,
      image: 'mojito.jpg',
    },];
  }
  constructor() { }
}
