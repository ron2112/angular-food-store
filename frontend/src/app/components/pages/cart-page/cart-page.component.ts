import { Component } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';
import { TitleComponent } from "../../partials/title/title.component";
import { CommonModule, NgFor } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
    selector: 'app-cart-page',
    standalone: true,
    templateUrl: './cart-page.component.html',
    styleUrl: './cart-page.component.css',
    imports: [TitleComponent, CommonModule, RouterLinkActive, RouterModule, NotFoundComponent]
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem, quanityInString:string){
    const quantity = parseInt(quanityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
  }
}
