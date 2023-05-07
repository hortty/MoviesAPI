import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { GetFilmDto } from '../dtos/get-film-dto';
import { FoundFilmDto } from '../dtos/found-film-dto';
import { Subject, catchError, takeUntil, throwError } from 'rxjs';
import { GlobalService } from '../services/global-service.service';
import { ShoppingCartMovieService } from '../services/shopping-cart-movie.service';
import { CreateShoppingCartMovieDto } from '../dtos/create-shopping-cart-movie-dto';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  filmes: FoundFilmDto[] = [];
  imagemSrc: string[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private filmService: FilmService, private globalService: GlobalService, private shoppingCartMovieService: ShoppingCartMovieService) {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.globalService.films$.pipe(takeUntil(this.destroy$)).subscribe(films => {
      this.changeValues(films);
    });

    this.filmService.getAll().pipe(
      catchError((erro: any) => {
        console.error('Ocorreu um erro:', erro);
        return throwError(erro);
      })
    ).subscribe(filmes => {
      this.changeValues(filmes);
    });
  }

  changeValues(films: FoundFilmDto[]): void {
    this.filmes = films;
    this.imagemSrc = [];

    this.filmes.forEach((filme, index) => {
      if(filme.imagem.length > 0)
        this.imagemSrc[index] = `data:image/jpeg;base64,${filme.imagem}`
    })
  }

  comprar(film: FoundFilmDto): void {

    // if better implemented, shoppingCartId would have relation with ShoppingCart, that would have an user's id
    const shoppingCartMovieDto: CreateShoppingCartMovieDto = {
      amount: 1,
      shoppingCartId: 1,
      filmId: film.id,
      price: film.price,
      name: film.name
    }

    this.shoppingCartMovieService.create(shoppingCartMovieDto).subscribe(created => console.log(created));
  }
}
