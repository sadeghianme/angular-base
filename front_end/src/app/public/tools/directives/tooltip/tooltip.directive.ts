import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Renderer
} from '@angular/core';
@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input() appTooltip: any = {text: '', placement: 'top', width: 100};
  id = Math.random();

  constructor(
    private _renderer: Renderer,
    private elementRef: ElementRef) {
  }

  @HostListener('mouseenter')  onMouseEnter(): void {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.hideTooltip();
  }

  showTooltip() {
    if (!this.appTooltip.text)  { return; }
    const parent = this.elementRef.nativeElement;
    if (getComputedStyle(this.elementRef.nativeElement).position !== 'absolute') {
      this._renderer.setElementStyle(parent, 'position', 'relative');
    }
    const divElement = this._renderer.createElement(parent, 'div');
    this.setStyle(divElement, getComputedStyle(this.elementRef.nativeElement).width);
  }

  hideTooltip() {
    if (document.getElementById(this.id.toString())) {
      const parent = document.getElementById(this.id.toString()).parentNode;
      parent.parentNode.removeChild(parent);
    }
  }

  setStyle(divElement, width) {
    const left = width ? width.indexOf('px') ? Number(width.split('px')[0]) < 100 ? -width.split('px')[0] / 2 : 0 : -50 : -50;
    let right, top, bottom: any;
    if (width && width.indexOf('px') && Number(width.split('px')[0]) > 100) {
      right = -10;
      top = 20;
      bottom = '';
    } else {
      right = width && width.indexOf('px') && Number(width.split('px')[0]) > 100 ? -18 : -18 * (this.appTooltip.width / Number(width.split('px')[0]));
      top = 0;
      bottom = 0;
    }
    console.log(left, top, width, bottom, right)
    let direction = '';
    const display = 'flex';
    const justify = 'center';
    if (/^[a-zA-Z0-9.@_%#$&*+^\-]+$/.test(this.appTooltip.text[0])) {
      direction = 'ltr';
    } else {
      direction = 'rtl';
    }
    switch (this.appTooltip.placement) {
        case 'top':
        divElement.innerHTML  = `<span id="${this.id}" class="tooltip"
           style="bottom:100%;left:${left}px;right:${right}px;display:${display};direction:${direction};justify-content:${justify}" >
            ${this.appTooltip.text}</span>`;
        break;
      case 'left':
        divElement.innerHTML  = `<span id="${this.id}" class="tooltip"
           style="top:${top}px;right:100%;bottom:${bottom}px;display:${display};direction:${direction};justify-content:${justify}">
            ${this.appTooltip.text}</span>`;
        break;
      case 'bottom':
        divElement.innerHTML  = `<span id="${this.id}" class="tooltip"
           style="width:${this.appTooltip.width}px;top:100%;left:${left}px;right:${right}px;display:${display};direction:${direction};justify-content:${justify}">
            ${this.appTooltip.text}</span>`;
        break;
      case 'right':
        divElement.innerHTML  = `<span id="${this.id}" class="tooltip"
           style="width:${this.appTooltip.width}px;top:${top}px;left:100%;bottom:${bottom}px;display:${display};direction:${direction};justify-content:${justify}">
            ${this.appTooltip.text}</span>`;
        break;
    }
  }
}

