import { Item } from './../menu-item/item.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ContatoDataService } from './../../contato-data-service.service';
import { trigger, style, transition, animate, state, keyframes } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations:[
    trigger('cartAppeared', [
      state('ready2', style({opacity: 1})),
      transition('void => ready2', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {

  cartState = 'ready2'

  menu: any

  constructor(    
    private route: ActivatedRoute,
    private contatoDataService: ContatoDataService,             
    ) { }

    addMenuItem(item: Item){
      console.log(item)
    }

  ngOnInit() {
    this.menu = this.contatoDataService.listarMenu(
      this.route.parent.snapshot.params['id']
      )
  }

}
