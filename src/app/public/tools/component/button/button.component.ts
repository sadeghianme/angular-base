import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  spinnerId = '';
  btnId = '';

  @Input() bgColor = '';
  @Input() radiusBorder = 0;
  @Input() textColor = '';
  @Input() textSize = '';
  @Input() iconSize = '';
  @Input() iconColor = '';
  @Input() value = '';
  @Input() isDisabled = false;
  @Input() iconInRight = false;
  @Input() iconName = '';
  @Input() tooltip = '';
  @Input() size = { height: '', width: '' };
  @Input() btnType = 'default'; // default and icon and icon-border -- values =simple, square-simple,  circle-simple
  @Output() clickButton = new EventEmitter<any> ();
  constructor(
    // private loginState: LoginStateService,
    // private common: CommonService
  ) {
  }

  ngOnInit() {
  }

  click() {
    console.log('22', this.bgColor)
    // this.spinnerId = this.common.generateRandomString();
    // this.btnId = this.common.generateRandomString();
    // this.loginState.spinnerId.push({spinnerId: '#' + this.spinnerId, btnId: '#' + this.btnId});
    this.clickButton.emit();
  }

}
