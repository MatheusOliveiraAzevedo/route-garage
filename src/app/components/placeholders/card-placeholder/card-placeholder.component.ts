import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-card-placeholder',
  templateUrl: './card-placeholder.component.html',
  styleUrl: './card-placeholder.component.scss'
})
export class CardPlaceholderComponent {

 @HostBinding('class') class = 'd-flex flex-row justify-content-evenly flex-wrap gap-4 w-100'

}
