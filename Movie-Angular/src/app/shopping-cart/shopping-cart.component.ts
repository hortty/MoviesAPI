import { Component, OnInit } from '@angular/core';
import { ShoppingCartMovieService } from '../services/shopping-cart-movie.service';
import { GlobalService } from '../services/global-service.service';

interface CartItem {
  name: string;
  price: number;
  id?: number;
  description?: string;
  amount?: number;
  imagem?: string;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem[] = [
    { name: 'Produto 1', price: 10, amount: 2 },
    { name: 'Produto 2', price: 5, amount: 1 },
    { name: 'Produto 3', price: 10.99, amount: 3 }
  ];

  constructor(private shoppingCartMovieService: ShoppingCartMovieService, private globalService: GlobalService) { }

  ngOnInit(): void {
    if(this.globalService.shoppingCartMovies.length > 0) {
      this.cartItems = [...this.globalService.shoppingCartMovies];
      this.cartItems.map( x => {x.amount = 1})
    }
    console.log(this.cartItems);
  }


  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.amount), 0);
  }

  clearCart(): void {
    this.cartItems = [];
    this.globalService.shoppingCartMovies = [];
  }

  checkout(): void {
    console.log("Compra finalizada!");
  }
}
