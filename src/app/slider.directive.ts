import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appSlider]'
})
export class SliderDirective implements OnChanges {
  @Input('appSlider') backgroundImageUrl: string;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.backgroundImageUrl) {
      const v = changes.backgroundImageUrl.currentValue;
      let background;
      if (v) {
        background = `url(${v}) no-repeat center`;
      } else {
        background = '';
      }
      this.el.nativeElement.style.background = background;
      this.el.nativeElement.style.height = '100vh';
      this.el.nativeElement.style.backgroundSize = 'cover';
    }
  }
}
