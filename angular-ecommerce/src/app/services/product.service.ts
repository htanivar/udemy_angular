import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://192.168.1.3:/8080/api/products';

  constructor() { }
}
