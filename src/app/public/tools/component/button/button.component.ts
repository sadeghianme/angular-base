import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
// import {LoginStateService} from '../../../core/services/loginState/login-state.service';
// import {CommonService} from '../../../core/services/common/common.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  spinnerId = '';
  btnId = '';

  @Input() bgColor = '';
  @Input() textColor = '';
  @Input() textSize = '';
  @Input() iconSize = '';
  @Input() value = '';
  @Input() isDisabled = false;
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
    // this.spinnerId = this.common.generateRandomString();
    // this.btnId = this.common.generateRandomString();
    // console.log('id******************', this.spinnerId, this.btnId);
    // this.loginState.spinnerId = {spinnerId: '#' + this.spinnerId, btnId: '#' + this.btnId};
    this.clickButton.emit();
  }

}
