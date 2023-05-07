import { Component, OnInit } from '@angular/core';
import { ShoppingCartMovieService } from '../services/shopping-cart-movie.service';
import { GlobalService } from '../services/global-service.service';
import { FoundShoppingCartMovieDto } from '../dtos/found-shopping-cart-movie-dto';
import { UpdateShoppingCartMovieDto } from '../dtos/update-shopping-cart-movie-dto';
import { DeleteShoppingCartMovieDto } from '../dtos/delete-shopping-cart-movie-dto';

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

  cartItems: FoundShoppingCartMovieDto[] = [];
  loading: boolean = true;

  constructor(private shoppingCartMovieService: ShoppingCartMovieService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.loading = true;

    this.shoppingCartMovieService.get().subscribe(items => {
      this.cartItems = items;
      console.log(this.cartItems);
    }, (error) => this.loading = false, () => this.loading = false);

  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.amount), 0);
  }

  clearCart(): void {
    this.cartItems = [];
  }

  checkout(): void {
    console.log("Compra finalizada!");
  }

  addItem(item: FoundShoppingCartMovieDto): void {
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    item.amount++;

    const updateShoppingCartMovieDto: UpdateShoppingCartMovieDto = {...item};

    this.shoppingCartMovieService.update(updateShoppingCartMovieDto).subscribe(updatedItem => {
      this.cartItems[index] = updatedItem;
      console.log(updatedItem);
    }, (error) => this.loading = false, () => this.loading = false);
  }

  deleteItem(id: number): void {

    const index = this.cartItems.findIndex(cartItem => cartItem.id === id);

    const deleteShoppingCartMovieDto: DeleteShoppingCartMovieDto = {id: id};

    this.shoppingCartMovieService.delete(deleteShoppingCartMovieDto).subscribe(deletedItem => {
      this.cartItems.splice(index, 1);
      console.log(deletedItem);
    }, (error) => this.loading = false, () => this.loading = false);

  }

}
