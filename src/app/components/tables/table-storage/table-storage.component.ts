import { Component, EventEmitter, HostBinding, input, Output, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { Car, optionStorageModal, statusCar } from '../../../shared/models/storage-models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StorageService } from '../../../shared/services/storage.service';
import { firstValueFrom } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-table-storage',
  templateUrl: './table-storage.component.html',
  styleUrl: './table-storage.component.scss'
})
export class TableStorageComponent {

  constructor(
    private modalService: NgbModal,
    private storageSerive: StorageService,
    private messageService: MessageService
  ) {}

  @HostBinding('class') class = 'd-flex flex-column align-items-center gap-4 h-100 w-100'
  @ViewChild('modalStorage') modalStorage!: TemplateRef<any>
  @ViewChild('modalConfirm') modalConfirm!: TemplateRef<any>
  @Output() reloadStorage = new EventEmitter()
  storageCar = input.required<Car[]>()
  paginaAtual = 1
  carSelected: Car | undefined
  optModal: optionStorageModal = 'add'
  excludeItemId: number | null = null

  getStatus(status: string) {
    return statusCar[status]
  }

  openModal(opt: optionStorageModal, carSelected?: Car) {
    this.optModal = opt
    if (carSelected) {
      this.carSelected = carSelected
    }
    this.modalService.open(this.modalStorage, {
      size: 'xl'
    })
  }

  getStorage() {
    this.reloadStorage.emit()
  }

  openModalExclude(id) {
    this.excludeItemId = id
    this.modalService.open(this.modalConfirm, {
      size: 'md'
    })
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  async excludeItem() {
    try {
      await firstValueFrom(this.storageSerive.deleteStorage(this.excludeItemId));
      this.closeModal();
      this.showToast('Concluido', 'Cadastro excluido com sucesso!', 'success')
      this.getStorage();
      this.excludeItemId = null
    } catch (error) {
      console.error(error)
      this.showToast('Erro', 'Não foi possível excluir o cadastro', 'error')
    }
  }

  showToast(sumary: string, detail: string, severity: string) {
    this.messageService.add({ severity: severity, summary: sumary, detail: detail, key: 'br', life: 3000 });
  }

}
