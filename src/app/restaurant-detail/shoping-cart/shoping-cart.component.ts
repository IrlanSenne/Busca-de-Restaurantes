import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from './shopping-cart.service';
import { trigger, style, transition, animate, state, keyframes } from '@angular/animations';

@Component({
  selector: 'mt-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css'],
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('300ms 0s ease-in', 
      keyframes([
        style({opacity: 0, transform: 'translateX(-30px)', offset:0}),
        style({opacity: 0.8, transform: 'translateX(10px)', offset:0.8}),
        style({opacity: 1, transform: 'translateX(0px)', offset:1}),
      ]))),
      transition('ready => void', animate('700ms 0s ease-out', 
      keyframes([
        style({opacity: 1, transform: 'translateX(0px)', offset:0}),
        style({opacity: 0.8, transform: 'translateX(-10px)', offset:0.2}),
        style({opacity: 0, transform: 'translateX(30px)', offset:1}),
      ])))
    ])
   
  ]
})
export class ShopingCartComponent implements OnInit {

  

  rowState = 'ready'

  constructor(private shoppingCartService :ShoppingCartService) { }

  ngOnInit() {
  }

  clear(){
    this.shoppingCartService.clear()
  }
  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

  itens(): any{
    return this.shoppingCartService.itens
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }

  total():number{
    return this.shoppingCartService.total()
  }

}
