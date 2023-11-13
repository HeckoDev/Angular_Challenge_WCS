import {Component, OnInit} from '@angular/core';
import {CocktailService} from "../cocktail.service";

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit{
  cocktail: any[] = [];

  constructor(private cocktailService: CocktailService) {  }

  ngOnInit() {
    this.cocktail = this.cocktailService.getCocktail()
  }
}
