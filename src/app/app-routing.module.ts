import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';

const routes: Routes = [
    {
        path: 'recipes',
        component: RecipesComponent,
        pathMatch: 'full'
    },
    {
        path: 'recipes/:id',
        component: RecipeDetailsComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'recipes',
        pathMatch: 'full'
    }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
