import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  recipeGroup: FormGroup;

  constructor(private recipeService: RecipeService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.recipeGroup = this.formBuilder.group({
      name: ["", Validators.required],
      picture: "",
      description: "",
      instructions: ""
    })
  }

  onSubmit() {
    let value = this.recipeGroup.value;
    let recipe: Recipe = {
      id: 0,
      name: value.name,
      picture: value.picture,
      description: value.description,
      ingredients: [],
      instructions: value.instructions
    };
    this.recipeService.addRecipe(recipe);
  }

}
