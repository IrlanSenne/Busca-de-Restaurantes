import { Item } from './../menu-item/item.model';


export class CartItem{
    constructor(public menuItem : Item,
                public quantity: number = 1){ }

                value(): number{
                    return this.menuItem.price * this.quantity
                }
       
}