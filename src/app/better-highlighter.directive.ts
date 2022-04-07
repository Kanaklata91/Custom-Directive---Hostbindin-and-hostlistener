import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[sel]',
})
export class BetterHighlighter implements OnInit {
  constructor(private el: ElementRef) {}
  @Input() defautcolor: string = 'red';
  @Input() modifiedcolor: string = 'blue';

  @HostBinding('style.backgroundColor') color: string;

  @HostListener('mouseenter') mouseenter1() {
    this.color = this.defautcolor;
  }

  @HostListener('mouseleave') mouseenter2() {
    this.color = this.modifiedcolor;
  }

  ngOnInit() {
    //  this.color = 'grey';
  }
}
