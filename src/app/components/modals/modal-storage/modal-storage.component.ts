import { Component, EventEmitter, HostBinding, input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { StorageService } from '../../../shared/services/storage.service';
import { Car, optionStorageModal, statusCar } from '../../../shared/models/storage-models';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-modal-storage',
  templateUrl: './modal-storage.component.html',
  styleUrl: './modal-storage.component.scss'
})
export class ModalStorageComponent implements OnInit {

   constructor(
      private modalService: NgbModal,
      private fb: FormBuilder,
      private messageService: MessageService,
      private storageSerive: StorageService
    ) { }

  formStorage!: FormGroup
  opt = input.required<optionStorageModal>()
  @Output() reloadStorage = new EventEmitter()
  carSelected = input<Car>()
  statusCar!: any[]

  ngOnInit(): void {
    this.getStatus();
      this.loadForm();
  }

  getStatus() {
    this.statusCar = Object.keys(statusCar).filter(key => isNaN(Number(key))).map((key, index) => ({ name: statusCar[key], id: key }))
    this.statusCar.sort((a, b) => a.name > b.name ? 1 : -1)
  }

  loadForm() {
    if (this.opt() === 'edit') {
      
      console.log(this.carSelected())
    }
    this.formStorage = this.fb.group({
      name: [this.opt() === 'edit' ? this.carSelected()?.name : null, Validators.compose([
        Validators.required
      ])],
      brand: [this.opt() === 'edit' ? this.carSelected()?.brand : null, Validators.compose([
        Validators.required
      ])],
      model: [this.opt() === 'edit' ? this.carSelected()?.model : null, Validators.compose([
        Validators.required
      ])],
      color: [this.opt() === 'edit' ? this.carSelected()?.color : null, Validators.compose([
        Validators.required
      ])],
      yearFabrication: [this.opt() === 'edit' ? this.carSelected()?.yearFabrication : null, Validators.compose([
        Validators.required
      ])],
      yearModel: [this.opt() === 'edit' ? this.carSelected()?.yearModel : null, Validators.compose([
        Validators.required
      ])],
      km: [this.opt() === 'edit' ? this.carSelected()?.km : null, Validators.compose([
        Validators.required
      ])],
      price: [this.opt() === 'edit' ? this.carSelected()?.price : null, Validators.compose([
        Validators.required
      ])],
      description: [this.opt() === 'edit' ? this.carSelected()?.description : null, Validators.compose([
        Validators.required
      ])],
      status: [this.opt() === 'edit' ? this.carSelected()?.status : null, Validators.compose([
        Validators.required
      ])],
      image: [this.opt() === 'edit' ? this.carSelected()?.image : null, Validators.compose([
        // Validators.required
      ])],
    })
  }

  closeModal() {
    this.modalService.dismissAll()
  }

  showToast(sumary: string, detail: string, severity: string) {
    this.messageService.add({ severity: severity, summary: sumary, detail: detail, key: 'br', life: 3000 });
  }

  save() {
    if (this.formStorage.invalid) {
      this.formStorage.markAllAsTouched();
      this.showToast('Atenção', 'Preencha todos os campos', 'warn')
      return;
    }

    if (this.opt() === 'edit') {
      this.storageSerive.updateStorage(this.formStorage.value, this.carSelected()?.id).pipe(
        catchError(() => {
          this.showToast('Erro', 'Não foi possível atualizar o cadastro', 'error')
          return of(null)
        }) 
      ).subscribe(() => {
        this.showToast('Concluido', 'Carro atualizado com sucesso!', 'success')
        this.reloadStorage.emit();
        this.closeModal();
        this.formStorage.reset()
      })
    } else if (this.opt() === 'add') {
      this.storageSerive.addStorage(this.formStorage.value).pipe(
        catchError(() => {
          this.showToast('Erro', 'Não foi possível inserir o cadastro', 'error')
          return of(null)
        }) 
      ).subscribe(() => {
        this.showToast('Concluido', 'Cadastro realizado com sucesso!', 'success')
        this.reloadStorage.emit();
        this.closeModal();
        this.formStorage.reset()
      })
    }
  }
}
