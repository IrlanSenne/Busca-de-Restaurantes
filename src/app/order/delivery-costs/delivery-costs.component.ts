import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {

  @Input() delivery: number
  @Input() itensValue: number

  constructor() { }

  ngOnInit() {
  }

  total(): number{
    return this.delivery + this.itensValue
  }

}
