import { Router } from '@angular/router';
import { Restaurant } from './../restaurant/restaurant.model';
import { Observable } from 'rxjs';
import { ContatoDataService } from './../contato-data-service.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchForm : FormGroup
  searchControl: FormControl
  restTeste: string[]=[
    'Bread & Bakery',
    'Burguer House',
    'Coffe Corner',
    'Green Food',
    'Ice Cream',
    'Tasty treats'
  ]
  restTeste2: any

pesquisar(nome){
  if(nome === 'Bread & Bakery'){
    this.route.navigate(['/restaurants/0'])
  }else if(nome == 'Burguer House'){
    this.route.navigate(['/restaurants/1'])
  }else if(nome == 'Coffe Corner'){
    this.route.navigate(['/restaurants/2'])
  }else if(nome == 'Green Food'){
    this.route.navigate(['/restaurants/3'])
  }else if(nome == 'Ice Cream'){
    this.route.navigate(['/restaurants/4'])
  }else if(nome == 'Tasty treats'){
    this.route.navigate(['/restaurants/5'])
  }
 
}

  constructor(private fb: FormBuilder,
    private listarRestaurants: ContatoDataService,
    private route: Router) { }

   
  ngOnInit() {


    this.searchControl = this.fb.control('')
       
    this.searchForm = this.fb.group({
      searchControl: ''
    })

  }

}
