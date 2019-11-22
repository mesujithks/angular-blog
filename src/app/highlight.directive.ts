import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color = 'text-danger';

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  @HostListener('mouseenter')
  addHighlight() {
   this.renderer.addClass(this.element.nativeElement, this.color);
  }

  @HostListener('mouseleave')
  removeHighlight() {
    this.renderer.removeClass(this.element.nativeElement, this.color);
  }

}
