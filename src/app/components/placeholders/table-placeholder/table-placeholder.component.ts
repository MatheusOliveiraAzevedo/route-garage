import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-table-placeholder',
  templateUrl: './table-placeholder.component.html',
  styleUrl: './table-placeholder.component.scss'
})
export class TablePlaceholderComponent {

  @HostBinding('class') class = 'd-flex flex-column gap-4 w-100'

}
