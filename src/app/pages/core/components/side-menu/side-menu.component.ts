import { Component, HostBinding } from '@angular/core';
import { linksSideMenu } from '../../../../shared/models/links-menus';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  @HostBinding('class') class = 'd-flex flex-column align-items-start justify-content-start max-w-250px';
  links = linksSideMenu

}
