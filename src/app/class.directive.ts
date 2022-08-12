import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  @Input() set bgColor(color: string){

    this.elementRef.nativeElement.style.backgroundColor= color;
  }

  // @HostBinding('style.backgroundColor') bgColor: string = '';

  constructor(private elementRef: ElementRef, private rendere: Renderer2) {

    // this.rendere.setStyle(elementRef.nativeElement, 'backgroundColor', 'red');
   }

  //  @HostListener("mouseenter") onMouseOver() {
  //   // this.rendere.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
  //   this.bgColor= 'red';
  //  }
  //  @HostListener("mouseleave") onMouseOut() {
  //   // this.rendere.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
  //   this.bgColor= 'transparent';
  //  }

}
