import { Component, HostBinding, OnInit } from '@angular/core';
import { infoDashboard } from '../../shared/models/dashboard-models';
import { mockInfoDashboard } from '../../../assets/mocks/mocks';
import { CustomersService } from '../../shared/services/customers.service';
import { StorageService } from '../../shared/services/storage.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-info-dashboard',
  templateUrl: './info-dashboard.component.html',
  styleUrl: './info-dashboard.component.scss'
})
export class InfoDashboardComponent implements OnInit {

  constructor(
    private customersService: CustomersService,
    private storageSerive: StorageService
  ) { }

  @HostBinding('class') class = 'd-flex flex-column flex-lg-row flex-nowrap gap-3 w-100'
  mockInfoDashboard!: infoDashboard[]
  chartOptions!: any
  itensStatus!: any[]

  async ngOnInit() {
      this.getDashboard();
  }

  async getDashboard() {
    let infoDashboard: infoDashboard[] = mockInfoDashboard
    const countCustomers = await firstValueFrom(this.customersService.getCountCustomers())
    const countStorage = await firstValueFrom(this.storageSerive.getCountStorage())

    infoDashboard.forEach(info => {
      if (info.id === 'all_customers') {
        info.value = countCustomers
      } else if (info.id === 'all_cars') {
        info.value = countStorage
      }
    });

    this.itensStatus = await firstValueFrom(this.storageSerive.getCountStorageStatus())

    this.mockInfoDashboard = infoDashboard
  }

}
