import { Injectable } from '@angular/core';
import { CreateCustomerDto } from '../dtos/create-customer-dto';
import { CreatedCustomerDto } from '../dtos/created-customer-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  createAccount(dto: CreateCustomerDto): Observable<CreatedCustomerDto> {
    return this.http.post<CreatedCustomerDto>(`https://localhost:7294/Customer/`, dto);
  }

}
