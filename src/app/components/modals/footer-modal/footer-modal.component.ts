import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer-modal',
  templateUrl: './footer-modal.component.html',
  styleUrl: './footer-modal.component.scss'
})
export class FooterModalComponent {

  constructor(
    private modalService: NgbModal
  ) { }

  @Output() confirm = new EventEmitter<any>()

  closeModal() {
    this.modalService.dismissAll()
  }

  confirmButtom() {
    this.confirm.emit()
  }

}
