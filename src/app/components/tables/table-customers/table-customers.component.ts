import { Component, HostBinding, HostListener, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NgbDropdown, NgbDropdownToggle, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from '../../../shared/services/customers.service';
import { catchError, firstValueFrom, of } from 'rxjs';
import { Customers, optionCustomersModal, statusCustomers } from '../../../shared/models/customers-models';

@Component({
  selector: 'app-table-customers',
  templateUrl: './table-customers.component.html',
  styleUrl: './table-customers.component.scss'
})
export class TableCustomersComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private customersService: CustomersService
  ) {}

  @HostBinding('class') class = 'd-flex flex-column align-items-center gap-4 h-100 w-100'
  @ViewChild('modalCustomersComponent') modaCustomers!: TemplateRef<any>
  customers!: Customers[]
  paginaAtual = 1
  dropdownTop = 0
  dropdownLeft = 0
  optModalCustomers: optionCustomersModal = 'add'
  customerSelected?: Customers


  async ngOnInit() {
    await this.getCustomers();
  }

  async getCustomers() {
    setTimeout(async () => {
      this.customers = await firstValueFrom(this.customersService.getCustomers().pipe(catchError(() => {return of([])})))
    }, 200);
  }

  openModal(opt: 'add' | 'edit', customerSelected?: Customers) {
    this.customerSelected = customerSelected;
    this.optModalCustomers = opt
    const modalRef = this.modalService.open(this.modaCustomers, {
      size: 'xl'
    });
  }

  reloadCustomers() {
    this.getCustomers();
  }

  getStatus(status: string) {
    return statusCustomers[status]
  }


}
