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
    // @TODO: need to build URL based on category id ... will come back to this !!
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
