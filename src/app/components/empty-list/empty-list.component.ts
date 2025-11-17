import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-empty-list',
  templateUrl: './empty-list.component.html',
  styleUrl: './empty-list.component.scss'
})
export class EmptyListComponent {

  @HostBinding('class') class = 'd-flex flex-column align-items-center justify-content-center gap-2'

}
