import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFilmDto } from '../dtos/get-film-dto';
import { FoundFilmDto } from '../dtos/found-film-dto';
import { CreatedFilmDto } from '../dtos/created-film-dto';
import { CreateFilmDto } from '../dtos/create-film-dto';
import { UpdateFilmDto } from '../dtos/update-film-dto';
import { DeleteFilmDto } from '../dtos/delete-film-dto';
import { DeletedFilmDto } from '../dtos/deleted-film-dto';
import { UpdatedFilmDto } from '../dtos/updated-film-dto';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getById(dto: GetFilmDto): Observable<FoundFilmDto> {
    return this.http.get<FoundFilmDto>(`https://localhost:7294/Film/${dto.id}`);
  }

  getByName(dto: GetFilmDto): Observable<FoundFilmDto[]> {

  const dtoJSON = JSON.parse(JSON.stringify(dto));

  const params = new HttpParams({
    fromObject: dtoJSON,
  });

    return this.http.get<FoundFilmDto[]>(`https://localhost:7294/Film/Name/`, {params});
  }

  getAll(): Observable<FoundFilmDto[]> {
    return this.http.get<FoundFilmDto[]>(`https://localhost:7294/Film/`);
  }

  update(dto: UpdateFilmDto): Observable<UpdatedFilmDto> {
    return this.http.put<UpdatedFilmDto>(`https://localhost:7294/Film/${dto.id}`, dto);
  }

  delete(dto: DeleteFilmDto): Observable<DeletedFilmDto> {
    return this.http.delete<DeletedFilmDto>(`https://localhost:7294/Film/${dto.id}`);
  }

  // create(dto: CreateFilmDto): Observable<any> {
  //   return this.http.post<CreatedFilmDto>(`https://localhost:7294/Film/`, dto);
  // }
}
