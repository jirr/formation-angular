import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeService } from './recipe.service';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RouterModule } from '@angular/router';
import { ToArrayPipe } from './to-array.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    RecipesComponent,
  ],
  declarations: [
    RecipesComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    ToArrayPipe
  ],
  providers: [
    RecipeService
  ]
})
export class RecipeModule { }
