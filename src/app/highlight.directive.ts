import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[mysel]',
})
export class HighlightClass {
  constructor(private el: ElementRef) {}

  @HostBinding('style.backgroundColor') color = 'blue';

  @HostListener('mouseenter') onMouseEnter1() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave1() {
    this.highlight('red');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
