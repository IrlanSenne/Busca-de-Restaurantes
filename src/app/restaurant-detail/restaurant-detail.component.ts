import { Restaurant } from '../restaurant/restaurant.model';


import { Observable } from 'rxjs';
import { Component,  OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { ContatoDataService } from './../contato-data-service.service';



@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restTeste: any
  restTeste$: Observable<Restaurant[]>  

  constructor(    
              private route: ActivatedRoute,
              private contatoDataService: ContatoDataService,             
              ) { }
                            
          
  ngOnInit() {
this.restTeste = this.contatoDataService.listarId( this.route.snapshot.paramMap.get('id'))

 
}
}