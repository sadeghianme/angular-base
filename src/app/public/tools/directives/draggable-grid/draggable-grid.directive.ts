import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDraggableGrid]'
})
export class DraggableGridDirective {
  topStart = 0;
  leftStart = 0;
  _allowDrag = true;
  md: boolean;
  box: any;

  @Input('appDraggableGrid')
  set allowDrag(value: any) {
    this.box = this.element.nativeElement.parentNode;
    this._allowDrag = value;
    if (this._allowDrag) {
      this.box.className += ' cursor-draggable';
    } else {
      this.box.className = this.box.className
        .replace(' cursor-draggable', '');
    }
  }
  constructor(public element: ElementRef) {
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.button === 2) {
      return; // prevents right click drag, remove his if you don't want it
    }
    this.md = true;
    this.topStart = event.clientY - this.box.style.top.replace('px', '');
    this.leftStart = event.clientX - this.box.style.left.replace('px', '');
  }

  @HostListener('document:mouseup')
  onMouseUp(event: MouseEvent) {
    this.md = false;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.md && this._allowDrag) {
      this.box.style.top = (event.clientY - this.topStart) + 'px';
      this.box.style.left = (event.clientX - this.leftStart) + 'px';
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event) {
    this.md = true;
    this.topStart = event.changedTouches[0].clientY - this.box.style.top.replace('px', '');
    this.leftStart = event.changedTouches[0].clientX - this.box.style.left.replace('px', '');
    event.stopPropagation();
  }

  @HostListener('document:touchend')
  onTouchEnd() {
    this.md = false;
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(event) {
    if (this.md && this._allowDrag) {
      this.box.style.top = (event.changedTouches[0].clientY - this.topStart) + 'px';
      this.box.style.left = (event.changedTouches[0].clientX - this.leftStart) + 'px';
    }
    event.stopPropagation();
  }

}
