import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetUserDto } from '../dtos/get-user-dto';
import { FoundUserDto } from '../dtos/found-user-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(dto: GetUserDto): Observable<FoundUserDto> {
    return this.http.get<FoundUserDto>(`https://localhost:7294/User/${dto.id}`);
  }

}
