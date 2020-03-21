import { ActivatedRoute } from '@angular/router';
import { ContatoDataService } from './../../contato-data-service.service';
import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  animations:[
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class ReviewsComponent implements OnInit {

  menuItemState = 'ready'
  menuItemState2 = 'ready2'

  reviews: any

  constructor(    
    private route: ActivatedRoute,
    private contatoDataService: ContatoDataService,             
    ) { }

    getImage(rating){
      if(rating < 3){
        return "assets/img/reactions/pissed.png"
      }else if(rating >= 3 && rating <=4){
        return "assets/img/reactions/soso.png"
      }else{
        return "assets/img/reactions/loved.png"
      }
    }

  ngOnInit() {

    this.reviews = this.contatoDataService.listarReviews(this.route.parent.snapshot.params['id'])
  }

}
