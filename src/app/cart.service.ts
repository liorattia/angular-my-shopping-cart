import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class CartService {

  items = [];

  addItemToCart(product){
    this.items.push(product);
  }

  clearCart(){
    this.items = [];
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  getItems(){
    return this.items;
  }

  providedIn: 'root';

  constructor(private http: HttpClient) { }

}