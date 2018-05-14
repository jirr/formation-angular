import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

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

}
