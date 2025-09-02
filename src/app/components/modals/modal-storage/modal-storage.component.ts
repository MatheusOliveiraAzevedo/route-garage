import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-storage',
  templateUrl: './modal-storage.component.html',
  styleUrl: './modal-storage.component.scss'
})
export class ModalStorageComponent implements OnInit {

   constructor(
      private modalService: NgbModal,
      private fb: FormBuilder
    ) { }

  @HostBinding('class') class = 'card'
  formStorage!: FormGroup

  ngOnInit(): void {
      this.loadForm();
  }

  loadForm() {
    this.formStorage = this.fb.group({
      name: [null, Validators.compose([
        Validators.required
      ])],
      brand: [null, Validators.compose([
        Validators.required
      ])],
      model: [null, Validators.compose([
        Validators.required
      ])],
      color: [null, Validators.compose([
        Validators.required
      ])],
      yearFabrication: [null, Validators.compose([
        Validators.required
      ])],
      yearModel: [null, Validators.compose([
        Validators.required
      ])],
      km: [null, Validators.compose([
        Validators.required
      ])],
      price: [null, Validators.compose([
        Validators.required
      ])],
      description: [null, Validators.compose([
        Validators.required
      ])],
      status: [null, Validators.compose([
        Validators.required
      ])],
      image: [null, Validators.compose([
        Validators.required
      ])],
    })
  }

  closeModal() {
    this.modalService.dismissAll()
  }
}
