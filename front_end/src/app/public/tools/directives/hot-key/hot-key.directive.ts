import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHotKey]'
})
export class HotKeyDirective {

  @Input() callFun = () => {};
  constructor() { }
  @HostListener('keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log('eventttttttttt', event, KeyboardEvent)
    // const charCode = String.fromCharCode(event.which).toUpperCase();
    // if (event.altKey) {
    //   event.preventDefault(); event.stopPropagation();
      // this.invocarAccion(charCode);
    // }
  }

}
