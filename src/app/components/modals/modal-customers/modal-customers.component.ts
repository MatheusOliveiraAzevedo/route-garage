import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../../../shared/services/customers.service';
import { catchError, of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customers } from '../../../shared/models/customers-models';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modal-customers',
  templateUrl: './modal-customers.component.html',
  styleUrl: './modal-customers.component.scss'
})
export class ModalCustomersComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private customersService: CustomersService,
    private modalService: NgbModal,
    private messageService: MessageService
  ) { }

  @Output() reloadCustomers = new EventEmitter()
  opt = input.required<'add' | 'edit'>()
  customerSelected = input<Customers>()
  formCustomers!: FormGroup

    ngOnInit(): void {
      console.log(this.customerSelected())
      this.loadForm()
    }

    loadForm() {
      this.formCustomers = this.fb.group({
        name: [this.opt() === 'edit' ? this.customerSelected()?.name : null, Validators.compose([
          Validators.required
        ])],
        email: [this.opt() === 'edit' ? this.customerSelected()?.email : null, Validators.compose([
          Validators.required
        ])],
        phone: [this.opt() === 'edit' ? this.customerSelected()?.phone : null, Validators.compose([
          Validators.required
        ])],
        address: [this.opt() === 'edit' ? this.customerSelected()?.address : null, Validators.compose([
          Validators.required
        ])],
        status: [this.opt() === 'edit' ? this.customerSelected()?.status : null, Validators.compose([
          Validators.required
        ])],
        birthDate: [this.opt() === 'edit' ? this.customerSelected()?.birthDate : null, Validators.compose([
          Validators.required
        ])],
        gender: [this.opt() === 'edit' ? this.customerSelected()?.gender : null, Validators.compose([
          Validators.required
        ])],
        cpf: [this.opt() === 'edit' ? this.customerSelected()?.cpf : null, Validators.compose([
          Validators.required
        ])],
        rg: [this.opt() === 'edit' ? this.customerSelected()?.rg : null, Validators.compose([
          Validators.required
        ])]
      })
    }

    save() {
      if (this.formCustomers.invalid) {
        this.showToast('Atenção', 'Preencha todos os campos', 'warn')
        this.formCustomers.markAllAsTouched();
        return;
      }

      if (this.opt() === 'edit') {
        this.customersService.updateCustomers(this.formCustomers.value, this.customerSelected()?.id).pipe(
          catchError(() => {
            this.showToast('Erro', 'Não foi possível atualizar o cliente', 'error')
            return of(null)
          })
        )
        .subscribe(() => {
          this.reloadCustomers.emit();
          console.log('editado')
          this.showToast('Concluido', 'Cliente atualizado com sucesso!', 'success')
          this.modalService.dismissAll();
          this.formCustomers.reset()
        })
        return;
      } else if (this.opt() === 'add') {
        this.customersService.addCustomers(this.formCustomers.value).pipe(
          catchError(() => {
            this.showToast('Erro', 'Não foi possível atualizar o cliente', 'error')
            return of(null)
          })
        )
        .subscribe(() => {
          this.reloadCustomers.emit();
          this.showToast('Concluido', 'Cliente adicionado com sucesso!', 'success')
          this.modalService.dismissAll();
          this.formCustomers.reset()
        })
      }

    }

  showToast(sumary: string, detail: string, severity: string) {
    this.messageService.add({ severity: severity, summary: sumary, detail: detail, key: 'br', life: 3000 });
  }

}
