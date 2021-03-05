import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = 'product';

  constructor(private httpClient: HttpClient) {
  }

  // Read
  getProductsList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL);
  }

  // Create
  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseURL, product);
  }

//  Update
  public updateProduct(id: number, newProduct: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.baseURL + '/' + id,  newProduct);
  }

//  Delete
  public deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.baseURL + '/' + id);
  }

  public getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.baseURL + '/' + id);
  }

}
