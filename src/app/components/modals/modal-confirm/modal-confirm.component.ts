import { Component, EventEmitter, input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.scss'
})
export class ModalConfirmComponent {

  constructor(
    private modalService: NgbModal
  ) { }

  message = input.required<string>()
  @Output() returnConfirm = new EventEmitter<any>()


  closeModal() {
    this.modalService.dismissAll();
  }

  confirm() {
    this.returnConfirm.emit()
  }
  

}
