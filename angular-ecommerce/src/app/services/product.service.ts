import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://192.168.1.3:/8080/api/products';

  constructor(private httpClient: HttpClient) { }
}

interface GetResponse{
  _embedded:{
    products: Product[];
  }
}
