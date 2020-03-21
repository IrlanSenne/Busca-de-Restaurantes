import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

import { Injectable, EventEmitter } from '@angular/core';
import { Order } from './order/order.model';


@Injectable({
  providedIn: 'root'
})
export class ContatoDataService {

  notifier = new EventEmitter<string>()


  notify(message:string){
    this.notifier.emit(message)
  }

  
listarId(key){
return this.dbRefObject.list(`restaurant${key}`).snapshotChanges()
  .pipe(
    map( changes => {
      return changes.map( c=> ({ key: c.payload.key, ...c.payload.val() }))
    })
  )
}

listarRestaurants(){
  return this.dbRefObject.list(`restaurants`).snapshotChanges()
    .pipe(
      map( changes => {
        return changes.map( c=> ({ key: c.payload.key, ...c.payload.val() }))
        
      })
    )
  }

listarMenu(id){
  return this.dbRefObject.list(`menu${id}`).snapshotChanges()
  .pipe(
    map( changes => {
      return changes.map( c=> ({ key: c.payload.key, ...c.payload.val() }))
    })
  )
}

listarReviews(id){
  return this.dbRefObject.list(`reviews${id}`).snapshotChanges()
  .pipe(
    map( changes => {
      return changes.map( c=> ({ key: c.payload.key, ...c.payload.val() }))
    })
  )
}

enviarPedido(pedido: Order){
  this.dbRefObject.list('orders').push(pedido)
  .then( ( result: any ) => {
    console.log(result.key)
  })
}


  constructor(  private dbRefObject : AngularFireDatabase) { }
}
