import { Injectable } from '@angular/core';
import {IProduct} from "./catalogue/product/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: IProduct[] = [];

  constructor() { }

  add(product: IProduct) {
    this.cart.push(product);
    console.log("added to cart:" + product.name);
  }
}
