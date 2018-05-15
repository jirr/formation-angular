import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecipeService {

  private baseUrl = 'http://10.0.1.88:8080/api/v1';

  constructor(private http : HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl + '/recipes');
  }

  getRecipesById(id): Observable<Recipe> {
    return this.http.get<Recipe>(this.baseUrl + '/recipes/'+ id);
  }

  postRecipe(recipe: Recipe): void {
    this.http.post(this.baseUrl + '/recipes', recipe)
              .subscribe(() => {}, error => console.log(error));
  }
}
