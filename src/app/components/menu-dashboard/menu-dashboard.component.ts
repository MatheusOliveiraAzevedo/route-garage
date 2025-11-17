import { Component, HostBinding } from '@angular/core';
import { itensMenuDashboard } from '../../shared/models/links-menus';

@Component({
  selector: 'app-menu-dashboard',
  templateUrl: './menu-dashboard.component.html',
  styleUrl: './menu-dashboard.component.scss'
})
export class MenuDashboardComponent {

  @HostBinding('class') class = 'd-flex flex-wrap align-items-center justify-content-evenly gap-3 w-100';
  itensMenu = itensMenuDashboard

}
