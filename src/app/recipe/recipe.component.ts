import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Output } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe;
  isExpanded: Boolean;
  seeText: String = "See more";
  @Output()
  delete = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
  }

  toggleExpand() {
     this.isExpanded = !this.isExpanded;
     if (this.isExpanded) {
       this.seeText = "See less";
     } else {
       this.seeText = "See more";
     }
  }

  deleteRecipe(): void {
    this.recipeService.deleteRecipe(this.recipe.id)
                      .subscribe(
                        () => this.delete.emit(this.recipe),
                        error => console.log(error)
                      );
  }

}
