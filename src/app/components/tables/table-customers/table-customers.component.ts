import { Component, HostBinding, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from '../../../shared/services/customers.service';
import { catchError, firstValueFrom, of } from 'rxjs';
import { Customers, statusCustomers } from '../../../shared/models/customers-models';

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
  customers: Customers[] = []
  paginaAtual = 1


  async ngOnInit() {
    await this.getCustomers();
  }

  async getCustomers() {
    this.customers = await firstValueFrom(this.customersService.getCustomers().pipe(catchError(() => {return of([])})))
  }

  openModal() {
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
