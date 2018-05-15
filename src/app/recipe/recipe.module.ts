import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [
    RecipesComponent
  ],
  declarations: [
    RecipesComponent,
    RecipeComponent,
    RecipeDetailsComponent
  ]
})
export class RecipeModule { }
