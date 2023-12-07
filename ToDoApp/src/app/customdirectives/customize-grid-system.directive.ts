import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { EditDataService } from '../Services/EditData.service';

@Directive({
  selector: '[CustomizeGridSystem]'
})
export class CustomizeGridSystem {

  constructor(private element:ElementRef,private renderer:Renderer2,private editData:EditDataService ) { }
  if (editData) {

  }
}
