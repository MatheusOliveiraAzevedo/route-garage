import { Component, HostBinding, input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrl: './modal-base.component.scss'
})
export class ModalBaseComponent {

  constructor(
    private modalService: NgbModal
  ) { }

  @HostBinding('class') class = 'card'
  title = input.required<string>()

  closeModal() {
    this.modalService.dismissAll()
  }

}
