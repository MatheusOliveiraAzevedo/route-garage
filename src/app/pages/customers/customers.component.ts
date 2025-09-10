import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  @HostBinding('class') class = 'd-flex flex-column gap-4 h-100 w-100'

}
