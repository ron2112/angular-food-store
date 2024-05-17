import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router, RouterLinkActive, RouterModule } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { StarRatingComponent } from "../../../shared/ui/star-rating/star-rating.component";
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
    selector: 'app-food-page',
    standalone: true,
    templateUrl: './food-page.component.html',
    styleUrl: './food-page.component.css',
    imports: [StarRatingComponent, CommonModule, RouterLinkActive, RouterModule, NotFoundComponent]
})
export class FoodPageComponent {
  food!: Food;
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService, private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) foodService.getFoodById(params['id']).subscribe(serverFood => {
        this.food = serverFood;
      });
    });
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
