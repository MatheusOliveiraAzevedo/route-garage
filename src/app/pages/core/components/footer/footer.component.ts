import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  @HostBinding('class') class = 'd-flex align-items-center justify-content-center w-100'

}
