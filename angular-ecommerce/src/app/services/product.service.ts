import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../common/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private baseUrl = 'http://localhost:8080/api/products';
  private baseUrl = 'http://devnath.ddns.net:2230/api/products';

  constructor(private httpClient: HttpClient) {
  }

  getProductList(prodCategoryId: number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${prodCategoryId}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
