import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  @HostBinding('class') class = 'd-flex flex-column gap-2 h-100 w-100';

}
