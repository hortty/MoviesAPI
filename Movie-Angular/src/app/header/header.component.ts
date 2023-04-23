import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { FilmService } from '../services/film.service';
import { GetFilmDto } from '../dtos/get-film-dto';
import { GlobalService } from '../services/global-service.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  movieName: FormControl = new FormControl();

  constructor(private filmService: FilmService, private globalService: GlobalService) {}

  ngOnInit(): void {
    this.movieName.valueChanges.pipe(debounceTime(200)).subscribe(name => {
      const getFilmDto: GetFilmDto = {name: name};

      if(getFilmDto.name.length > 0)
        this.filmService.getByName(getFilmDto).subscribe(films => this.globalService.films$.next(films));
      else
        this.filmService.getAll().subscribe(films => this.globalService.films$.next(films));
    });
  }
}
