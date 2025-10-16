import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-customers',
  templateUrl: './modal-customers.component.html',
  styleUrl: './modal-customers.component.scss'
})
export class ModalCustomersComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

    formCustomers!: FormGroup

    ngOnInit(): void {
      this.loadForm()
    }

    loadForm() {
      this.formCustomers = this.fb.group({
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

}
