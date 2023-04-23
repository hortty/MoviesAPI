import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FoundFilmDto } from '../dtos/found-film-dto';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public films$: Subject<FoundFilmDto[]> = new Subject<FoundFilmDto[]>();
  public shoppingCartMovies: FoundFilmDto[] = [];
}
