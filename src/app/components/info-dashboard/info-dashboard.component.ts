import { Component } from '@angular/core';
import { InfoDashboard } from '../../shared/models/dashboard-models';
import { mockInfoDashboard } from '../../shared/mocks/mocks';

@Component({
  selector: 'app-info-dashboard',
  templateUrl: './info-dashboard.component.html',
  styleUrl: './info-dashboard.component.scss'
})
export class InfoDashboardComponent {

  constructor() { }

  mockInfoDashboard = mockInfoDashboard


}
