import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { recipes } from './recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  recipes: Recipe[] = recipes;

  ngOnInit(): void {

    // //Recipe1
    // let recipe1 = new Recipe();
    // recipe1.name = "Ginto";
    // recipe1.description = 'Le cocktail préféré d\'Admandine';
    //
    // //Recipe2
    // let recipe2 = new Recipe();
    // recipe2.name = "JagerBomb";
    // recipe2.description = 'Le cocktail préféré de Jiji';
    //
    // //Recipe3
    // let recipe3 = new Recipe();
    // recipe3.name = "Moscow mule";
    // recipe3.description = 'Le cocktail préféré de Biboui';
    //
    // this.recipes.push(recipe1);
    // this.recipes.push(recipe2);
    // this.recipes.push(recipe3);

  }

}
