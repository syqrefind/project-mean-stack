import { Directive, Renderer2, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStickyHeader]'
})
export class StickyHeaderDirective {
  @Input() public topOffset = 190;
  @Input() isContent = false;

  @HostListener('window:scroll', ['$event'])
  public windowScrolled($event) {
    if (this.isContent) {
      this.windowScrollEventContent($event);
    } else {
      this.windowScrollEvent($event);
    }
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  windowScrollEventContent(event) {
    const isReachingTop = this.getTop() > this.topOffset;

    if (isReachingTop) {
      this.renderer.setStyle(this.el.nativeElement, 'margin-top', '40px');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'margin-top', 'initial');
    }
  }

  windowScrollEvent($event) {
    const isReachingTop = this.getTop() > this.topOffset;
    if (isReachingTop) {
      this.renderer.setStyle(this.el.nativeElement, 'position', 'fixed');
      this.renderer.setStyle(this.el.nativeElement, 'top', '0');
      this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
      this.renderer.setStyle(this.el.nativeElement.children[0], 'padding-left', '75%');
      this.renderer.setStyle(this.el.nativeElement.children[1], 'padding-left', '225%');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
      this.renderer.setStyle(this.el.nativeElement.children[0], 'padding-left', '0');
      this.renderer.setStyle(this.el.nativeElement.children[1], 'padding-left', '0');
    }
    // console.log('children:' + this.el.nativeElement.children[2]);  // children[0] and children[1] are the two <th>
    // console.log('parentNode:' + this.el.nativeElement.parentNode);
  }

  getTop() {
    return (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    );
  }
}
