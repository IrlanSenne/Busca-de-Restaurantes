import { ContatoDataService } from './../contato-data-service.service';


import { CartItem } from './../restaurant-detail/shoping-cart/cart-item.model';
import { OrderService } from './order.service';
import { Radio } from './../shared/radio/radio.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Order, OrderItem } from './order.model';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  numberPattern = /^[0-9]*$/

  orderForm: FormGroup

  emailPattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  mostrar: boolean = false

  options: Radio[]=[
    {label:'Dinheiro', value: 'MON'},
    {label:'Cartão de Crédito', value: 'DEB'},
    {label:'Cartão Refeição', value: 'REF'}
  ]

  constructor(private orderService: OrderService,
              private contatoService : ContatoDataService,
              private route: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name:  this.formBuilder.control('', [Validators.required, Validators.minLength(5) ]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern) ]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern) ]),
      adress: this.formBuilder.control('', [Validators.required, Validators.minLength(5) ]),
      number: this.formBuilder.control('',[Validators.required, Validators.pattern(this.numberPattern) ]),
      optional:this.formBuilder.control(''),
      paymentOptions: this.formBuilder.control('',[Validators.required])
    }, {validator: OrderComponent.equalsTo})
  }

  static equalsTo(group:  AbstractControl): {[key: string]: boolean}{
      const email = group.get('email')
      const emailConfirmation = group.get('emailConfirmation')
      if(!email || !emailConfirmation){
        return undefined
      }

      if(email.value !== emailConfirmation.value){
        return {emailsNotMatch: true}
        
      
      }
      return undefined
  }

  itensValue(): number{
    return this.orderService.itensValue()
  }

  carItens(): CartItem[]{
      return this.orderService.carItens()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  checkOrder(order: Order){
    order.orderItem = this.carItens().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.name))
    this.contatoService.enviarPedido(order)
    this.route.navigate(['/sumary'])
      console.log(order)
  }
}
