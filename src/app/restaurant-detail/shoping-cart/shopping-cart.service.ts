import { ContatoDataService } from './../../contato-data-service.service';
import { Injectable } from '@angular/core';
import { Item } from './../menu-item/item.model';
import { CartItem } from './cart-item.model';

@Injectable()
export class ShoppingCartService {

    itens: CartItem[]= []


    constructor(private notificationŜervice: ContatoDataService){}

    clear(){
        this.itens = []
    }

    addItem(item: Item){
        let foundItem = this.itens.find((mItem)=> mItem.menuItem.id === item.id)
        if(foundItem){
            this.increaseQty(foundItem)
        }else{
            this.itens.push(new CartItem(item))
        }
        this.notificationŜervice.notify(`Você adicionou ${item.name}`)
    }

    increaseQty(item: CartItem ){
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CartItem ){
        item.quantity = item.quantity - 1
        if(item.quantity === 0){
            this.removeItem(item)
        }
      }

    removeItem(item: CartItem){
        this.itens.splice(this.itens.indexOf(item), 1)
        this.notificationŜervice.notify(`Você removeu ${item.menuItem.name}`)
    }


    total(): number{
        return this.itens
        .map(item => item.value())
        .reduce((prev, value)=> prev + value, 0)
    }
}