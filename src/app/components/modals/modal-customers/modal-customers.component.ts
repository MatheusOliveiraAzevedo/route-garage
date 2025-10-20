import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../../../shared/services/customers.service';
import { catchError, of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-customers',
  templateUrl: './modal-customers.component.html',
  styleUrl: './modal-customers.component.scss'
})
export class ModalCustomersComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private customersService: CustomersService,
    private modalService: NgbModal
  ) { }

  @Output() reloadCustomers = new EventEmitter()
  formCustomers!: FormGroup

    ngOnInit(): void {
      this.loadForm()
    }

    loadForm() {
      this.formCustomers = this.fb.group({
        name: [null, Validators.compose([
          Validators.required
        ])],
        email: [null, Validators.compose([
          Validators.required
        ])],
        phone: [null, Validators.compose([
          Validators.required
        ])],
        address: [null, Validators.compose([
          Validators.required
        ])],
        status: [null, Validators.compose([
          Validators.required
        ])],
        birthDate: [null, Validators.compose([
          Validators.required
        ])],
        gender: [null, Validators.compose([
          Validators.required
        ])],
        cpf: [null, Validators.compose([
          Validators.required
        ])],
        rg: [null, Validators.compose([
          Validators.required
        ])]
      })
    }

    save() {
      if (this.formCustomers.invalid) {
        alert('Preencha todos os campos')
        this.formCustomers.markAllAsTouched();
        return;
      }
      this.customersService.addCustomers(this.formCustomers.value).pipe(
        catchError(() => {
          alert('Não foi possível cadastrar o cliente')
          return of(null)
        })
      )
      .subscribe(() => {
        this.reloadCustomers.emit();
        alert('Cliente cadastrado com sucesso!');
        this.modalService.dismissAll();
        this.formCustomers.reset()
      })
    }

}
