import { Component, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table-customers',
  templateUrl: './table-customers.component.html',
  styleUrl: './table-customers.component.scss'
})
export class TableCustomersComponent {

  constructor(
    private modalService: NgbModal
  ) {}

  @HostBinding('class') class = 'd-flex flex-column gap-4 h-100 w-100'
  @ViewChild('modalCustomersComponent') modaCustomers!: TemplateRef<any>
  customers = [
    {
      name: 'João',
      email: 'j@j.com',
      phone: '11 1111-1111',
      address: 'Rua A, 123',
      status: 'Ativo',
      birthDate: '1990-01-01',
      gender: 'Masculino',
      cpf: '123.456.789-00',
      rg: '123456789',
      createdAt: '2022-01-01',
      updatedAt: '2022-01-01'
    },
    {
      name: 'Maria',
      email: 'm@m.com',
      phone: '22 2222-2222',
      address: 'Rua B, 456',
      status: 'Inativo',
      birthDate: '1991-02-02',
      gender: 'Feminino',
      cpf: '987.654.321-00',
      rg: '987654321',
      createdAt: '2022-02-02',
      updatedAt: '2022-02-02'
    },
    {
      name: 'Pedro',
      email: 'p@p.com',
      phone: '33 3333-3333',
      address: 'Rua C, 789',
      status: 'Ativo',
      birthDate: '1992-03-03',
      gender: 'Masculino',
      cpf: '321.654.987-00',
      rg: '321654987',
      createdAt: '2022-03-03',
      updatedAt: '2022-03-03'
    },
    {
      name: 'Ana',
      email: 'a@a.com',
      phone: '44 4444-4444',
      address: 'Rua D, 012',
      status: 'Inativo',
      birthDate: '1993-04-04',
      gender: 'Feminino',
      cpf: '654.321.987-00',
      rg: '654321987',
      createdAt: '2022-04-04',
      updatedAt: '2022-04-04'
    },
    {
      name: 'Lucas',
      email: 'l@l.com',
      phone: '55 5555-5555',
      address: 'Rua E, 345',
      status: 'Ativo',
      birthDate: '1994-05-05',
      gender: 'Masculino',
      cpf: '987.321.654-00',
      rg: '987321654',
      createdAt: '2022-05-05',
      updatedAt: '2022-05-05'
    },
    {
      name: 'Sofia',
      email: 's@s.com',
      phone: '66 6666-6666',
      address: 'Rua F, 678',
      status: 'Inativo',
      birthDate: '1995-06-06',
      gender: 'Feminino',
      cpf: '321.987.654-00',
      rg: '321987654',
      createdAt: '2022-06-06',
      updatedAt: '2022-06-06'
    },
    {
      name: 'Rafael',
      email: 'r@r.com',
      phone: '77 7777-7777',
      address: 'Rua G, 901',
      status: 'Ativo',
      birthDate: '1996-07-07',
      gender: 'Masculino',
      cpf: '654.987.321-00',
      rg: '654987321',
      createdAt: '2022-07-07',
      updatedAt: '2022-07-07'
    },
    {
      name: 'Isabella',
      email: 'i@i.com',
      phone: '88 8888-8888',
      address: 'Rua H, 234',
      status: 'Inativo',
      birthDate: '1997-08-08',
      gender: 'Feminino',
      cpf: '987.654.321-00',
      rg: '987654321',
      createdAt: '2022-08-08',
      updatedAt: '2022-08-08'
    },
    {
      name: 'Guilherme',
      email: 'g@g.com',
      phone: '99 9999-9999',
      address: 'Rua I, 567',
      status: 'Ativo',
      birthDate: '1998-09-09',
      gender: 'Masculino',
      cpf: '321.654.987-00',
      rg: '321654987',
      createdAt: '2022-09-09',
      updatedAt: '2022-09-09'
    }
  ]


  openModal() {
    const modalRef = this.modalService.open(this.modaCustomers, {
      size: 'xl'
    });
  }

}
