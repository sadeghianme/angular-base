import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  maximize = false;
  @Input() type = 'normal'; // empty = flat modal without header and body and normal contains header and body
  @Input() title = '';
  @Input() modalHeight = 0;
  @Input() modalWidth = 0;
  @Input() modalMaxWidth: number;
  @Input() modalMinWidth: number;
  @Input() modalMxnHeight: number;
  @Input() modalMinHeight: number;
  @Input() isMaximize = {state: false, visible: false};
  @Input() isHelp = {state: false, visible: false};
  @Input() showFooter = true;
  @Input() nonePadding = false;
  @Input() showOverlay = true;
  @Input() modalSize: string; // value is  full, large , 'middle', 'small'
  @Output() closeModal = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.maximize = this.isMaximize.state;
  }

  closeModalEvent() {
    this.closeModal.emit(false);
  }

  showMessageBox() {
    this.isHelp.state = !this.isHelp.state;
    console.log(this.isHelp)
    if (this.isHelp.state) {
      $('.public-modal-message').slideDown();
    } else {
      $('.public-modal-message').slideUp();
    }
  }
}
