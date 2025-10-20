import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from '../models/customers-models';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private http: HttpClient
  ) { }

  api = 'http://localhost:3000/customers';

  getCustomers(): Observable<Customers[]> {
    return this.http.get<Customers[]>(this.api);
  }

  addCustomers(customers: Customers): Observable<Customers> {
    return this.http.post<Customers>(this.api, customers);
  }

  editCustomers(customers: Customers, id): Observable<Customers> {
    return this.http.patch<Customers>(`${this.api}/${id}`, customers);
  }

}
