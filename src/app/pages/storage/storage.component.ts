import { Component, HostBinding } from '@angular/core';
import { mockStorageCars } from '../../shared/mocks/mocks';
import { Car } from '../../shared/models/storage-models';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.scss'
})
export class StorageComponent {

  @HostBinding('class') class = 'd-flex flex-column gap-4 w-100'
  storageCar: Car[] = mockStorageCars

}
