import { Injectable } from '@angular/core';

import { CartItem } from './../restaurant-detail/shoping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shoping-cart/shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService) { }

  itensValue(): number{
    return this.cartService.total()
  }

carItens(): CartItem[]{
  return this.cartService.itens
}

increaseQty(item: CartItem ){
  this.cartService.increaseQty(item)
}

decreaseQty(item: CartItem ){
  this.cartService.decreaseQty(item)
}

remove(item: CartItem){
  this.cartService.removeItem(item)
}



}
