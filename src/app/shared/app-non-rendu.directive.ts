import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAppNonRendu]'
})
export class AppNonRenduDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = "red";
    el.nativeElement.style.border = "2px dashed orange";
  }

}
