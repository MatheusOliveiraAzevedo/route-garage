import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  @HostBinding('class') class = 'd-flex flex-column justify-content-between px-5 py-4 gap-4 overflow-auto max-h-100 flex-grow-1';

}
