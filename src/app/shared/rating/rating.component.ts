import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  stars: number[]= [
    1,2,3,4,5
  ]


  @Output() rated = new EventEmitter<number>()

  mostra2: boolean = false
  mostra3: boolean = false
  mostra4: boolean = false
  mostra5: boolean = false

  start: boolean = false

  enterMouse(avaliacao){
  
    if(avaliacao === 1 && this.start === false){
      this.mostra2 = true
      this.mostra3 = true
      this.mostra4 = true
      this.mostra5 = true
    }else if(avaliacao === 2 && this.start === false){
      this.mostra3 = true
      this.mostra4 = true
      this.mostra5 = true
    }else if(avaliacao === 3 && this.start === false ){
      this.mostra4 = true
      this.mostra5 = true
    }else if(avaliacao === 4 && this.start === false){
      this.mostra5 = true
    }
  }

  leaveMouse(avaliacao){
    if(avaliacao === 1 && this.start === false){
      this.mostra2 = false
      this.mostra3 = false
      this.mostra4 = false
      this.mostra5 = false
    }else if(avaliacao === 2 && this.start === false){
      this.mostra3 = false
      this.mostra4 = false
      this.mostra5 = false
    }else if(avaliacao === 3 && this.start === false){
      this.mostra4 = false
      this.mostra5 = false
    }else if(avaliacao === 4 && this.start === false){
      this.mostra5 = false
    }
  }

  avaliar(avaliacao){
    this.start =  true
    if(avaliacao >= 1){
      return 'fa fa-star'
    }
    this.rated.emit(avaliacao)
  }

  constructor() { }

  ngOnInit() {
  }

}
