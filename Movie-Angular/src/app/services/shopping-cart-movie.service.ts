import { Injectable } from '@angular/core';
import { CreateShoppingCartMovieDto } from '../dtos/create-shopping-cart-movie-dto';
import { CreatedShoppingCartMovieDto } from '../dtos/created-shopping-cart-movie-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DeleteShoppingCartMovieDto } from '../dtos/delete-shopping-cart-movie-dto';
import { DeletedShoppingCartMovieDto } from '../dtos/deleted-shopping-cart-movie-dto';
import { UpdateShoppingCartMovieDto } from '../dtos/update-shopping-cart-movie-dto';
import { UpdatedShoppingCartMovieDto } from '../dtos/updated-shopping-cart-movie-dto';
import { FoundShoppingCartMovieDto } from '../dtos/found-shopping-cart-movie-dto';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartMovieService {

  constructor(private http: HttpClient) { }

  create(dto: CreateShoppingCartMovieDto): Observable<CreatedShoppingCartMovieDto> {
    return this.http.post<CreatedShoppingCartMovieDto>(`https://localhost:7294/ShoppingCartMovie/`, dto);
  }

  delete(dto: DeleteShoppingCartMovieDto): Observable<DeletedShoppingCartMovieDto> {
    return this.http.delete<DeletedShoppingCartMovieDto>(`https://localhost:7294/ShoppingCartMovie/${dto.id}`);
  }

  get(): Observable<FoundShoppingCartMovieDto[]> {
    return this.http.get<FoundShoppingCartMovieDto[]>(`https://localhost:7294/ShoppingCartMovie/`);
  }

  update(dto: UpdateShoppingCartMovieDto): Observable<UpdatedShoppingCartMovieDto> {
    return this.http.put<UpdatedShoppingCartMovieDto>(`https://localhost:7294/ShoppingCartMovie/${dto.id}`, dto);
  }
}

