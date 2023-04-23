import { Injectable } from '@angular/core';
import { CreateShoppingCartMovieDto } from '../dtos/create-shopping-cart-movie-dto copy 2';
import { CreatedShoppingCartMovieDto } from '../dtos/created-shopping-cart-movie-dto copy';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DeleteShoppingCartMovieDto } from '../dtos/delete-shopping-cart-movie-dto copy';
import { DeletedShoppingCartMovieDto } from '../dtos/deleted-shopping-cart-movie-dto';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartMovieService {

  constructor(private http: HttpClient) { }

  create(dto: CreateShoppingCartMovieDto): Observable<CreatedShoppingCartMovieDto> {
    return this.http.get<CreatedShoppingCartMovieDto>(`https://localhost:7294/User/${dto}`);
  }

  delete(dto: DeleteShoppingCartMovieDto): Observable<DeletedShoppingCartMovieDto> {
    return this.http.get<DeletedShoppingCartMovieDto>(`https://localhost:7294/User/${dto}`);
  }
}
