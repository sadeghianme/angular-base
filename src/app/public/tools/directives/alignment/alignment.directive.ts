import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAlignment]'
})
export class AlignmentDirective {

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
) {}

  @Input() set appAlignment(textInfo: any) {
    this.getDirection(textInfo);
    // this.checkValue(textInfo);
  }


  private autoFarsiNum(text) {
    console.log('8888888888888', text, this.hostElement.nativeElement.value)
    let val = text;
    val = val.replace(/0/g, '۰');
    val = val.replace(/1/g, '۱');
    val = val.replace(/2/g, '۲');
    val = val.replace(/3/g, '۳');
    val = val.replace(/4/g, '۴');
    val = val.replace(/5/g, '۵');
    val = val.replace(/6/g, '۶');
    val = val.replace(/7/g, '۷');
    val = val.replace(/8/g, '۸');
    val = val.replace(/9/g, '۹');
    return val;
  }
  private getDirection(textInfo) {
    // console.log('******************************', textInfo)
    if (textInfo.direction === 'left') {
      this.renderer.removeClass(this.hostElement.nativeElement, 'persian-direction');
      this.renderer.addClass(this.hostElement.nativeElement, 'latin-direction');
    } else if (textInfo.direction === 'right') {
      this.renderer.removeClass(this.hostElement.nativeElement, 'latin-direction');
      this.renderer.addClass(this.hostElement.nativeElement, 'persian-direction');
    } else if (textInfo.direction) {
      // setTimeout(() => {
        if (/^[a-zA-Z0-9.@_%#$&*+^)(\-]+$/.test(this.hostElement.nativeElement.innerText[0])) {
          this.renderer.removeClass(this.hostElement.nativeElement, 'persian-direction');
          this.renderer.addClass(this.hostElement.nativeElement, 'latin-direction');
        } else {
          this.renderer.removeClass(this.hostElement.nativeElement, 'latin-direction');
          this.renderer.addClass(this.hostElement.nativeElement, 'persian-direction');
        }
        return;
      // }, 0.00000000001);
    } else {
      if (!textInfo.text && (textInfo.checkInput === 'emailOrNumber' || textInfo.checkInput === 'currency' ||
        textInfo.checkInput === 'englishLetter' || textInfo.checkInput === 'bankCartNum' || textInfo.checkInput === 'email' ||
        textInfo.checkInput === 'floatNumber' || textInfo.checkInput === 'password' || textInfo.checkInput === 'username' ||
        textInfo.checkInput === 'phoneNo' || textInfo.checkInput === 'number' || textInfo.checkInput === 'textNumber')) {
        console.log(textInfo.checkInput, '-------------------')
        this.renderer.removeClass(this.hostElement.nativeElement, 'persian-text');
        this.renderer.addClass(this.hostElement.nativeElement, 'latin-text');
        return;
      } else if (!textInfo.text) {
        this.renderer.removeClass(this.hostElement.nativeElement, 'latin-text');
        this.renderer.addClass(this.hostElement.nativeElement, 'persian-text');
        return;
      }
      if (!textInfo.text) {return; }
      if (/^[a-zA-Z0-9.@_%#$&*+^\-]+$/.test(textInfo.text[0])) {
        this.renderer.removeClass(this.hostElement.nativeElement, 'persian-text');
        this.renderer.addClass(this.hostElement.nativeElement, 'latin-text');
      } else {
        this.renderer.removeClass(this.hostElement.nativeElement, 'latin-text');
        this.renderer.addClass(this.hostElement.nativeElement, 'persian-text');
      }
    }
  }
}
