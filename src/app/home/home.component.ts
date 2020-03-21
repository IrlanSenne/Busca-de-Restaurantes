import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { trigger, style, transition, animate, state, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { 
      interval: 1500, noPause: true, showIndicators: true 
    } }
  ],
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('950ms 0s ease-in', 
      keyframes([
        style({opacity: 0, transform: 'translateX(-50px)', offset:0}),
        style({opacity: 0.5, transform: 'translateX(70px)', offset:0.4}),
        style({opacity: 0.8, transform: 'translateX(-30px)', offset:0.8}),
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
export class HomeComponent implements OnInit {

  rowState = 'ready'

  constructor() { }

  ngOnInit() {
  }

}
