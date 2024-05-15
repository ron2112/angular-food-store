import { Component } from '@angular/core';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  cartQuantity = 0;
  constructor(cartService: CartService){
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity=newCart.totalCount;
    })
  }
}
