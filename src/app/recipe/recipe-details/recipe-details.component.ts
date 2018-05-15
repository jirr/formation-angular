import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})

export class RecipeDetailsComponent implements OnInit {

  id: number;
  recipe: Recipe;

  constructor(private route:ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipesById(this.id)
                      .subscribe(
                        recipe => this.recipe = recipe,
                        error => console.error('Oups')
                      );
  }

}
