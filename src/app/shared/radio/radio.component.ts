import { Radio } from './radio.model';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: Radio[]

  value: any

  onChange: any

  registerOnTouched(fn: any){
  
  }

  writeValue(obj: any){
    this.value = obj
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  setValue(value: any){
    this.value = value
    this.onChange(this.value)
  }

  constructor() { }

  ngOnInit() {
  }

}
