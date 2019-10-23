import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  items = [];

  addItemToCart(product){
    this.items.push(product);
  }

  clearCart(){
    this.items = [];
  }

  getItems(){
    return this.items;
  }

  providedIn: 'root';

  constructor() { }

}