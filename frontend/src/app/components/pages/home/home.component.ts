import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  RouterLinkActive,
  ActivatedRoute,
} from '@angular/router';
import { StarRatingComponent } from '../../../shared/ui/star-rating/star-rating.component';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from "../../partials/tags/tags.component";
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        CommonModule,
        RouterModule,
        RouterLinkActive,
        StarRatingComponent,
        SearchComponent,
        TagsComponent,
        NotFoundComponent
    ]
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params['searchTerm']
        );
      else if (params['tag'])
        this.foods = this.foodService.getAllFoodsByTags(params['tag']);
      else this.foods = foodService.getAll();
    });
  }
}
