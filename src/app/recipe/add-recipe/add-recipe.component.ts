import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  recipe: Recipe = new Recipe();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.recipeService.addRecipe(this.recipe);
  }

}
