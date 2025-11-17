import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'app-header-pages',
  templateUrl: './header-pages.component.html',
  styleUrl: './header-pages.component.scss'
})
export class HeaderPagesComponent {

  @HostBinding('class') class = 'd-flex align-items-center justify-content-between px-1 w-100';
  title = input.required<string>();
  showButtonBack = input<boolean>(false);

}
