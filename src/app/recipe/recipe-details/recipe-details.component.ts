import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Recipe } from '../recipe.model';
import { recipes } from '../../recipes';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})

export class RecipeDetailsComponent implements OnInit {

  id: number;
  recipe: Recipe;
  recipes: Recipe[] = recipes;

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.recipe = this.recipes.find(recipe => recipe.id === this.id);
  }

}
