import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from '../../shared/services/customers.service';
import { Customers, optionCustomersModal } from '../../shared/models/customers-models';
import { TableCustomersComponent } from '../../components/tables/table-customers/table-customers.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  constructor(
    private modalService: NgbModal,
    private customersService: CustomersService
  ) {}

  @HostBinding('class') class = 'd-flex flex-column gap-5 w-100'
  @ViewChild('modalCustomersComponent') modaCustomers!: TemplateRef<any>
  @ViewChild(TableCustomersComponent) tableCustomersComponent!: TableCustomersComponent
  optModalCustomers: optionCustomersModal = 'add'
  customerSelected?: Customers

  openModal(opt: optionCustomersModal, customerSelected?: Customers) {
    this.customerSelected = customerSelected;
    this.optModalCustomers = opt
    const modalRef = this.modalService.open(this.modaCustomers, {
      size: 'xl'
    });
  }

  reloadCustomers() {
    this.tableCustomersComponent.getCustomers()
  }

}
