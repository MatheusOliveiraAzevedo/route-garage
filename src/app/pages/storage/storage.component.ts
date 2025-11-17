import { Component, HostBinding, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { mockStorageCars } from '../../../assets/mocks/mocks';
import { Car } from '../../shared/models/storage-models';
import { firstValueFrom } from 'rxjs';
import { StorageService } from '../../shared/services/storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.scss'
})
export class StorageComponent implements OnInit {

  constructor(
    private storageSerive: StorageService,
    private modalService: NgbModal
  ) {}

  @HostBinding('class') class = 'd-flex flex-column gap-5 w-100'
  @ViewChild('modalStorage') modalStorage!: TemplateRef<any>
  storageCar!: Car[]
  optButtonStorage: boolean = true
  stateOptions: any[] = [{ label: 'Cards', value: true },{ label: 'Tabela', value: false }];

  async ngOnInit() {
      await this.getStorage();
  }

  async getStorage() {
    try {
      setTimeout( async () => {
        this.storageCar = await firstValueFrom(this.storageSerive.getStorage())
      }, 200);
    } catch (error) {
      this.storageCar = []
      console.error(error)
    }
  }

  changeOption(value: boolean) {
    this.optButtonStorage = value
  }

  openModal() {
    this.modalService.open(this.modalStorage, {
      size: 'xl'
    });
  }

}
