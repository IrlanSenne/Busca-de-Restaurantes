import { ContatoDataService } from './../contato-data-service.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Restaurant } from '../restaurant/restaurant.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Observable<any>
  restaurants$: Observable<Restaurant[]>
  restTeste: any
  restTeste$: Observable<Restaurant[]>
  key:any



@ViewChild('object', { static: true}) object: ElementRef


  constructor(private listarRestaurants : ContatoDataService
            
    ) {
  
     }




  ngOnInit() {
    
     this.restTeste = this.listarRestaurants.listarRestaurants()




  }
}
